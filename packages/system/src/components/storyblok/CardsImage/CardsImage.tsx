import { Suspense } from "react"
import type {
  CardsStoryblok,
  ConfigStoryblok,
  PostProps,
  TagDatasourceEntry,
} from "../../../types"
import { CardsFilterClient } from "../CardsFilter/CardsFilterClient"
import "./Cards.css"

interface CardsImageProps {
  blok: CardsStoryblok
  blocks?: React.ReactNode
  posts: PostProps[]
  availableTags: TagDatasourceEntry[]
  config?: ConfigStoryblok | null
}

export async function CardsImage({
  availableTags,
  blocks,
  blok,
  config,
  posts,
}: CardsImageProps) {
  const { use_filters: useClientSideFilters } = blok

  return useClientSideFilters ? (
    <Suspense fallback={<div>Loading posts...</div>}>
      <CardsFilterClient
        availableTags={availableTags}
        config={config}
        posts={posts}
      />
    </Suspense>
  ) : (
    <div className="grid-cards">{blocks}</div>
  )
}
