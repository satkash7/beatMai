import { _ as _export_sfc, b as useRuntimeConfig, d as useHead } from "../server.mjs";
import { mergeProps, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { h as heroPic1, a as heroPic2 } from "./pic2-Cv3MgNUH.js";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/hookable/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/unctx/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/defu/dist/defu.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ufo/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/klona/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/destr/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/ohash/dist/index.mjs";
import "/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {
  props: {
    img: { type: String, default: "" },
    description: { type: String, default: "" },
    link: { type: String, default: "" },
    title: { type: String, default: "" },
    small: { type: Boolean, default: false }
  },
  data() {
    return { url: "" };
  },
  mounted() {
    const config = useRuntimeConfig();
    this.url = config.public.storageUrl;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white dark:bg-dark-card shadow-lg rounded-lg border border-gray-300 dark:border-dark-border overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" }, _attrs))}><a${ssrRenderAttr("href", $props.link)} target="_blank"><div class="relative">`);
  if ($props.img != null && !$props.small) {
    _push(`<img${ssrRenderAttr("src", $props.img)} class="${ssrRenderClass([$props.small ? "h-40 w-full" : "h-72 w-full", "rounded-t-lg object-cover transition-opacity duration-500 ease-in-out"])}" alt="Trends">`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 hover:opacity-10"></div></div><div class="p-4 text-center"><h3 class="text-lg font-bold text-gray-800 dark:text-dark-text hover:text-blue-500 transition-all duration-300">${ssrInterpolate($props.title)}</h3><p class="text-gray-600 dark:text-gray-400 text-sm">${ssrInterpolate($props.description)}</p></div></a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/AiTrend.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const entre = "" + __buildAssetsURL("entre.BjwtINhk.jpg");
const gestionEnv = "" + __buildAssetsURL("gestionEnv.DqJOg9Hj.jpg");
const reduc = "" + __buildAssetsURL("reduc.CgnkMRwf.jpg");
const bg1 = "" + __buildAssetsURL("bg1.D8TrEceM.jpg");
const renforcement = "" + __buildAssetsURL("renforcement.Cot9w1A0.jpeg");
const commImg = "" + __buildAssetsURL("Comm.BtJJDuv7.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Beat Expertise | Bureau d'Expertise et Accompagnement Technique à Goma, RDC",
      meta: [
        { name: "description", content: "BEAT Expertise est un bureau d'expertise et d'accompagnement technique basé à Goma, RDC. Conseil stratégique, solutions innovantes, formation et renforcement des capacités." },
        { name: "keywords", content: "Beat Expertise, bureau expertise, accompagnement technique, Goma, RDC, Congo, conseil stratégique, formation, Nord-Kivu, développement" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Beat Expertise" },
        { property: "og:title", content: "Beat Expertise | Bureau d'Expertise et Accompagnement Technique" },
        { property: "og:description", content: "Cabinet technique basé à Goma, RDC. Solutions innovantes, conseil stratégique et accompagnement technique pour le développement durable." },
        { property: "og:image", content: "https://storage.everlytools.com/beatexpertise.jpg" },
        { property: "og:url", content: "https://beatexpertise.com" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: "Beat Expertise" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Beat Expertise | Bureau d'Expertise et Accompagnement Technique" },
        { name: "twitter:description", content: "Cabinet technique basé à Goma, RDC. Solutions innovantes et accompagnement technique." },
        { name: "twitter:image", content: "https://storage.everlytools.com/beatexpertise.jpg" }
      ],
      link: [
        { rel: "canonical", href: "https://beatexpertise.com" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" }
      ]
    });
    const services = ref([
      {
        id: 1,
        name: "Notre mission",
        imageUrl: heroPic1,
        descriptions: "Accompagner les organisations, les entreprises et les particuliers dans l'atteinte de leurs objectifs stratégiques à travers des services d'expertise et d'accompagnement technique innovants, contribuant ainsi au développement économique et social durable de la République Démocratique du Congo.",
        link: "#"
      },
      {
        id: 2,
        name: "Notre Vision",
        imageUrl: heroPic2,
        descriptions: "Devenir un bureau d'expertise de référence en République Démocratique du Congo, reconnu pour la qualité, le professionnalisme et l'impact de ses services, au service des individus, des institutions publiques, des organisations de la société civile et des entreprises dans l'accomplissement de leurs missions.",
        link: "#"
      }
    ]);
    const projects = ref([
      {
        id: 1,
        name: "Entrepreneuriat et innovation sociale",
        imageUrl: entre,
        descriptions: "Soutenir les communautés touchées par des catastrophes dans leurs processus de relèvement et renforcer leur résilience face aux crises futures.",
        link: "#"
      },
      {
        id: 2,
        name: "Gestion de l'environnement et protection des personnes",
        imageUrl: gestionEnv,
        descriptions: "Évaluation de l'impact environnemental des projets et des affaires; Proposition des pratiques écologiques; Coaching et mentorat sur la gestion sensible à l'environnement;",
        link: "#"
      },
      {
        id: 3,
        name: "Réduction des risques de catastrophes",
        imageUrl: reduc,
        descriptions: "Modélisation de la surveillance des aléas; Accompagnement des organisations dans la gestion sensible aux risques; Proposition des méthodes innovantes de gestion et de la protection de l'environnement;",
        link: "#"
      },
      {
        id: 4,
        name: "Innovation et technologie",
        imageUrl: bg1,
        descriptions: "Nous concevons et déployons des solutions technologiques innovantes, en mettant l'accent sur le design thinking, promotion de l'utilisation éthique de l'intelligence artificielle.",
        link: "/projects"
      },
      {
        id: 5,
        name: "Renforcement des capacités, Communication pour le changement de comportement",
        imageUrl: renforcement,
        descriptions: "Développement des modules adaptés aux besoins des divers groupes, Accompagnement des groupes et des personnes à développer des plans visant le changement des comportements.",
        link: "#"
      },
      {
        id: 6,
        name: "Accompagnement dans la collecte et analyse des données",
        imageUrl: commImg,
        descriptions: "Accompagnement technique des entreprises dans la collecte et l'analyse des données qualitatives et quantitatives pour une prise de décision stratégique.",
        link: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingAiTrend = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full container mx-auto px-6" }, _attrs))} data-v-6220af6c><div class="w-full" data-v-6220af6c><section id="mission" class="section-container" data-v-6220af6c><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto" data-v-6220af6c><!--[-->`);
      ssrRenderList(services.value.slice(0, 7), (service, index2) => {
        _push(ssrRenderComponent(_component_LandingAiTrend, {
          key: service.id,
          img: service.imageUrl,
          title: service.name,
          description: service.descriptions,
          link: service.link,
          small: true,
          class: ["fade-in", "delay-" + index2]
        }, null, _parent));
      });
      _push(`<!--]--></div></section><section id="domaines" class="section-container" data-v-6220af6c><h2 class="section-title" data-v-6220af6c>Nos <span class="text-blue-600 dark:text-blue-400" data-v-6220af6c>domaines d&#39;intervention</span></h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto" data-v-6220af6c><!--[-->`);
      ssrRenderList(projects.value.slice(0, 7), (project, index2) => {
        _push(ssrRenderComponent(_component_LandingAiTrend, {
          key: project.id,
          img: project.imageUrl,
          title: project.name,
          description: project.descriptions,
          link: project.link,
          class: ["fade-in", "delay-" + index2 % 3]
        }, null, _parent));
      });
      _push(`<!--]--></div></section><section id="team" class="section-container" data-v-6220af6c><h2 class="section-title" data-v-6220af6c>Notre <span class="text-blue-600 dark:text-blue-400" data-v-6220af6c>équipe</span></h2><div class="team-section fade-in card-dark rounded-lg p-6" data-v-6220af6c><p class="team-description" data-v-6220af6c> Elle est composée d&#39;experts certifiés et qualifiés dans nos domaines d&#39;intervention. Sa grande passion est d&#39;apporter des solutions concrètes aux problèmes locaux grâce à son accompagnement technique. Les membres de l&#39;équipe du BEAT travaillent ensemble pour offrir des services de qualité et obtenir un résultat durable. </p></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6220af6c"]]);
export {
  index as default
};
//# sourceMappingURL=index-CrWPfNJ9.js.map
