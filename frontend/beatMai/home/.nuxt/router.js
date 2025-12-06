import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _185a6cbc = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _e00d9d80 = () => interopDefault(import('../pages/anonymous/index.vue' /* webpackChunkName: "pages/anonymous/index" */))
const _2dff853b = () => interopDefault(import('../pages/apropos/index.vue' /* webpackChunkName: "pages/apropos/index" */))
const _12b6c0e4 = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _730673c2 = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _558a88a6 = () => interopDefault(import('../pages/edit/index.vue' /* webpackChunkName: "pages/edit/index" */))
const _28cb6af8 = () => interopDefault(import('../pages/opportunities/index.vue' /* webpackChunkName: "pages/opportunities/index" */))
const _2565d380 = () => interopDefault(import('../pages/password-reset/index.vue' /* webpackChunkName: "pages/password-reset/index" */))
const _93b02422 = () => interopDefault(import('../pages/projet/index.vue' /* webpackChunkName: "pages/projet/index" */))
const _1afe6970 = () => interopDefault(import('../pages/u/index.vue' /* webpackChunkName: "pages/u/index" */))
const _2821253c = () => interopDefault(import('../pages/profile/admin/index.vue' /* webpackChunkName: "pages/profile/admin/index" */))
const _34d37262 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4d15aea6 = () => interopDefault(import('../pages/blogs/_blogRoute.vue' /* webpackChunkName: "pages/blogs/_blogRoute" */))
const _63072906 = () => interopDefault(import('../pages/opportunities/_blogRoute.vue' /* webpackChunkName: "pages/opportunities/_blogRoute" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _185a6cbc,
    name: "admin"
  }, {
    path: "/anonymous",
    component: _e00d9d80,
    name: "anonymous"
  }, {
    path: "/apropos",
    component: _2dff853b,
    name: "apropos"
  }, {
    path: "/blogs",
    component: _12b6c0e4,
    name: "blogs"
  }, {
    path: "/create",
    component: _730673c2,
    name: "create"
  }, {
    path: "/edit",
    component: _558a88a6,
    name: "edit"
  }, {
    path: "/opportunities",
    component: _28cb6af8,
    name: "opportunities"
  }, {
    path: "/password-reset",
    component: _2565d380,
    name: "password-reset"
  }, {
    path: "/projet",
    component: _93b02422,
    name: "projet"
  }, {
    path: "/u",
    component: _1afe6970,
    name: "u"
  }, {
    path: "/profile/admin",
    component: _2821253c,
    name: "profile-admin"
  }, {
    path: "/",
    component: _34d37262,
    name: "index"
  }, {
    path: "/blogs/:blogRoute",
    component: _4d15aea6,
    name: "blogs-blogRoute"
  }, {
    path: "/opportunities/:blogRoute",
    component: _63072906,
    name: "opportunities-blogRoute"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
