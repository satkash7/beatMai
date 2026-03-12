<template>
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
        <h2 class="section-title">Nos <span class="text-blue-600 dark:text-blue-400">domaines d'intervention</span></h2>
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
        <h2 class="section-title">Notre <span class="text-blue-600 dark:text-blue-400">équipe</span></h2>
        <div class="team-section fade-in card-dark rounded-lg p-6">
          <p class="team-description">
            Elle est composée d'experts certifiés et qualifiés dans nos domaines d'intervention. Sa grande passion est d'apporter des solutions concrètes aux problèmes locaux grâce à son accompagnement technique. Les membres de l'équipe du BEAT travaillent ensemble pour offrir des services de qualité et obtenir un résultat durable.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import pic1 from '~/assets/img/pic1.jpg'
import pic2 from '~/assets/img/pic2.jpg'
import entre from '~/assets/img/entre.jpg'
import gestionEnv from '~/assets/img/gestionEnv.jpg'
import reduc from '~/assets/img/reduc.jpg'
import bg1 from '~/assets/img/bg1.jpg'
import renforcement from '~/assets/img/renforcement.jpeg'
import commImg from '~/assets/img/Comm.jpg'

useHead({
  title: "Beat Expertise | Bureau d'Expertise et Accompagnement Technique à Goma, RDC",
  meta: [
    { name: 'description', content: 'BEAT Expertise est un bureau d\'expertise et d\'accompagnement technique basé à Goma, RDC. Conseil stratégique, solutions innovantes, formation et renforcement des capacités.' },
    { name: 'keywords', content: 'Beat Expertise, Bureau d\'expertise et d\'accompagnement technique, Bureau d\'Expertise et d\'Accompagnement Technique, cabinet d\'expertise technique, cabinet d\'expertise environnementale, cabinet de conseil en développement, expertise technique, conseils en expertise technique, accompagnement technique, accompagnement des entreprises, accompagnement des organisations, accompagnement stratégique, accompagnement des ONG, études techniques, études environnementales, analyse des risques, audit environnemental, étude d\'impact environnemental, solutions environnementales, solutions technologiques innovantes, plan stratégique, élaboration des plans stratégiques, plan de communication, stratégie de communication, renforcement des capacités, motivation des groupes, changement de comportement, catastrophes naturelles, lutte contre les catastrophes naturelles, lutte contre les inondations, prévention des catastrophes naturelles, gestion des catastrophes, gestion des risques de catastrophes, réduction des risques de catastrophes, plan de gestion des catastrophes, systèmes d\'alerte précoce, éducation aux bonnes pratiques environnementales, protection de l\'environnement, gestion durable de l\'environnement, conservation de l\'environnement, changement climatique, adaptation au changement climatique, école de volcanologie, prévention des risques, Goma, RDC, Nord-Kivu, région des Grands Lacs, Grands Lacs africains, innovation technologique, révolution technologique, intelligence artificielle, utilisation éthique de l\'IA, développement durable, objectifs de développement durable, protection des enfants, protection des femmes, droits des enfants, droits des femmes, autonomisation des femmes, déplacés internes, déplacés de guerre, guerre au Nord-Kivu, CAFOD, CARITAS, CAJED, Centre OLAME, BIFERD, UNIGOM, Université de Goma, entrepreneuriat des jeunes, entrepreneuriat des femmes, formation en entrepreneuriat, éruption volcanique Nyiragongo, volcan Nyamulagira, Observatoire volcanologique de Goma, OVG, gaz du lac Kivu, gaz méthane, exploitation minière en RDC, résilience communautaire, résilience climatique, renforcer la résilience des communautés, hygiène et assainissement, gestion des déchets, plaidoyer humanitaire, défis humanitaires, bien-être humanitaire, stabilisation socioéconomique, appui à la résilience, protection civile, surveillance environnementale, cartographie des risques, monitoring environnemental, glissements de terrain, pluies torrentielles, inondations pluviales, inondations en RDC, inondations à Goma, inondations à Kinshasa, inondations à Kindu, actions anticipatoires, anticipation des risques, investir dans la prévention, journée internationale pour la réduction des catastrophes, sensibilisation communautaire, développement communautaire durable, mobilisation communautaire, formation des agents de terrain, mentorat professionnel, leadership communautaire, plans d\'affaires pour PME, cabinet d\'expertise à Goma, pensée design, développement des applications, suivi en temps réel' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Beat Expertise' },
    { property: 'og:title', content: 'Beat Expertise | Bureau d\'Expertise et Accompagnement Technique' },
    { property: 'og:description', content: 'Cabinet technique basé à Goma, RDC. Solutions innovantes, conseil stratégique et accompagnement technique pour le développement durable.' },
    { property: 'og:image', content: 'https://api.beatexpertise.com/storage/logo.png' },
    { property: 'og:url', content: 'https://beatexpertise.com' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:site_name', content: 'Beat Expertise' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Beat Expertise | Bureau d\'Expertise et Accompagnement Technique' },
    { name: 'twitter:description', content: 'Cabinet technique basé à Goma, RDC. Solutions innovantes et accompagnement technique.' },
    { name: 'twitter:image', content: 'https://api.beatexpertise.com/storage/logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://beatexpertise.com' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
  ]
})

const services = ref([
  {
    id: 1,
    name: "Notre mission",
    imageUrl: pic1,
    descriptions: "Accompagner les organisations, les entreprises et les particuliers dans l'atteinte de leurs objectifs stratégiques à travers des services d'expertise et d'accompagnement technique innovants, contribuant ainsi au développement économique et social durable de la République Démocratique du Congo.",
    link: "#"
  },
  {
    id: 2,
    name: "Notre Vision",
    imageUrl: pic2,
    descriptions: "Devenir un bureau d'expertise de référence en République Démocratique du Congo, reconnu pour la qualité, le professionnalisme et l'impact de ses services, au service des individus, des institutions publiques, des organisations de la société civile et des entreprises dans l'accomplissement de leurs missions.",
    link: "#"
  }
])

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
])

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
  }
})
</script>

<style scoped>
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
  color: #1f2937;
}

.dark .section-title {
  color: #f1f5f9;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #1a56db;
  border-radius: 2px;
}

.text-header-gradient {
  color: #1a56db;
}

.team-section {
  background-color: #f3f4f6;
  border-radius: 12px;
  padding: 40px;
  margin: 40px 0;
  text-align: center;
  border: 1px solid #e5e7eb;
}

.dark .team-section {
  background-color: #334155;
  border-color: #475569;
}

.team-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.8;
}

.dark .team-description {
  color: #cbd5e1;
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

.delay-0 { animation-delay: 0.1s; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.3s; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .section-title { font-size: 1.5rem; }
  .team-section { padding: 20px; }
}
</style>
