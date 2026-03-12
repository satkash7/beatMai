
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  LoadingIndicator: typeof import("../../components/LoadingIndicator.vue")['default']
  NavLink: typeof import("../../components/NavLink.vue")['default']
  BaseAccordion: typeof import("../../components/base/Accordion.vue")['default']
  BaseButton: typeof import("../../components/base/Button.vue")['default']
  BaseDarkModeToggle: typeof import("../../components/base/DarkModeToggle.vue")['default']
  BaseFooter: typeof import("../../components/base/Footer.vue")['default']
  BaseHeader: typeof import("../../components/base/Header.vue")['default']
  BaseNavbar: typeof import("../../components/base/Navbar.vue")['default']
  BaseSection: typeof import("../../components/base/Section.vue")['default']
  LandingAiTrend: typeof import("../../components/landing/AiTrend.vue")['default']
  LandingAihistory: typeof import("../../components/landing/Aihistory.vue")['default']
  LandingBlog: typeof import("../../components/landing/Blog.vue")['default']
  LandingComment: typeof import("../../components/landing/Comment.vue")['default']
  LandingExchange: typeof import("../../components/landing/Exchange.vue")['default']
  LandingListItem: typeof import("../../components/landing/ListItem.vue")['default']
  LandingOpportunity: typeof import("../../components/landing/Opportunity.vue")['default']
  LandingSearch: typeof import("../../components/landing/Search.vue")['default']
  LandingStep: typeof import("../../components/landing/Step.vue")['default']
  LandingTradingToolImage: typeof import("../../components/landing/TradingToolImage.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  SiteLink: typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyLoadingIndicator: LazyComponent<typeof import("../../components/LoadingIndicator.vue")['default']>
  LazyNavLink: LazyComponent<typeof import("../../components/NavLink.vue")['default']>
  LazyBaseAccordion: LazyComponent<typeof import("../../components/base/Accordion.vue")['default']>
  LazyBaseButton: LazyComponent<typeof import("../../components/base/Button.vue")['default']>
  LazyBaseDarkModeToggle: LazyComponent<typeof import("../../components/base/DarkModeToggle.vue")['default']>
  LazyBaseFooter: LazyComponent<typeof import("../../components/base/Footer.vue")['default']>
  LazyBaseHeader: LazyComponent<typeof import("../../components/base/Header.vue")['default']>
  LazyBaseNavbar: LazyComponent<typeof import("../../components/base/Navbar.vue")['default']>
  LazyBaseSection: LazyComponent<typeof import("../../components/base/Section.vue")['default']>
  LazyLandingAiTrend: LazyComponent<typeof import("../../components/landing/AiTrend.vue")['default']>
  LazyLandingAihistory: LazyComponent<typeof import("../../components/landing/Aihistory.vue")['default']>
  LazyLandingBlog: LazyComponent<typeof import("../../components/landing/Blog.vue")['default']>
  LazyLandingComment: LazyComponent<typeof import("../../components/landing/Comment.vue")['default']>
  LazyLandingExchange: LazyComponent<typeof import("../../components/landing/Exchange.vue")['default']>
  LazyLandingListItem: LazyComponent<typeof import("../../components/landing/ListItem.vue")['default']>
  LazyLandingOpportunity: LazyComponent<typeof import("../../components/landing/Opportunity.vue")['default']>
  LazyLandingSearch: LazyComponent<typeof import("../../components/landing/Search.vue")['default']>
  LazyLandingStep: LazyComponent<typeof import("../../components/landing/Step.vue")['default']>
  LazyLandingTradingToolImage: LazyComponent<typeof import("../../components/landing/TradingToolImage.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazySiteLink: LazyComponent<typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
