'use client'

import SelectedFilter from 'components/shared/SelectedFilter'
import SortMenu from 'components/shared/SortMenu'
import Example from 'components/shared/SubjectsMenu'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { BlogPost } from 'type'
import BlogPostCard from './BlogPostCard'

const builder = imageUrlBuilder(client)

interface Subject {
  title: string
  _id: string
}

export default function BlogPostsList() {
  const [subjects, setSubjects] = useState<Subject[]>([{ title: '', _id: '' }])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [sort, setSort] = useState<string>('desc')
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  // fetch subjects
  useEffect(() => {
    const subjectsQuery = groq`
    *[_type == "subject"] {
    title, _id
    }`

    const fetchSubjects = async () => {
      const result = await client.fetch(subjectsQuery)
      setSubjects(result)
    }
    fetchSubjects()
  }, [])

  // TODO consider fetch all, and do sorting in frontend
  // fetch blogPosts, refetch when sort order or selected subjects changes
  useEffect(() => {
    let subjectFilter = ''
    if (selectedSubjects.length > 0) {
      console.log('selected subjects', selectedSubjects)
      subjectFilter = '&& ('
      selectedSubjects.forEach((subject, index) => {
        if (index === 0) {
          subjectFilter += `references("${findSubjectByTitle(subject)}") `
        } else {
          subjectFilter += ` || references("${findSubjectByTitle(subject)}")`
        }
      })
      subjectFilter += ')'
    }

    const blogPostsQuery = groq`
*[_type == "blogPost" ${subjectFilter}] {
...
    } | order(date ${sort})
    `
    const fetchblogPosts = async () => {
      const result = await client.fetch(blogPostsQuery)
      setBlogPosts(result)
    }
    fetchblogPosts()
  }, [sort, selectedSubjects])

  useEffect(() => {
    console.log(' blog posts: ', blogPosts)
  }, [blogPosts])

  const onRemove = (subject: string) => {
    setSelectedSubjects(selectedSubjects.filter((sub) => sub !== subject))
  }

  const onAddSubject = (value: string) => {
    if (!selectedSubjects.includes(value)) {
      setSelectedSubjects([...selectedSubjects, value])
    }
  }

  const onRemoveAll = () => {
    setSelectedSubjects([])
    setSort('desc')
  }

  const findSubjectById = (ref: string): string => {
    return subjects.find((subject) => subject._id === ref)?.title ?? ''
  }

  const findSubjectByTitle = (title: string): string => {
    return subjects.find((subject) => subject.title === title)?._id ?? ''
  }

  //   const findTitles = (refs): string[] => {
  //     return refs.map((ref) => findSubjectById(ref))
  //   }

  const findTitles = (refs: { _ref: string }[]): string[] => {
    return refs.map((ref) => findSubjectById(ref._ref))
  }

  const alteredSubjects = subjects.map((subject) => {
    return subject.title
  })

  useEffect(() => {
    if (blogPosts.length != 0) {
      console.log(blogPosts[0].categories)
    }
  })
  return (
    <div className="max-w-3xl mx-auto space-y-10 border-gray-200 pt-10 sm:pt-16">
      <div className="flex flex-row gap-x-4 items-center flex-wrap">
        <SortMenu sort={sort} setSort={setSort} />
        <Example
          subjects={alteredSubjects}
          selectedSubjects={selectedSubjects}
          onAddSubject={onAddSubject}
        />
        <div className="w-fit h-16 items-center">
          <button
            onClick={() => onRemoveAll()}
            className="px-3 py-2 block w-fulltext-base border border-gray-300 hover:outline-none hover:text-red-500 hover:ring-red-500 hover:border-red-500 sm:text-sm rounded-md focus-visible:border-primary "
          >
            Nullstill filtre
          </button>
        </div>
        {selectedSubjects.length > 0 &&
          selectedSubjects.map((sub) => (
            <div key={sub} className="w-fit max-w-lg h-16">
              <SelectedFilter subject={sub} onRemove={onRemove} />
            </div>
          ))}
      </div>
      {blogPosts.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Ingen treff</h2>
          <p className="text-gray-500">Prøv å endre filterne dine</p>
        </div>
      )}
      {blogPosts.map((post: BlogPost) => (
        <div className="group" key={post._id}>
          <hr className="sm:block hidden mb-16" />
          {/* <Link href={`sommer-med-sissel/${post.slug.current}`} className="flex items-center">
            <article className="relative isolate flex flex-col gap-6 lg:gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[5/4] lg:w-64 lg:shrink-0">
                <img
                  src={builder.image(post.image).url()}
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-t-2xl lg:rounded-2xl bg-gray-50 object-cover sm:opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 rounded-t-2xl lg:rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  {post.categories.map(
                    (category) =>
                      category._ref && (
                        <div
                          key={category._ref}
                          className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 "
                        >
                          {findSubjectById(category._ref)}
                        </div>
                      )
                  )}
                </div>
                <div className="relative max-w-xl ">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>

                  <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                  <p className="flex items-center mt-5 font-bold group-hover:underline text-gray-900 group-hover:text-gray-600">
                    Les mer
                  </p>
                </div>
              </div>
            </article>
          </Link> */}
          <BlogPostCard post={post} categories={findTitles(post.categories)} />
        </div>
      ))}
    </div>
  )
}
