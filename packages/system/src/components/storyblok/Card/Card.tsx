import type { ConfigStoryblok } from "../../../types/storyblok-components"
import {
  getLinkPath,
  getMeta,
  type MetaDataArray,
} from "../../../utils/card-utils"
import { formatDate } from "../../../utils/date-formatter"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography/Typography"
import "./Card.css"

export interface PostProps {
  _uid: string
  full_slug: string
  name: string
  published_at: string
  meta_data_page?: MetaDataArray
  component: string
}

export interface CardProps {
  blok: PostProps
  config?: ConfigStoryblok | null
}

export function Card({ blok, config }: CardProps) {
  const { full_slug, meta_data_page: metaData } = blok

  const { title, date, description, tags, viewTransitionName } =
    getMeta(metaData)

  const linkPath = getLinkPath(full_slug, config)
  const formattedDate = formatDate(date)

  const tagList = tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ))

  return (
    <CustomElement
      tag="box-grid"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      <div className="meta">
        <Typography
          tag="time"
          variant="text-sm"
          shade="charcoal"
          dateTime={formattedDate}
          className="margin-none"
        >
          {formattedDate}
        </Typography>
        <div className="tags">{tagList}</div>
      </div>
      <Typography tag="h3" variant="text-xl" shade="dark">
        <a href={linkPath} className="title-link">
          {title}
        </a>
      </Typography>
      <Typography tag="p" variant="text-base" shade="charcoal">
        {description}
      </Typography>
      <a href={linkPath} className="link-simple">
        Read more
      </a>
    </CustomElement>
  )
}
