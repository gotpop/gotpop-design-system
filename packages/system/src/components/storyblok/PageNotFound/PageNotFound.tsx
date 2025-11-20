import Link from "next/link"
import { useId } from "react"
import type { NotFoundStoryblok } from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { PageLayout } from "../PageLayout/PageLayout"
import { Typography } from "../Typography/Typography"
import "./PageNotFound.css"

interface PageNotFoundProps {
  header: React.ReactNode
  footer: React.ReactNode
  blok: NotFoundStoryblok
  blocks: React.ReactNode
  availableStories?: string[]
}

export function PageNotFound({
  header,
  footer,
  blok,
  blocks,
  availableStories,
}: PageNotFoundProps) {
  const id = useId()
  const { title } = blok

  const list = availableStories?.map((slug) => (
    <li key={slug}>
      <Link href={`/${slug}`}>{slug}</Link>
    </li>
  ))

  return (
    <PageLayout header={header} footer={footer} aria-labelledby={id}>
      <CustomElement tag="box-grid">
        <div className="page-not-found">
          <div className="page-not-found__content">
            {title && (
              <Typography tag="h1" variant="text-6xl" shade="dark" id={id}>
                {title}
              </Typography>
            )}
            {blocks}
            {availableStories && availableStories.length > 0 && (
              <>
                <Typography tag="h2" variant="text-lg" shade="dark" id={id}>
                  Available Pages:
                </Typography>
                <ul>{list}</ul>
              </>
            )}
          </div>
        </div>
      </CustomElement>
    </PageLayout>
  )
}
