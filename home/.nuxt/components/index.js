export { default as LoadingIndicator } from '../../components/LoadingIndicator.vue'
export { default as NavLink } from '../../components/NavLink.vue'
export { default as BaseAccordion } from '../../components/base/Accordion.vue'
export { default as BaseButton } from '../../components/base/Button.vue'
export { default as BaseFooter } from '../../components/base/Footer.vue'
export { default as BaseHeader } from '../../components/base/Header.vue'
export { default as BaseNavbar } from '../../components/base/Navbar.vue'
export { default as BaseSection } from '../../components/base/Section.vue'
export { default as LandingAiTrend } from '../../components/landing/AiTrend.vue'
export { default as LandingAihistory } from '../../components/landing/Aihistory.vue'
export { default as LandingBlog } from '../../components/landing/Blog.vue'
export { default as LandingComment } from '../../components/landing/Comment.vue'
export { default as LandingExchange } from '../../components/landing/Exchange.vue'
export { default as LandingListItem } from '../../components/landing/ListItem.vue'
export { default as LandingOpportunity } from '../../components/landing/Opportunity.vue'
export { default as LandingSearch } from '../../components/landing/Search.vue'
export { default as LandingStep } from '../../components/landing/Step.vue'
export { default as LandingTradingToolImage } from '../../components/landing/TradingToolImage.vue'

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
