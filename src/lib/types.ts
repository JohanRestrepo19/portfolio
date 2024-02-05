export type Project = {
  title: string
  description: string
  slug: string
  thumbnail: string,
  contentImages?: string[]
  tags: {
    stack: string
    source?: string
    website?: string
  }
}
