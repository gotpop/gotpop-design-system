import type { PageFilterStoryblok } from "../../../types/storyblok-components"
import { PageLayout } from "../PageLayout/PageLayout"

interface PageFilterViewProps {
  header: React.ReactNode
  footer: React.ReactNode
  blok: PageFilterStoryblok
  blocks: React.ReactNode
}

export function PageFilter({ header, footer, blocks }: PageFilterViewProps) {
  return (
    <PageLayout header={header} footer={footer}>
      {blocks}
    </PageLayout>
  )
}
