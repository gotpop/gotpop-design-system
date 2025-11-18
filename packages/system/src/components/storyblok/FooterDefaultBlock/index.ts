// Barrel export - safe for both client and server

export type { FooterData } from "./FooterDefault"
export { FooterDefault } from "./FooterDefault"

// HOC is in a separate file to avoid accidental imports in client context
// Import HOC explicitly: import { FooterDefaultBlock } from "./FooterDefaultBlockHOC"
