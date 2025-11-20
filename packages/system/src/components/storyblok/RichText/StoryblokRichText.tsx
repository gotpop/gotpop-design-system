import type {
  BaselineStatusBlockStoryblok,
  HeroDefaultStoryblok,
  LogoDefaultStoryblok,
  RichTextBlockStoryblok,
  RichTextCodeBlockStoryblok,
  RichtextStoryblok,
  SnippetBlockStoryblok,
} from "../../../types/storyblok-components"
import { BaselineStatusBlock } from "../BaselineStatusBlock"
import { HeroDefault } from "../HeroDefault"
import { LogoDefault } from "../LogoDefault"
import { RichTextBlock } from "../RichTextBlock"
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
    hero_default: (props: any) => (
      <HeroDefault blok={props as HeroDefaultStoryblok} />
    ),
    logo_default: (props: any) => (
      <LogoDefault blok={props as LogoDefaultStoryblok} />
    ),
    rich_text_block: (props: any) => (
      <RichTextBlock blok={props as RichTextBlockStoryblok} />
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
