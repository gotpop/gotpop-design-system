import type { PagePostImageStoryblok } from "@/types"
import { CustomElement } from "../../ui/CustomElement"
import { PageLayout } from "../PageLayout/PageLayout"
import { PostHeader } from "../PostHeader/PostHeader"

interface PagePostImageProps {
  header: React.ReactNode
  footer: React.ReactNode
  blok: PagePostImageStoryblok
  blocks: React.ReactNode
}

export function PagePostImage({
  header,
  footer,
  blok,
  blocks,
}: PagePostImageProps) {
  return (
    <PageLayout header={header} footer={footer}>
      <PostHeader
        heading={blok.heading}
        publishedDate={blok.published_date}
        style={{ viewTransitionName: blok.view_transition_name }}
      />
      <CustomElement tag="main-content">{blocks}</CustomElement>
    </PageLayout>
  )
}
