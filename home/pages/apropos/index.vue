<template>
  <client-only>
     <div class="w-full container mx-auto px-6">
    <div class="w-full">
      <!-- Login/Register Section -->
      <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
        <!-- Display login or register content based on user's choice -->
        <div class="w-full px-4 sm:px-0 py-0 flex flex-col items-center justify-center space-y-4">
          <!-- Display all blogs -->
          <div class="w-full px-4 sm:px-0 my-0 py-0 flex flex-col items-start justify-center space-y-4 text-left">
            <div class="ml-4 mr-4 px-4 sm:px-0 my-0 py-0 flex flex-col items-start justify-center space-y-4 text-left">
              <br></br><br></br><br></br>
              <h1 data-aos="flip-down" class="text-4xl text-neutral-800 font-semibold" id="discover" style="color:#030a3c;">A propos de <span class="text-header-gradient"> Beat Expertise</span></h1>
                 </div>
            <h2 class="ml-5 mr-5"> 
              BEAT est un cabinet basé à Goma, en République Démocratique du Congo, qui accompagne les institutions, entreprises et projets à fort impact grâce à des solutions techniques innovantes, un conseil stratégique, et un savoir-faire local ancré dans l'excellence.
            </h2>

            <span class="ml-5 mr-5">
              <b>Notre mission</b> est de fournir des services de conseil et d'expertise technique de haute qualité, adaptés aux besoins spécifiques de nos clients, tout en contribuant au développement durable et à la prospérité de la région.
              <br><br>
              
              <b>📍 Adresse physique</b>
                -	Siege Social : Q.Kyeshero, Commune et Ville de Goma,<br>
                📧 Email professionnel : direction@beatexpertise.com  📞 Numéro de téléphone : +243 995 277 023
              <br>
            <br><br>
            <h2><b>Voulez vous rejoindre notre équipe? <a href="/opportunities">Cliquez ici pour consulter nos offres</a></b></h2>
          
          </span>
            <br><br>
          </div>
        </div>
      </section>
    </div>
     </div>
  </client-only>
</template>
  
  <script>
    import aosMixin from '@/mixins/aos';
    // import { ref, onMounted, onUpdated } from 'vue';
  
    export default {
      name: 'about-component',
      layout: 'blog',
      mixins: [aosMixin], 

      head() {
      return {
          title: "Beat Expertise | A propos de nous",
          meta: [
              { hid: 'description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'keywords', name: 'keywords', content: 'Beat Expertise' },
              { hid: 'robots', content: 'index, follow' },
              { hid: 'googlebot', content: 'index, follow' },
              { hid: 'bingbot', content: 'index, follow' },
              { hid: 'yandex', content: 'index, follow' },
              
              
              // Open Graph (Facebook, LinkedIn, etc.)
              { hid: 'og:title', property: 'og:title', content: "Beat Expertise"},
              { hid: 'og:description', property: 'og:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'og:image', property: 'og:image', content: "https://storage.everlytools.com/everlytools.jpg" },
              { hid: 'og:url', property: 'og:url', content: "https://everlytools.com/about" },
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

              // Twitter Meta Tags
              { hid: 'twitter:title', content: "Beat Expertise"},
              { hid: 'twitter:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'twitter:image', content: "https://storage.everlytools.com/everlytools.jpg" },
              { hid: 'twitter:card', content: 'summary_large_image' },
              { hid: 'twitter:url', content: 'https://everlytools.com/about' }
            ]
        };
      }
    };
  </script>
  