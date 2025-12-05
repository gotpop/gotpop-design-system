import type {
  ConfigStoryblok,
  MetaDatePublishedStoryblok,
  MetaDescriptionStoryblok,
  MetaTagsStoryblok,
  MetaTitleStoryblok,
  MetaViewTransitionStoryblok,
} from "../../../types/storyblok-components"
import { formatDate } from "../../../utils/date-formatter"
import { CustomElement } from "../../ui/CustomElement"
import { Typography } from "../Typography/Typography"
import "./Card.css"

type MetaDataArray = (
  | MetaTitleStoryblok
  | MetaDatePublishedStoryblok
  | MetaDescriptionStoryblok
  | MetaTagsStoryblok
  | MetaViewTransitionStoryblok
)[]

export interface PostProps {
  full_slug: string
  name: string
  published_at: string
  meta_data_page?: MetaDataArray
}

export interface CardProps {
  blok: PostProps
  config?: ConfigStoryblok | null
}

const getMeta = (metaData: MetaDataArray | undefined) => {
  const getValue = <T extends string | string[]>(
    component: string
  ): T | undefined =>
    metaData?.find((item) => item.component === component)?.payload as T

  const title = getValue<string>("meta_title") || ""
  const date = getValue<string>("meta_date_published") || ""
  const description = getValue<string>("meta_description") || ""
  const tags = getValue<string[]>("meta_tags") || []
  const viewTransitionName = getValue<string>("meta_view_transition") || ""

  return {
    title,
    date,
    description,
    tags,
    viewTransitionName,
  }
}

const getLinkPath = (fullSlug: string, config?: ConfigStoryblok | null) => {
  let linkPath = `/${fullSlug}`

  const root = config?.root_name_space

  if (root && linkPath.startsWith(`/${root}/`)) {
    linkPath = linkPath.slice(root.length + 1)
  }

  return linkPath
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
