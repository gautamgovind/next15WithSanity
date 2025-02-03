import { type SchemaTypeDefinition } from 'sanity'


import {myIdea} from './myIdea'

import {author} from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [myIdea, author],
}
