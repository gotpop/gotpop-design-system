import { Suspense } from "react"
import type {
  CardsClientFilterStoryblok,
  ConfigStoryblok,
  PostProps,
  TagDatasourceEntry,
} from "../../../types"
import { CardsFilterClient } from "../../ui/CardsFilter/CardsFilterClient"
import "./CardsClientFilter.css"

interface CardsProps {
  blok: CardsClientFilterStoryblok
  blocks?: React.ReactNode
  availableTags: TagDatasourceEntry[]
  config?: ConfigStoryblok | null
  posts: PostProps[]
}

export async function CardsClientFilter({
  availableTags,
  posts,
  config,
}: CardsProps) {
  return (
    <Suspense fallback={<div>Loading posts...</div>}>
      <CardsFilterClient
        availableTags={availableTags}
        posts={posts}
        config={config}
      />
    </Suspense>
  )
}
