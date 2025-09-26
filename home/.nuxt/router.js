import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _749f0bf9 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _57e165ca = () => interopDefault(import('..\\pages\\anonymous\\index.vue' /* webpackChunkName: "pages/anonymous/index" */))
const _47beee00 = () => interopDefault(import('..\\pages\\apropos\\index.vue' /* webpackChunkName: "pages/apropos/index" */))
const _3239fcf7 = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _f51b6f20 = () => interopDefault(import('..\\pages\\create\\index.vue' /* webpackChunkName: "pages/create/index" */))
const _1eb77f22 = () => interopDefault(import('..\\pages\\edit\\index.vue' /* webpackChunkName: "pages/edit/index" */))
const _650edd52 = () => interopDefault(import('..\\pages\\opportunities\\index.vue' /* webpackChunkName: "pages/opportunities/index" */))
const _bbd185a2 = () => interopDefault(import('..\\pages\\password-reset\\index.vue' /* webpackChunkName: "pages/password-reset/index" */))
const _e9a7cac0 = () => interopDefault(import('..\\pages\\projet\\index.vue' /* webpackChunkName: "pages/projet/index" */))
const _2c75ebda = () => interopDefault(import('..\\pages\\u\\index.vue' /* webpackChunkName: "pages/u/index" */))
const _1e7bff26 = () => interopDefault(import('..\\pages\\profile\\admin\\index.vue' /* webpackChunkName: "pages/profile/admin/index" */))
const _31795c6c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _2ab7f31a = () => interopDefault(import('..\\pages\\blogs\\_blogRoute.vue' /* webpackChunkName: "pages/blogs/_blogRoute" */))
const _5199a3da = () => interopDefault(import('..\\pages\\opportunities\\_blogRoute.vue' /* webpackChunkName: "pages/opportunities/_blogRoute" */))

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
    component: _749f0bf9,
    name: "admin"
  }, {
    path: "/anonymous",
    component: _57e165ca,
    name: "anonymous"
  }, {
    path: "/apropos",
    component: _47beee00,
    name: "apropos"
  }, {
    path: "/blogs",
    component: _3239fcf7,
    name: "blogs"
  }, {
    path: "/create",
    component: _f51b6f20,
    name: "create"
  }, {
    path: "/edit",
    component: _1eb77f22,
    name: "edit"
  }, {
    path: "/opportunities",
    component: _650edd52,
    name: "opportunities"
  }, {
    path: "/password-reset",
    component: _bbd185a2,
    name: "password-reset"
  }, {
    path: "/projet",
    component: _e9a7cac0,
    name: "projet"
  }, {
    path: "/u",
    component: _2c75ebda,
    name: "u"
  }, {
    path: "/profile/admin",
    component: _1e7bff26,
    name: "profile-admin"
  }, {
    path: "/",
    component: _31795c6c,
    name: "index"
  }, {
    path: "/blogs/:blogRoute",
    component: _2ab7f31a,
    name: "blogs-blogRoute"
  }, {
    path: "/opportunities/:blogRoute",
    component: _5199a3da,
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
