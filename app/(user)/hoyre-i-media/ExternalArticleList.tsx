'use client'

import SelectedFilter from 'components/shared/SelectedFilter'
import SortMenu from 'components/shared/SortMenu'
import SubjectsMenu from 'components/shared/SubjectsMenu'
import { groq } from 'next-sanity'
import { useEffect, useState } from 'react'
import { client } from 'sanity-conf/sanity.client'
import { ExternalArticle } from 'type'
import ExternalArticleCard from './ExternalArticleCard'

interface Subject {
  title: string
  _id: string
}

export default function ExternalArticlesList() {
  const [subjects, setSubjects] = useState<Subject[]>([{ title: '', _id: '' }])
  const [articles, setArticles] = useState<ExternalArticle[]>([])
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
  // fetch articles, refetch when sort order or selected subjects changes
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

    const articlesQuery = groq`
*[_type == "externalArticle" ${subjectFilter}] {
    _id,
    title,
    categories[] -> {
        _id,
        title,
    },
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

  const findSubjectByTitle = (title: string): string => {
    return subjects.find((subject) => subject.title === title)?._id ?? ''
  }

  const alteredSubjects = subjects.map((subject) => {
    return subject.title
  })

  return (
    <div className="max-w-3xl mx-auto space-y-10 border-gray-200 sm:pt-16">
      <div className="flex flex-row gap-x-4 items-center flex-wrap">
        <SortMenu sort={sort} setSort={setSort} />
        <SubjectsMenu
          subjects={alteredSubjects}
          selectedSubjects={selectedSubjects}
          onAddSubject={onAddSubject}
        />
        <div className="w-fit h-16 items-center">
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
      {articles.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Ingen treff</h2>
          <p className="text-gray-500">Prøv å endre filterne dine</p>
        </div>
      )}
      {articles.map(
        (article: ExternalArticle) =>
          article.externalLink && (
            <div key={article._id}>
              <ExternalArticleCard article={article} />
            </div>
          )
      )}
    </div>
  )
}
