export type GalleryCategory =
  | 'Puppy Days'
  | 'Naughty Shiro'
  | 'Office Days'
  | 'Sleeping Positions'
  | 'Family Moments'
  | 'Outdoor Adventures'

export type ShiroImage = {
  src: string
  fileName: string
  title: string
  category: GalleryCategory
  tone: string
}
