export const LoadingIndicator = () => import('../../components/LoadingIndicator.vue' /* webpackChunkName: "components/loading-indicator" */).then(c => wrapFunctional(c.default || c))
export const NavLink = () => import('../../components/NavLink.vue' /* webpackChunkName: "components/nav-link" */).then(c => wrapFunctional(c.default || c))
export const BaseAccordion = () => import('../../components/base/Accordion.vue' /* webpackChunkName: "components/base-accordion" */).then(c => wrapFunctional(c.default || c))
export const BaseButton = () => import('../../components/base/Button.vue' /* webpackChunkName: "components/base-button" */).then(c => wrapFunctional(c.default || c))
export const BaseFooter = () => import('../../components/base/Footer.vue' /* webpackChunkName: "components/base-footer" */).then(c => wrapFunctional(c.default || c))
export const BaseHeader = () => import('../../components/base/Header.vue' /* webpackChunkName: "components/base-header" */).then(c => wrapFunctional(c.default || c))
export const BaseNavbar = () => import('../../components/base/Navbar.vue' /* webpackChunkName: "components/base-navbar" */).then(c => wrapFunctional(c.default || c))
export const BaseSection = () => import('../../components/base/Section.vue' /* webpackChunkName: "components/base-section" */).then(c => wrapFunctional(c.default || c))
export const LandingAiTrend = () => import('../../components/landing/AiTrend.vue' /* webpackChunkName: "components/landing-ai-trend" */).then(c => wrapFunctional(c.default || c))
export const LandingAihistory = () => import('../../components/landing/Aihistory.vue' /* webpackChunkName: "components/landing-aihistory" */).then(c => wrapFunctional(c.default || c))
export const LandingBlog = () => import('../../components/landing/Blog.vue' /* webpackChunkName: "components/landing-blog" */).then(c => wrapFunctional(c.default || c))
export const LandingComment = () => import('../../components/landing/Comment.vue' /* webpackChunkName: "components/landing-comment" */).then(c => wrapFunctional(c.default || c))
export const LandingExchange = () => import('../../components/landing/Exchange.vue' /* webpackChunkName: "components/landing-exchange" */).then(c => wrapFunctional(c.default || c))
export const LandingListItem = () => import('../../components/landing/ListItem.vue' /* webpackChunkName: "components/landing-list-item" */).then(c => wrapFunctional(c.default || c))
export const LandingOpportunity = () => import('../../components/landing/Opportunity.vue' /* webpackChunkName: "components/landing-opportunity" */).then(c => wrapFunctional(c.default || c))
export const LandingSearch = () => import('../../components/landing/Search.vue' /* webpackChunkName: "components/landing-search" */).then(c => wrapFunctional(c.default || c))
export const LandingStep = () => import('../../components/landing/Step.vue' /* webpackChunkName: "components/landing-step" */).then(c => wrapFunctional(c.default || c))
export const LandingTradingToolImage = () => import('../../components/landing/TradingToolImage.vue' /* webpackChunkName: "components/landing-trading-tool-image" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
