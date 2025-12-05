"use client"

import { useMemo, useState } from "react"
import type { PostProps } from "../Card/Card"
import { getMeta } from "../../../utils/card-utils"

export function useCardsFilter(posts: PostProps[]) {
  const [currentTag, setCurrentTag] = useState("all")
  const [currentSort, setCurrentSort] = useState("published_desc")

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts

    if (currentTag !== "all") {
      filtered = posts.filter((post) => {
        const { tags } = getMeta(post.meta_data_page)
        return tags.some(
          (tag: string) => tag.toLowerCase() === currentTag.toLowerCase()
        )
      })
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (currentSort) {
        case "published_desc": {
          const { date: dateA } = getMeta(a.meta_data_page)
          const { date: dateB } = getMeta(b.meta_data_page)
          const finalDateA = dateA || a.published_at
          const finalDateB = dateB || b.published_at
          return new Date(finalDateB).getTime() - new Date(finalDateA).getTime()
        }
        case "published_asc": {
          const { date: dateA } = getMeta(a.meta_data_page)
          const { date: dateB } = getMeta(b.meta_data_page)
          const finalDateA = dateA || a.published_at
          const finalDateB = dateB || b.published_at
          return new Date(finalDateA).getTime() - new Date(finalDateB).getTime()
        }
        case "name_asc":
          return a.name.localeCompare(b.name)
        case "name_desc":
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

    return sorted
  }, [posts, currentTag, currentSort])

  return {
    currentTag,
    setCurrentTag,
    currentSort,
    setCurrentSort,
    filteredAndSortedPosts,
  }
}
