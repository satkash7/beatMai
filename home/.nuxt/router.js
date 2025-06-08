import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e24ced2e = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _730694f2 = () => interopDefault(import('../pages/anonymous/index.vue' /* webpackChunkName: "pages/anonymous/index" */))
const _22556f42 = () => interopDefault(import('../pages/apropos/index.vue' /* webpackChunkName: "pages/apropos/index" */))
const _a484feaa = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _e7640190 = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _14096706 = () => interopDefault(import('../pages/edit/index.vue' /* webpackChunkName: "pages/edit/index" */))
const _70a4534b = () => interopDefault(import('../pages/opportunities/index.vue' /* webpackChunkName: "pages/opportunities/index" */))
const _419ce399 = () => interopDefault(import('../pages/password-reset/index.vue' /* webpackChunkName: "pages/password-reset/index" */))
const _2ff4868f = () => interopDefault(import('../pages/u/index.vue' /* webpackChunkName: "pages/u/index" */))
const _a5a9a3fa = () => interopDefault(import('../pages/profile/admin/index.vue' /* webpackChunkName: "pages/profile/admin/index" */))
const _6689592e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _31fa9982 = () => interopDefault(import('../pages/blogs/_blogRoute.vue' /* webpackChunkName: "pages/blogs/_blogRoute" */))
const _6e96849f = () => interopDefault(import('../pages/opportunities/_blogRoute.vue' /* webpackChunkName: "pages/opportunities/_blogRoute" */))

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
    component: _e24ced2e,
    name: "admin"
  }, {
    path: "/anonymous",
    component: _730694f2,
    name: "anonymous"
  }, {
    path: "/apropos",
    component: _22556f42,
    name: "apropos"
  }, {
    path: "/blogs",
    component: _a484feaa,
    name: "blogs"
  }, {
    path: "/create",
    component: _e7640190,
    name: "create"
  }, {
    path: "/edit",
    component: _14096706,
    name: "edit"
  }, {
    path: "/opportunities",
    component: _70a4534b,
    name: "opportunities"
  }, {
    path: "/password-reset",
    component: _419ce399,
    name: "password-reset"
  }, {
    path: "/u",
    component: _2ff4868f,
    name: "u"
  }, {
    path: "/profile/admin",
    component: _a5a9a3fa,
    name: "profile-admin"
  }, {
    path: "/",
    component: _6689592e,
    name: "index"
  }, {
    path: "/blogs/:blogRoute",
    component: _31fa9982,
    name: "blogs-blogRoute"
  }, {
    path: "/opportunities/:blogRoute",
    component: _6e96849f,
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
