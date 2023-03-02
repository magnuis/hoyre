'use client'

import { NextStudio } from 'next-sanity/studio'
import React from 'react'

import config from '../../../sanity-conf/sanity.config'

export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />
}
