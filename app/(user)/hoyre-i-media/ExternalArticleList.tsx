'use client'

import SelectedFilter from 'components/shared/filter/SelectedFilter'
import SortMenu from 'components/shared/filter/SortMenu'
import SubjectsMenu from 'components/shared/filter/SubjectsMenu'
import { useEffect, useState } from 'react'
import { ExternalArticle } from 'type'
import ExternalArticleCard from './ExternalArticleCard'

interface Subject {
  title: string
}

interface ExternalArticlesListProps {
  articles: ExternalArticle[]
  subjects: Subject[]
}
export default function ExternalArticlesList({ articles, subjects }: ExternalArticlesListProps) {
  const [sort, setSort] = useState<string>('desc')
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([])
  const [filteredArticles, setFilteredArticles] = useState<ExternalArticle[]>([])

  useEffect(() => {
    const sortedArticles = articles.sort((a, b) => {
      if (sort === 'desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
    })
    setFilteredArticles(sortedArticles)
  }, [sort])

  useEffect(() => {
    if (selectedSubjects.length > 0) {
      const filtered = articles.filter((article) =>
        article.categories.some((category) =>
          selectedSubjects.some((subject) => subject.title === category.title)
        )
      )
      setFilteredArticles(filtered)
    } else {
      setFilteredArticles(articles)
    }
  }, [selectedSubjects])

  if (articles.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-10 space-y-16 border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        Ingen artikler å vise
      </div>
    )
  }

  const onRemove = (subject: Subject) => {
    setSelectedSubjects(selectedSubjects.filter((sub) => sub.title !== subject.title))
  }

  const onAddSubject = (value: Subject) => {
    if (!selectedSubjects.includes(value)) {
      setSelectedSubjects([...selectedSubjects, value])
    }
  }

  const onRemoveAll = () => {
    setSelectedSubjects([])
    setSort('desc')
  }

  return (
    <div className="max-w-3xl mx-auto space-y-10 border-gray-200 sm:pt-16">
      <div className="flex flex-row gap-x-4 items-center flex-wrap">
        <SortMenu sort={sort} setSort={setSort} />
        <SubjectsMenu subjects={subjects} onAddSubject={onAddSubject} />
        <div className="w-fit h-16 items-center">
          <button
            disabled={selectedSubjects.length === 0}
            onClick={() => onRemoveAll()}
            className={`mt-1 px-3 py-2 shadow hover:outline-none  sm:text-sm rounded-md ${
              selectedSubjects.length === 0
                ? 'text-light_gray '
                : 'hover:shadow-primary focus-visible:border-primary hover:text-primary'
            }`}
          >
            Nullstill filtre
          </button>
        </div>
        {selectedSubjects.length > 0 &&
          selectedSubjects.map((sub) => (
            <div key={sub.title} className="w-fit max-w-lg h-16">
              <SelectedFilter subject={sub} onRemove={onRemove} />
            </div>
          ))}
      </div>
      {articles.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Ingen treff</h2>
          <p className="text-gray">Prøv å endre filterne dine</p>
        </div>
      )}
      {filteredArticles.map(
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
