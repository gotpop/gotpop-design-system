import type { CardsServerStoryblok, ConfigStoryblok } from "../../../types"
import "./CardsServer.css"

interface CardsProps {
  blok: CardsServerStoryblok
  blocks?: React.ReactNode
  config?: ConfigStoryblok | null
}

export async function CardsServer({ blocks }: CardsProps) {
  return <div className="grid-cards">{blocks}</div>
}
