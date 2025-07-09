
const express = require('express')
const { loadNuxt, build } = require('nuxt')

const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const app = express()

async function start() {
  try {
    const nuxt = await loadNuxt(isProd ? 'start' : 'dev')

    if (!isProd) {
      await build(nuxt)
    }

    app.use(nuxt.render)

    app.listen(port, '0.0.0.0', () => {
      console.log(`✅ Nuxt app is running at http://localhost:${port}`)
    })
  } catch (err) {
    console.error('❌ Failed to start Nuxt server:', err)
    process.exit(1)
  }
}

start()