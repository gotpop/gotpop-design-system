"use client"

import { startTransition, ViewTransition } from "react"
import { CardImage, type ConfigStoryblok } from "../../storyblok"
import type { PostProps } from "../../storyblok/Card/Card"
import { Card } from "../../storyblok/Card/Card"
import { CustomElement } from "../../ui/CustomElement"
import { CardsControl } from "../CardsControl/CardsControl"
import { useCardsFilter } from "./use-cards-filter"

const SORT_OPTIONS = [
  { value: "published_desc", label: "Newest First" },
  { value: "published_asc", label: "Oldest First" },
  { value: "name_asc", label: "Title A-Z" },
  { value: "name_desc", label: "Title Z-A" },
]

export interface TagDatasourceEntry {
  name: string
  value: string
  id: number
}

interface CardsFilterClientProps {
  posts: PostProps[]
  availableTags: TagDatasourceEntry[]
  config?: ConfigStoryblok | null
}

export function CardsFilterClient({
  availableTags,
  config,
  posts,
}: CardsFilterClientProps) {
  const {
    currentSort,
    currentTag,
    filteredAndSortedPosts,
    setCurrentSort,
    setCurrentTag,
  } = useCardsFilter(posts)

  const handleTagChange = (tag: string) => {
    startTransition(() => {
      setCurrentTag(tag)
    })
  }

  const handleSortChange = (sort: string) => {
    startTransition(() => {
      setCurrentSort(sort)
    })
  }

  const hasPagePostImage = posts.some((post) => {
    console.log("Post ????????:", JSON.stringify(post, null, 2))
    const component = post?.component

    if (component === "card") return false

    return component === "card_image"
  })

  const tagOptions = [
    { value: "all", label: "All Posts" },
    ...availableTags.map((tag) => ({
      value: tag.value,
      label: tag.name,
    })),
  ]

  const output =
    filteredAndSortedPosts.length > 0 &&
    filteredAndSortedPosts.map((blok) =>
      hasPagePostImage ? (
        <CardImage key={blok.full_slug} blok={blok} config={config} />
      ) : (
        <Card key={blok.full_slug} blok={blok} config={config} />
      )
    )

  return (
    <div className="filters-with-output">
      <CustomElement tag="box-grid">
        <CardsControl
          label="Filter"
          value={currentTag}
          onChange={handleTagChange}
          options={tagOptions}
        />
        <CardsControl
          label="Sort"
          value={currentSort}
          onChange={handleSortChange}
          options={SORT_OPTIONS}
        />
      </CustomElement>
      <ViewTransition update="reorder-list">
        <output className="grid-cards" aria-live="polite">
          {output}
        </output>
      </ViewTransition>
    </div>
  )
}
