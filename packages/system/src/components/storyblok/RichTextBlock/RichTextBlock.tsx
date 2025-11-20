import type { RichTextBlockStoryblok } from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { StoryblokRichText } from "../RichText"

interface RichTextBlockProps {
  blok: RichTextBlockStoryblok
}

export function RichTextBlock({ blok }: RichTextBlockProps): React.JSX.Element {
  const { content } = blok

  return (
    <CustomElement tag="box-grid">
      {content && <StoryblokRichText content={content} />}
    </CustomElement>
  )
}
