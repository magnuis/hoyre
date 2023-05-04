'use client'
import SummerPostCard from 'components/sommerMedSissel/SummerPostCard'
import React, { useState, useEffect } from 'react'
import { SummerPost } from 'type'
import SelectYearDropdown from './SelectYearDropdown'

interface SommerMedSisselListProps {
  posts: SummerPost[]
}
export default function SommerMedSisselList({ posts }: SommerMedSisselListProps) {
  const [selectedOption, setSelectedOption] = useState<string>('2023')
  const [filteredPosts, setFilteredPosts] = useState<SummerPost[]>([])

  useEffect(() => {
    const fposts = posts.filter(
      (post) => new Date(post.date).getFullYear() === parseInt(selectedOption)
    )
    setFilteredPosts(fposts)
  }, [selectedOption])

  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <div className="dropdown-container flex pb-8 mt-6">
        <SelectYearDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>
      <div className="space-y-16 lg:space-y-16">
        {filteredPosts.map((post: SummerPost, index: number) => (
          <div key={post._id}>
            <SummerPostCard post={post} first={index === 0} />
          </div>
        ))}
      </div>
    </div>
  )
}
