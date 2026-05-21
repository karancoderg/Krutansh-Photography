import { type SchemaTypeDefinition } from 'sanity'

import portfolioItem from './portfolioItem'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioItem, siteSettings],
}
