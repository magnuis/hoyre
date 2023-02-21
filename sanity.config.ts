import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

console.log('PROJECT ID: ', projectId)
console.log('DATASET: ', dataset)

export default defineConfig({
  basePath: '/studio',
  name: 'hoyre_dev_admin_panel',
  title: 'Høyre dev admin panel',

  projectId: projectId ? projectId : '',
  dataset: dataset ? dataset : '',

  plugins: [deskTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
