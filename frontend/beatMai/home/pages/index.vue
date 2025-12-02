<template>
  <client-only>
    <div class="w-full container mx-auto px-6">
      <div class="w-full">
        <!-- Services Section -->
        <section id="mission" class="section-container">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto">
            <LandingAiTrend
              v-for="(service, index) in services.slice(0, 7)"
              :key="service.id"
              :img="service.imageUrl"
              :title="service.name"
              :description="service.descriptions"
              :link="service.link"
              :small="true"
              :class="['fade-in', 'delay-' + index]"
            />
          </div>
        </section>

        <!-- Domaines Section -->
        <section id="domaines" class="section-container">
          <h2 class="section-title">Nos <span class="text-header-gradient">domaines d'intervention</span></h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            <LandingAiTrend
              v-for="(project, index) in projects.slice(0, 7)"
              :key="project.id"
              :img="project.imageUrl"
              :title="project.name"
              :description="project.descriptions"
              :link="project.link"
              :class="['fade-in', 'delay-' + (index % 3)]"
            />
          </div>
        </section>

        <!-- Team Section -->
        <section id="team" class="section-container">
          <h2 class="section-title">Notre <span class="text-header-gradient">équipe</span></h2>
          <div class="team-section fade-in">
            <p class="team-description">
              Elle est composée d'experts certifiés et qualifiés dans nos domaines d'intervention. Sa grande passion est d'apporter des solutions concrètes aux problèmes locaux grâce à son accompagnement technique. Les membres de l'équipe du BEAT travaillent ensemble pour offrir des services de qualité et obtenir un résultat durable.
            </p>
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
        { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
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
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    };
  },
  async mounted() {
    this.services = [
      {
        id: 1,
        name: "Notre mission",
        imageUrl: require('~/assets/img/pic1.jpg'),
        descriptions: "Fournir un accompagnement technique personnalisé, aux entreprises, organisations et/ou individus, pour les aider à mieux rendre les services leur sollicités, grâce à des solutions techniques innovantes, pour le développement économique et social de la RDC",
        link: "#"
      },
      {
        id: 2,
        name: "Notre Vision",
        imageUrl: require('~/assets/img/pic2.jpg'),
        descriptions: "Nous accompagnons les personnes, entreprises, organisations, services étatiques dans la poursuite de leurs objectifs stratégiques grâce à un service innovant et co-produit afin de contribuer au développement durable de la RDC.",
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
        descriptions: "Évaluation de l'impact environnemental des projets et des affaires; Proposition des pratiques écologiques; Coaching et mentorat sur la gestion sensible à l'environnement;",
        link: "#"
      },
      {
        id: 3,
        name: "Réduction des risques de catastrophes",
        imageUrl: require('~/assets/img/bb.jpeg'),
        descriptions: "Modélisation de la surveillance des aléas; Accompagnement des organisations dans la gestion sensible aux risques; Proposition des méthodes innovantes de gestion et de la protection de l'environnement; Formation sur la gestion des risques de catastrophes et des urgences; Développement des outils d'analyse de vulnérabilité des enjeux et risques de catastrophes; Élaboration des modules de gestion des risques adaptés aux besoins;",
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
        descriptions: "Développement des modules adaptés aux besoins des divers groupes, Accompagnement des groupes et des personnes à développer des plans visant le changement des comportements, Coaching et mentorat dans la motivation des groupes",
        link: "#"
      },
      {
        id: 6,
        name: "Accompagnement dans la collecte et analyse des données",
        imageUrl: require('~/assets/img/pic1.jpg'),
        descriptions: "Accompagnement technique des entreprises dans la collecte et l'analyse des données qualitatives et quantitatives pour une prise de décision stratégique.",
        link: "#"
      }
    ];
  },
  methods: {
    // Add any methods you need here
  },
};
</script>

<style>
:root {
  --primary: #1a56db;
  --primary-dark: #1e429f;
  --secondary: #0e9f6e;
  --dark: #1f2937;
  --light: #f9fafb;
  --gray: #6b7280;
  --light-gray: #f3f4f6;
  --border: #e5e7eb;
}

body {
  font-family: 'Inter', sans-serif;
  color: #374151;
  line-height: 1.6;
  background-color: #ffffff;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark);
}

.section-container {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 15px;
  font-size: 1.875rem;
  font-weight: 600;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
}

.text-header-gradient {
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.team-section {
  background-color: var(--light-gray);
  border-radius: 12px;
  padding: 40px;
  margin: 40px 0;
  text-align: center;
  border: 1px solid var(--border);
}

.team-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.8;
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

.delay-0 {
  animation-delay: 0.1s;
}

.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
  
  .team-section {
    padding: 20px;
  }
}
</style>