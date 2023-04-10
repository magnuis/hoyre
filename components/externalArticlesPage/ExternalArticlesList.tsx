'use client'

import SelectedFilter from 'components/shared/SelectedFilter'
import SortMenu from 'components/shared/SortMenu'
import SubjectsMenu from 'components/shared/SubjectsMenu'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react'
import { client } from 'sanity-conf/sanity.client'

var initialPost = [
  {
    _id: '1',
    title: 'Boost your conversion rate',
    categories: [
      { title: 'Category 1', description: 'Description 1' },
      { title: 'Category 2', description: 'Description 2' },
      { title: 'Category 4', description: 'Description 4' },
    ],
    publisher: 'Publisher 1',
    description: 'Description 1',
    date: '2020-11-30',
    externalLink: 'https://www.google.com',
  },
]

export default function ExternalArticlesList() {
  const [subjects, setSubjects] = useState([])
  const [articles, setArticles] = useState(initialPost)
  const [sort, setSort] = useState<string>('desc')
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  const subjectsQuery = groq`
    *[_type == "subject"] {
    title
    }`
  useEffect(() => {
    const fetchSubjects = async () => {
      const result = await client.fetch(subjectsQuery)
      setSubjects(result)
    }

    fetchSubjects()
  }, [])

  useEffect(() => {
    const articlesQuery = groq`
*[_type == "externalArticle"] {
    _id,
    title,
    categories,
    publisher,
    description,
    date,
    externalLink
    } | order(date ${sort})
    `
    const fetchArticles = async () => {
      const result = await client.fetch(articlesQuery)
      setArticles(result)
    }

    fetchArticles()
  }, [sort, selectedSubjects])

  if (articles.length === 1)
    return (
      <div className="max-w-3xl mx-auto mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"></div>
    )

  const onRemove = (subject: string) => {
    setSelectedSubjects(selectedSubjects.filter((sub) => sub !== subject))
  }

  const onAddSubject = (subject: string) => {
    if (!selectedSubjects.includes(subject)) {
      setSelectedSubjects([...selectedSubjects, subject])
    }
  }

  const onRemoveAll = () => {
    setSelectedSubjects([])
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
      <div className="flex flex-row gap-x-4 items-center flex-wrap">
        <SortMenu sort={sort} setSort={setSort} />
        <SubjectsMenu
          subjects={subjects}
          selectedSubjects={selectedSubjects}
          onAddSubject={onAddSubject}
        />
        <div className="w-fit h-16 items-center">
          <button
            onClick={() => onRemoveAll()}
            type="button"
            className="px-3 py-2 block w-fulltext-base border border-gray-300 hover:outline-none hover:text-red-500 hover:ring-red-500 hover:border-red-500 sm:text-sm rounded-md"
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
        <article key={post._id} className="z-1 flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-500">
              {post.date}
            </time>
            {/* <a
                    href={post.categories.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categories.title}
                  </a> */}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              {/* <a href={post.externalLink}>
                <span className="absolute inset-0" />
                {post.title}
              </a> */}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            {/* <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  /> */}
            <div className="text-sm leading-6">
              {/* <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p> */}
              {/* <p className="text-gray-600">{post.author.role}</p> */}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
