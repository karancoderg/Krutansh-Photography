import { groq } from 'next-sanity'

export const getPortfolioItemsQuery = groq`
  *[_type == "portfolioItem"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    mainImage,
    client
  }
`

export const getPortfolioItemBySlugQuery = groq`
  *[_type == "portfolioItem" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    client,
    date,
    mainImage,
    gallery,
    description
  }
`

export const getSiteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    contactEmail,
    instagramUrl
  }
`
