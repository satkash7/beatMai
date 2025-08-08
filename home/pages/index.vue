<template>
  <client-only>
     <div class="w-full container mx-auto px-6">
  <div class="w-full">
    <!-- AI Top trend section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
     
 
     <div id="mission" class="w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
        <br> </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">

          <LandingAiTrend
            v-for="service in services.slice(0, 7)"
            :key="service.id"
            :img="service.imageUrl"
            :title="service.name"
            :description="service.descriptions"
            :link="service.link"
            :small="true"
          />
        </div>
    </div> 

    <div id="domaines" class="w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
        <br>
        <span class="text-header-gradient-big">Nos domaines d'intervention </span></h2>
        <!--class needs to be responsive-->
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">

          <LandingAiTrend
            v-for="project in projects.slice(0, 7)"
            :key="project.id"
            :img="project.imageUrl"
            :title="project.name"
            :description="project.descriptions"
            :link="project.link"
          />
        </div>
    </div> 

    <div id="domaines" class="w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
        <br>
        <span class="text-header-gradient-big">Notre équipe </span></h2>
        <!--class needs to be responsive-->
        
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mx-auto"><br>
          Elle est composée d'experts certfiés et qualifiés dans nos domaines d'intervention. Sa grande passion est d'apporter des solutions concrètes aux problèmes locaux grace à son accompagnement technique. Les membres de l''équipe du BEAT travaillent ensemble pour offrir des services de qualité et obtenir un résultat durable. 
           
        </div>
    </div> 


    </section>

  </div>
     </div>
</client-only>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      year: `${new Date().toLocaleString('en-us', { year: 'numeric' })}`,
      services: [],
      projects: [],
    };
  },
  head() {
    return {
      title: "BUREAU D'EXPERTISE ET ACCOMPAGNEMENT TECHNIQUE",
      meta: [
              { hid: 'description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'keywords', name: 'Beat Expertise' },
              { hid: 'robots', content: 'index, follow' },
              { hid: 'googlebot', content: 'index, follow' },
              { hid: 'bingbot', content: 'index, follow' },
              { hid: 'yandex', content: 'index, follow' },
              
              // Open Graph (Facebook, LinkedIn, etc.)
              { hid: 'og:title', property: 'og:title', content: 'BUREAU D\'EXPERTISE ET ACCOMPAGNEMENT TECHNIQUE' },
              { hid: 'og:description', property: 'og:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'og:image', property: 'og:image', content: "https://storage.everlytools.com/beatexpertise.jpg" },
              { hid: 'og:url', property: 'og:url', content: 'https://beatexpertise.com' },
              { hid: 'og:locale', property: 'og:locale', content: 'en_US' }, // Primary language
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GB' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'zh_CN' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'hi_IN' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'es_ES' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'fr_FR' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'ar_AE' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'bn_BD' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'pt_PT' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'ru_RU' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'ja_JP' },
              { hid: 'og:type', property: 'og:type', content: 'website' },
              // Twitter Meta Tags
              { hid: 'twitter:title', content: 'BUREAU D\'EXPERTISE ET ACCOMPAGNEMENT TECHNIQUE' },
              { hid: 'twitter:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'twitter:image', content: "https://storage.everlytools.com/beatexpertise.jpg" },
              { hid: 'twitter:url', content: "https://beatexpertise.com" },
              { hid: 'twitter:card', content: 'summary_large_image' },
              { hid: 'twitter:site', content: '@beatexpertise' },
              { hid: 'twitter:creator', content: '@beatexpertise' },
            ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
      ]
    };
  },
  async mounted() {
     
        this.services = [
          {
            id: 1,
            name: "Notre mission",
            imageUrl: require('~/assets/img/pic1.jpg'),
            descriptions: "Founir un accompagnement technique personalisé, aux entreprises, organisations et/ou individus, pour les aider à mieux rendre les services leur sollicités, grace à des solutions techniques innovantes, pour developpement économique et social de la RDC",
            link: "#"
          },
          {
            id: 2,
            name: "Notre approche",
            imageUrl: require('~/assets/img/pic2.jpg'),
            descriptions: "Transformer les défis en opportunité à travers la puissance de ta technologie et fournir des solutions techniques innovantes grace à un accompagnement personnalisé, en vue du developpement économique de la RDC",
            link: "#"
          }
        ];

        this.projects = [
          {
            id: 1,
            name: "Entrepreunariat",
            imageUrl: require('~/assets/img/dd.jpeg'),
            descriptions: "Accompagnement dans l'élaboration des plans d'affaires; Proposition des méthodes de gestion innovante des entreprises; Appui à l'élaboration de plan de continuité des affaires; Accompagnement dans l'élaboration des stratégies et plans de sécurité et de communication des organisations et/ou entreprises",
            link: "#"
          },
          {
            id: 2,
            name: "Gestion de l'environnement et protection des personnes",
            imageUrl: require('~/assets/img/catas.png'),
            descriptions: "Evaluation de l'imapct environnemental des projets et des affaires; Proposition des pratiques écologiques; Coaching et mentorat sur la gestion sensible à l'environnement;",
            link: "#"
          },
          {
            id: 3,
            name: "Réduction des risques de catastrophes",
            imageUrl: require('~/assets/img/bb.jpeg'),
            descriptions: "Modélisation de la surveillance des aléas; Accompagnement des organisations dans la gestion sensible aux risques; Proposition des méthodes innovantes de gestion et de la protection de l'environnement; Formation sur la gestion des risques de catastrophes et des urgences; Développement des outils d'analyse de vulnérabilité des enjeux et risques de catastrophes; Elaboration des modules de gestion des risques adaptés aux besoins;",
            link: "#"
          },
          {
            id: 4,
            name: "Innovation et technologie",
            imageUrl: require('~/assets/img/bg1.jpg'),
            descriptions: "Accompagnement dans la pensée design; Accompagnement dans l'utilisation éthique de l'Intelligence Artificielle; Développement des applications dans divers domaines;",
            link: "/projects"
          },
          {
            id: 5,
            name: "Renforcement des capacités, Communication pour le changement de comportement",
            imageUrl: require('~/assets/img/aa.jpeg'),
            descriptions: "Développement des modules adaptés aux besoins des divers groupes, Accompagnement des groupes et des personnes à développer des plans visant le changement des comportements, Coaching et mentorat dans la motivation des groupes",
            link: "#"
          },
          {
            id: 6,
            name: "Accompagnement dans la collecte et analyse des données",
            imageUrl: require('~/assets/img/pic1.jpg'),
            descriptions: "Accompagnement technique des entreprises dans la collecte et l’analyse des données qualitatives et quantitatives pour une prise de décision stratégique.",
            link: "#"
          }
        ];
      },
  methods: {
    // Add any methods you need here
  },
};
</script>
 