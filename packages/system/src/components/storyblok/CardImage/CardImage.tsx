import type {
  ConfigStoryblok,
  PagePostStoryblok,
} from "../../../types/storyblok-components"
import { formatDate } from "../../../utils/date-formatter"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography/Typography"
import "./CardImage.css"
import Image from "next/image"

export interface PostProps {
  uuid: string
  full_slug: string
  name: string
  published_at: string
  content: PagePostStoryblok
}

export interface CardImageProps {
  blok: PostProps
  config?: ConfigStoryblok | null
}

export function CardImage({ blok, config }: CardImageProps) {
  const { full_slug, name, published_at, content } = blok
  const {
    heading,
    description,
    published_date,
    image_hero,
    tags = [],
    view_transition_name: viewTransitionName,
  } = content || {}

  let linkPath = `/${full_slug}`

  const root = config?.root_name_space

  if (root && linkPath.startsWith(`/${root}/`)) {
    linkPath = linkPath.slice(root.length + 1)
  }

  const dateToUse = published_date || published_at
  const formattedDate = formatDate(dateToUse)

  const title = heading || name || "Untitled"

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
          {formattedDate} !!!!!
        </Typography>
        <div className="tags">{tagList}</div>
      </div>
      <Typography tag="h3" variant="text-xl" shade="dark">
        <a href={linkPath} className="title-link">
          {title}
        </a>
      </Typography>
      {image_hero?.filename && (
        <div
          className="card-image-hero"
          style={{ aspectRatio: "640 / 316", width: "100%" }}
        >
          <Image
            src={image_hero.filename}
            alt={image_hero.alt || title}
            width={640}
            height={316}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            priority={false}
          />
        </div>
      )}
      <Typography tag="p" variant="text-base" shade="charcoal">
        {description}
      </Typography>
      <a href={linkPath} className="link-simple">
        Read more
      </a>
    </CustomElement>
  )
}
