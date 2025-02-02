import Projects from '@/app/components/Projects'
import { type SchemaTypeDefinition } from 'sanity'
import { projects } from './projects'
import { contactForm } from './contactform'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, contactForm],
}
