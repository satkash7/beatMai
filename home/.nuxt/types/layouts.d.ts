import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    anonymous: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/anonymous.vue").default>,
    blog: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/blog.vue").default>,
    create: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/create.vue").default>,
    default: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/default.vue").default>,
    doc: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/doc.vue").default>,
    tips: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/tips.vue").default>,
    trend: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/trend.vue").default>,
    user: ComponentProps<typeof import("/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/layouts/user.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}