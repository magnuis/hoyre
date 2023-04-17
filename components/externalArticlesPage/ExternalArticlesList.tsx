'use client'

import SelectedFilter from 'components/shared/SelectedFilter'
import SortMenu from 'components/shared/SortMenu'
import SubjectsMenu from 'components/shared/SubjectsMenu'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from 'sanity-conf/sanity.client'

const initialPost = [
  {
    _id: '1',
    title: 'Boost your conversion rate',
    categories: [{ _id: 'subject-1' }, { _id: 'subject-2' }],
    publisher: 'Publisher 1',
    description: 'Description 1',
    date: '2020-11-30',
    externalLink: 'https://www.google.com',
  },
]

interface Subject {
  title: string
  _id: string
}

export default function ExternalArticlesList() {
  const [subjects, setSubjects] = useState<Subject[]>([{ title: '', _id: '' }])
  const [articles, setArticles] = useState(initialPost)
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

  // fetch articles, refetch when sort order or selected subjects changes
  useEffect(() => {
    console.log('articles, ', articles)
  }, [articles])

  // TODO consider fetch all, and do sorting in frontend
  // fetch articles, refetch when sort order or selected subjects changes
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

    const articlesQuery = groq`
*[_type == "externalArticle" ${subjectFilter}] {
    _id,
    title,
    categories[] -> {
        _id,
    },
    publisher,
    description,
    date,
    externalLink
    } | order(date ${sort})
    `

    console.log('articlesQuery', articlesQuery)
    const fetchArticles = async () => {
      const result = await client.fetch(articlesQuery)
      setArticles(result)
    }
    fetchArticles()
  }, [sort, selectedSubjects])

  // only show if articles are loaded
  if (articles.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-10 space-y-16 border-gray-200 pt-10 sm:mt-16 sm:pt-16"></div>
    )
  }

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

  const findSubjectById = (ref: string) => {
    return subjects.find((subject) => subject._id === ref)?.title
  }

  const findSubjectByTitle = (title: string): string => {
    return subjects.find((subject) => subject.title === title)?._id ?? ''
  }

  const alteredSubjects = subjects.map((subject) => {
    return subject.title
  })

  return (
    <div className="max-w-3xl mx-auto space-y-10 border-gray-200 pt-10 sm:pt-16">
      <div className="flex flex-row gap-x-4 items-center flex-wrap">
        {/* <SortMenu sort={sort} setSort={setSort} /> */}
        <SortMenu sort={sort} setSort={setSort} />
        <SubjectsMenu
          subjects={alteredSubjects}
          selectedSubjects={selectedSubjects}
          onAddSubject={onAddSubject}
        />
        <div className="w-fit h-16 items-center">
          {/* TODO: Finn ut hvorfor denne får oransje farge on focus */}
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
      {articles.map((post) => (
        <div key={post._id}>
          <>
            <hr />
            <article className="flex max-w-xl flex-col items-start justify-between sm:mb-16 mt-8">
              <div className="flex items-center gap-x-4 text-xs flex-wrap">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <div className="h-4 w-0.5 bg-gray-300" />
                <p className=" text-gray-500">{post.publisher}</p>
                {post.categories.map((category) => (
                  <div
                    key={category._id}
                    className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 "
                  >
                    {findSubjectById(category._id)}
                  </div>
                ))}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {/* <img src={'jkbln'} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                <div className="text-sm leading-6">
                  {/* <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p> */}
                  <Link href={post.externalLink}>
                    <button className="rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Gå til artikkelen
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </>
        </div>
      ))}
    </div>
  )
}
