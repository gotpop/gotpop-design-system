import "server-only"

import { getStaticParams } from "../data"

/** Generates static parameters for Next.js static site generation from Storyblok data. */
export async function generateAllStaticParams() {
  return await getStaticParams()
}
