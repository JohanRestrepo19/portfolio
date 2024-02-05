export type Project = {
  title: string
  description: string
  slug: string
  images: string[]
  tags: {
    stack: string
    source?: string
    website?: string
  }
}
