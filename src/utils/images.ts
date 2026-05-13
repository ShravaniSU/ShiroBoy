import type { GalleryCategory, ShiroImage } from '../types/gallery'

const imageModules = import.meta.glob('../../Images/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const titleFromFileName = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b0(\d)\b/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

const categoryFor = (fileName: string): GalleryCategory => {
  const lower = fileName.toLowerCase()

  if (lower.includes('sofa') || lower.includes('torn') || lower.includes('angry') || lower.includes('ball') || lower.includes('toys')) {
    return 'Naughty Shiro'
  }

  if (lower.includes('office')) {
    return 'Office Days'
  }

  if (lower.includes('bed') || lower.includes('sleep') || lower.includes('table')) {
    return 'Sleeping Positions'
  }

  if (lower.includes('happy') || lower.includes('shirt') || lower.includes('door')) {
    return 'Family Moments'
  }

  if (lower.includes('outdoor') || lower.includes('walk') || lower.includes('park')) {
    return 'Outdoor Adventures'
  }

  return 'Puppy Days'
}

const captionsByFileName: Record<string, string> = {
  'Happy02.jpg': 'pure golden sunshine',
  'ShiroAngry.jpg': 'tiny royal attitude',
  'ShiroBallTorn.jpg': 'ball inspector on duty',
  'ShiroBed.jpg': 'bedtime negotiations',
  'ShiroBed02.jpg': 'soft snores club',
  'ShiroColorfullShirt.jpg': 'fashionably golden',
  'ShiroFavoriteBall.jpg': 'one true tennis love',
  'ShiroHappy.jpg': 'smile that fixes days',
  'ShiroOffice01.jpg': 'junior office manager',
  'ShiroOffice02.jpg': 'employee of every month',
  'ShiroOnMyBed01.jpg': 'claimed the best spot',
  'ShiroOnMyBed02.jpg': 'blanket kingdom rules',
  'ShiroOnMyBed03.jpg': 'sleepy little shadow',
  'ShiroOnMyBed04.jpg': 'dreaming beside us',
  'ShiroOnMyBed05.jpg': 'five more minutes',
  'ShiroRedShirt.jpg': 'red shirt superstar',
  'ShiroSittingBesideDoor.jpg': 'waiting with his whole heart',
  'ShiroSleepUnderTable.jpg': 'hideout nap specialist',
  'ShiroSofaTorn.jpg': 'sofa audit complete',
  'ShiroSofaTorn02.jpg': 'zero regrets department',
  'ShiroToys.jpg': 'toy room supervisor',
}

const captionFor = (fileName: string, category: GalleryCategory) => {
  if (captionsByFileName[fileName]) {
    return captionsByFileName[fileName]
  }

  const fallbacks: Record<GalleryCategory, string> = {
    'Puppy Days': 'tiny beginnings',
    'Naughty Shiro': 'chaos with dimples',
    'Office Days': 'office cuddle shift',
    'Sleeping Positions': 'soft snores',
    'Family Moments': 'home, exactly',
    'Outdoor Adventures': 'sunlit paws',
  }

  return fallbacks[category]
}

export const shiroImages: ShiroImage[] = Object.entries(imageModules)
  .map(([path, src]) => {
    const fileName = path.split('/').pop() ?? 'Shiro'
    const category = categoryFor(fileName)

    return {
      src,
      fileName,
      title: titleFromFileName(fileName),
      category,
      tone: captionFor(fileName, category),
    }
  })
  .sort((a, b) => a.fileName.localeCompare(b.fileName))

export const imagesByCategory = shiroImages.reduce(
  (groups, image) => {
    groups[image.category] = [...(groups[image.category] ?? []), image]
    return groups
  },
  {} as Record<GalleryCategory, ShiroImage[]>,
)

export const getImagesByCategory = (category: GalleryCategory) => imagesByCategory[category] ?? []

export const getFirstMatchingImage = (...needles: string[]) =>
  shiroImages.find((image) =>
    needles.some((needle) => image.fileName.toLowerCase().includes(needle.toLowerCase())),
  ) ?? shiroImages[0]

const landscapeImageNames = [
  'ShiroAngry',
  'ShiroBed',
  'ShiroFavoriteBall',
  'ShiroHappy',
  'ShiroOnMyBed01',
  'ShiroOnMyBed02',
  'ShiroOnMyBed03',
  'ShiroOnMyBed04',
  'ShiroOnMyBed05',
  'ShiroRedShirt',
  'ShiroSleepUnderTable',
  'ShiroSofaTorn',
]
const squareImageNames = ['ShiroSofaTorn02']

export const getImageDisplay = (fileName: string) => {
  if (landscapeImageNames.some((name) => fileName.includes(name))) {
    return {
      aspectClass: 'aspect-[16/9]',
      gridClass: 'lg:col-span-2',
      imageFitClass: 'object-cover',
      objectPosition: fileName.includes('ShiroSofaTorn')
        ? 'object-[center_18%]'
        : fileName.includes('ShiroRedShirt')
          ? 'object-[center_42%]'
          : 'object-center',
    }
  }

  if (squareImageNames.some((name) => fileName.includes(name))) {
    return {
      aspectClass: 'aspect-square',
      gridClass: '',
      imageFitClass: 'object-cover',
      objectPosition: 'object-center',
    }
  }

  return {
    aspectClass: 'aspect-[4/5]',
    gridClass: '',
    imageFitClass: 'object-cover',
    objectPosition: ['ShiroBallTorn', 'ShiroToys'].some((name) => fileName.includes(name))
      ? 'object-[center_10%]'
      : fileName.includes('Office02')
        ? 'object-[center_36%]'
        : 'object-center',
  }
}
