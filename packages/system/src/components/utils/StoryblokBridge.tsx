"use client"

import { useEffect } from "react"
import type { StoryblokBridgeEvent } from "../../types"

// Local interface for window.storyblok to avoid global declaration issues with JSR
interface WindowWithStoryblok extends Window {
  storyblok?: {
    init: (config: { accessToken?: string }) => void
    on: (
      events: string[],
      callback: (event: StoryblokBridgeEvent) => void
    ) => void
    off: (events: string[]) => void
    pingEditor: (callback: () => void) => void
    enterEditmode: () => void
    inEditor?: boolean
  }
}

export function StoryblokBridge(): React.JSX.Element | null {
  useEffect(() => {
    if (typeof window === "undefined") return

    const windowWithStoryblok = window as WindowWithStoryblok

    const checkBridge = setInterval(() => {
      if (windowWithStoryblok.storyblok) {
        clearInterval(checkBridge)

        windowWithStoryblok.storyblok.init({
          accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
        })

        windowWithStoryblok.storyblok.on(
          ["input", "published", "change"],
          (event: StoryblokBridgeEvent) => {
            if (event.action === "input") {
              window.location.reload()
            } else if (
              event.action === "change" ||
              event.action === "published"
            ) {
              window.location.reload()
            }
          }
        )

        windowWithStoryblok.storyblok.pingEditor(() => {
          if (windowWithStoryblok.storyblok?.inEditor) {
            windowWithStoryblok.storyblok.enterEditmode()
          }
        })
      }
    }, 100)

    return () => {
      clearInterval(checkBridge)
      if (windowWithStoryblok.storyblok) {
        windowWithStoryblok.storyblok.off(["input", "published", "change"])
      }
    }
  }, [])

  return null
}
