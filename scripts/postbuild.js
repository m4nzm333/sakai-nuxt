#!/usr/bin/env node
/**
 * Postbuild script: fixes missing vue entry files in Nitro output.
 *
 * Node.js v24 resolves the "node" condition in vue's exports map,
 * pointing to "index.mjs", which Nitro's file tracer doesn't include.
 * This script creates the missing wrapper files so the server can start.
 */
import { writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const vuePkgDir = join(root, '.output/server/node_modules/vue')

if (!existsSync(vuePkgDir)) {
  console.warn('[postbuild] vue output dir not found, skipping fix')
  process.exit(0)
}

const indexJs = join(vuePkgDir, 'index.js')
const indexMjs = join(vuePkgDir, 'index.mjs')

if (!existsSync(indexJs)) {
  writeFileSync(indexJs, `'use strict';\nmodule.exports = require('./dist/vue.cjs.prod.js');\n`, 'utf8')
  console.log('[postbuild] Created .output/server/node_modules/vue/index.js')
}

if (!existsSync(indexMjs)) {
  writeFileSync(indexMjs, `export * from './index.js';\n`, 'utf8')
  console.log('[postbuild] Created .output/server/node_modules/vue/index.mjs')
}

console.log('[postbuild] vue entry files OK')
