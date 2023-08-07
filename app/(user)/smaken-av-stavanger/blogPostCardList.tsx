'use client'
import SelectedFilter from 'components/shared/filter/SelectedFilter'
import SortMenu from 'components/shared/filter/SortMenu'
import SubjectsMenu from 'components/shared/filter/SubjectsMenu'
import { useEffect, useState } from 'react'
import { BlogPost, Subject } from 'type'
import BlogPostCard from './BlogPostCard'

interface BlogPostsListProps {
  blogPosts: BlogPost[]
  subjects: Subject[]
}

export default function BlogPostsList({ blogPosts, subjects }: BlogPostsListProps) {
  const [sort, setSort] = useState<string>('desc')
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const sortedArticles = blogPosts.sort((a, b) => {
      if (sort === 'desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
    })
    setFilteredPosts(sortedArticles)
  }, [sort])

  useEffect(() => {
    if (selectedSubjects.length > 0) {
      const filtered = blogPosts.filter((article) =>
        article.categories.some((category) =>
          selectedSubjects.some((subject) => subject.title === category.title)
        )
      )
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(blogPosts)
    }
  }, [selectedSubjects])

  const onAddSubject = (value: Subject) => {
    const present = selectedSubjects.some((sub) => sub.title === value.title)
    if (!present) {
      setSelectedSubjects([...selectedSubjects, value])
    }
  }

  const onRemove = (subject: Subject) => {
    setSelectedSubjects(selectedSubjects.filter((sub) => sub.title !== subject.title))
  }

  const onRemoveAll = () => {
    setSelectedSubjects([])
    setSort('desc')
  }

  return (
    <div className="max-w-3xl mx-auto space-y-10 border-gray-200 pt-10 ">
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
      {blogPosts.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Ingen treff</h2>
          <p className="text-light_gray">Prøv å endre filterne dine</p>
        </div>
      )}
      <hr className="sm:hidden block mb-16 border-light_gray border-t" />
      <span className="flex flex-col gap-y-16">
        {filteredPosts.map((post: BlogPost) => (
          <div className="group" key={post._id}>
            <BlogPostCard post={post} />
          </div>
        ))}
      </span>
    </div>
  )
}
