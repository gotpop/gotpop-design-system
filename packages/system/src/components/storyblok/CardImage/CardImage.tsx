import type { ConfigStoryblok } from "../../../types/storyblok-components"
import {
  getLinkPath,
  getMeta,
  type MetaDataArray,
} from "../../../utils/card-utils"
import { formatDate } from "../../../utils/date-formatter"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography/Typography"
import "./CardImage.css"

export interface CardImageBlokProps {
  _uid: string
  component: string
  full_slug: string
  meta_data_page?: MetaDataArray
}

export interface CardImageProps {
  blok: CardImageBlokProps
  config?: ConfigStoryblok | null
}

export function CardImage({ blok, config }: CardImageProps) {
  const { full_slug: fullSlug, meta_data_page: metaData } = blok
  const { title, date, description, tags, viewTransitionName } =
    getMeta(metaData)

  const linkPath = getLinkPath(fullSlug, config)
  const formattedDate = formatDate(date)

  const tagList = tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ))

  return (
    <CustomElement
      tag="box-grid"
      className="card-with-image"
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
