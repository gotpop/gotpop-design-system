import type {
  BaselineStatusBlockStoryblok,
  RichTextCodeBlockStoryblok,
  RichtextStoryblok,
  SnippetBlockStoryblok,
} from "../../../types/storyblok-components"
import { BaselineStatusBlock } from "../BaselineStatusBlock"
import { RichTextCodeBlock } from "../RichTextCodeBlock"
import { SnippetBlock } from "../SnippetBlock"
import { RichText } from "./RichText"

interface StoryblokRichTextProps {
  content: RichtextStoryblok
  className?: string
}

export function StoryblokRichText({
  content,
  className,
}: StoryblokRichTextProps): React.JSX.Element | null {
  const blokResolvers = {
    baseline_status_block: (props: any) => (
      <BaselineStatusBlock blok={props as BaselineStatusBlockStoryblok} />
    ),

    rich_text_code_block: (props: any) => (
      <RichTextCodeBlock blok={props as RichTextCodeBlockStoryblok} />
    ),
    snippet_block: (props: any) => (
      <SnippetBlock blok={props as SnippetBlockStoryblok} />
    ),
  }

  return <RichText content={content} blokResolvers={blokResolvers} />
}
