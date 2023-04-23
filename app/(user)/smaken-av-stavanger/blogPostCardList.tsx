'use client'

import SelectedFilter from 'components/shared/SelectedFilter'
import SortMenu from 'components/shared/SortMenu'
import Example from 'components/shared/SubjectsMenu'
import { groq } from 'next-sanity'
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
      _id,
      title, 
      slug, 
      image, 
      description,
      date, 
      categories[]->{title}, 
      body
    } | order(date ${sort})
    `

    const fetchblogPosts = async () => {
      const result = await client.fetch(blogPostsQuery)
      setBlogPosts(result)
    }
    fetchblogPosts()
  }, [sort, selectedSubjects])

  const onAddSubject = (value: string) => {
    if (!selectedSubjects.includes(value)) {
      setSelectedSubjects([...selectedSubjects, value])
    }
  }

  const onRemove = (subject: string) => {
    setSelectedSubjects(selectedSubjects.filter((sub) => sub !== subject))
  }

  const onRemoveAll = () => {
    setSelectedSubjects([])
    setSort('desc')
  }

  const findSubjectByTitle = (title: string): string => {
    return subjects.find((subject) => subject.title === title)?._id ?? ''
  }

  const subjectTitles = subjects.map((subject) => {
    return subject.title
  })

  return (
    <div className="max-w-3xl mx-auto space-y-10 border-gray-200 pt-10 sm:pt-16">
      <div className="flex flex-row gap-x-4 items-center flex-wrap">
        <SortMenu sort={sort} setSort={setSort} />
        <Example
          subjects={subjectTitles}
          selectedSubjects={selectedSubjects}
          onAddSubject={onAddSubject}
        />
        <div className="w-fit h-16 items-center">
          {/* <button
            onClick={() => onRemoveAll()}
            className="mt-1 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm"
          > */}
          <button
            onClick={() => onRemoveAll()}
            className="mt-1 px-3 py-2 border border-gray-300 hover:outline-none hover:text-red-500 hover:ring-red-500 hover:border-red-500 sm:text-sm rounded-md focus-visible:border-primary "
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
      <hr className="sm:hidden block mb-16" />
      {blogPosts.map((post: BlogPost) => (
        <div className="group" key={post._id}>
          <hr className="sm:block hidden mb-16" />
          <BlogPostCard post={post} />
        </div>
      ))}
    </div>
  )
}
