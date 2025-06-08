<template>
  <client-only>
     <div class="w-full container mx-auto px-6">
  <div class="w-full">
    <!-- AI Top trend section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
     
 
     <div id="services" class="w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
        <br>
        <span class="text-header-gradient-big">Nos domaines d'intervention</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">

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

    <div id="projets" class="w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
        <br>
        <span class="text-header-gradient-big">Nos services</span></h2>
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


    </section>

  </div>
     </div>
</client-only>
</template>

<script>
import aosMixin from '@/mixins/aos';

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
            name: "Gestion de l’environnement & protection",
            imageUrl: require('~/assets/img/pic1.jpg'),
            descriptions: "Évaluations d’impact environnemental, Intégration de pratiques écologiques responsables, Formation en gestion environnementale et sociale",
            link: "/services"
          },
          {
            id: 2,
            name: "Accompagnement technique",
            imageUrl: require('~/assets/img/pic2.jpg'),
            descriptions: "Donnez vie à vos projets environnementaux avec notre accompagnement technique. Recevez des formations et Conseils d’experts pour renforcer la résilience de vos initiatives",
            link: "/services"
          },
          {
            id: 3,
            name: "Réduction des risques de catastrophes",
            imageUrl: require('~/assets/img/pic3.jpg'),
            descriptions: "Prévoir, prévenir et se préparer efficacement. Surveillance et modélisation des aléas, Plans de contingence et continuité d’activité.",
            link: "/services"
          },
        ];

        this.projects = [
          {
            id: 1,
            name: "Entrepreunariat",
            imageUrl: require('~/assets/img/pic3.jpg'),
            descriptions: "Accompagnement dans l'élaboration des plans d'affaires, Proposition des méthodes de gestion innovante",
            link: "/projects"
          },
          {
            id: 2,
            name: "Gestion de l'environnement et protection des personnes",
            imageUrl: require('~/assets/img/pic4.jpg'),
            descriptions: "Évaluation de l'impact environnemental des projets et des affaires, Proposition des pratiques écologiques, Coaching et mentorat sur la gestion sensible à l'environnement",
            link: "/projects"
          },
          {
            id: 3,
            name: "Réduction des risques de catastrophes",
            imageUrl: require('~/assets/img/pic6.jpg'),
            descriptions: "Accompagnement des organisations avec des solutions innovantes pour la gestion des risques, la planification de la continuité et la résilience face aux catastrophes.",
            link: "/projects"
          },
          {
            id: 4,
            name: "Digitalisation du réseau de Durba avec mWater",
            imageUrl: require('~/assets/img/pic6.jpg'),
            descriptions: "Accompagnement technique des entreprises avec des solutions innovantes en intelligence artificielle, développement d’applications, suivi en temps réel et optimisation des processus numériques.",
            link: "/projects"
          },
          {
            id: 5,
            name: "Communication pour le changement de comportement",
            imageUrl: require('~/assets/img/pic2.jpg'),
            descriptions: "Développement des modules adaptés aux besoins des divers groupes, Accompagnement des groupes et des personnes à développer des plans visant le changement des comportements, Coaching et mentorat dans la motivation des groupes",
            link: "/projects"
          },
          {
            id: 6,
            name: "Accompagnement dans la collecte et analyse des données",
            imageUrl: require('~/assets/img/pic1.jpg'),
            descriptions: "Accompagnement technique des entreprises dans la collecte et l’analyse des données qualitatives et quantitatives pour une prise de décision stratégique optimisée.",
            link: "/projects"
          }
        ];
      },
  methods: {
    // Add any methods you need here
  },
};
</script>
 