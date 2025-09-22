<template>
  <client-only>
    <div class="w-full container mx-auto px-4 md:px-6">
      <div class="w-full">
        <!-- Nouvelle Hero Section -->
        <section class="relative rounded-2xl overflow-hidden shadow-xl mb-12 bg-white">
          <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div class="relative w-full px-6 py-12 md:py-16 flex flex-col md:flex-row items-center">
            <!-- Text Content -->
            <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 data-aos="fade-right" class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Votre partenaire en <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">expertise technique</span> et innovation
              </h1>
              <p class="text-lg md:text-xl text-gray-700 mb-6">
                BEAT est un cabinet basé à Goma, en République Démocratique du Congo, qui accompagne les institutions, 
                entreprises et projets à fort impact grâce à des solutions techniques innovantes.
              </p>
              <div class="flex space-x-4">
                <a href="#contact" class="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                  Nous contacter
                </a>
                <a href="#services" class="px-5 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-all">
                  Nos services
                </a>
              </div>
            </div>
            
            <!-- Image Content -->
            <div class="md:w-1/2 flex justify-center">
              <div class="relative w-full max-w-md">
                <div class="absolute -top-4 -left-4 w-24 h-24 rounded-lg bg-blue-100 opacity-50"></div>
                <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-purple-100 opacity-50"></div>
                <div class="relative bg-white p-2 rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Équipe Beat Expertise" 
                    class="rounded-xl w-full h-64 object-cover"
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Content Section -->
        <section class="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            <!-- Text Content -->
            <div class="space-y-6">
              <div>
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Qui sommes-nous?</h2>
                <p class="text-gray-700 leading-relaxed">
                  BEAT est un cabinet basé à Goma, en République Démocratique du Congo, qui accompagne les institutions, 
                  entreprises et projets à fort impact grâce à des solutions techniques innovantes, un conseil stratégique, 
                  et un savoir-faire local ancré dans l'excellence.
                </p>
              </div>
              
              <div>
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Notre mission</h2>
                <p class="text-gray-700 leading-relaxed">
                  Notre mission est de fournir des services de conseil et d'expertise technique de haute qualité, 
                  adaptés aux besoins spécifiques de nos clients, tout en contribuant au développement durable 
                  et à la prospérité de la région.
                </p>
              </div>
              
              <!-- Valeurs -->
              <div>
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Nos valeurs</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-blue-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                      <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h3 class="font-semibold text-gray-900">Innovation</h3>
                    </div>
                    <p class="text-sm text-gray-700">Nous repoussons les limites de la technologie pour offrir des solutions avant-gardistes.</p>
                  </div>
                  
                  <div class="bg-purple-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                      <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h3 class="font-semibold text-gray-900">Excellence</h3>
                    </div>
                    <p class="text-sm text-gray-700">Nous visons l'excellence dans chaque projet que nous entreprenons.</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Rejoignez notre équipe</h3>
                <p class="text-gray-700 mb-4">
                  Vous souhaitez faire partie d'une équipe dynamique et innovante?
                </p>
                <a href="/opportunities" class="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                  Voir nos offres d'emploi
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Contact Card -->
            <div class="bg-gray-50 rounded-xl p-6 md:p-8 h-fit shadow-md">
              <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Nos coordonnées
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 mt-1 mr-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p class="font-medium text-gray-900">Adresse physique</p>
                    <p class="text-gray-700">Q.Kyeshero, Commune et Ville de Goma</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <svg class="w-5 h-5 mt-1 mr-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p class="font-medium text-gray-900">Email professionnel</p>
                    <p class="text-gray-700">direction@beatexpertise.com</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <svg class="w-5 h-5 mt-1 mr-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p class="font-medium text-gray-900">Téléphone</p>
                    <p class="text-gray-700">+243 995 277 023</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-500">
                  N'hésitez pas à nous contacter pour discuter de vos projets et de la manière dont nous pouvons vous accompagner.
                </p>
              </div>
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
    name: 'about-component',
    layout: 'blog',
    mixins: [aosMixin], 

    head() {
      return {
        title: "Beat Expertise | À propos de nous",
        meta: [
          // ... (le reste des métadonnées reste inchangé)
        ]
      };
    }
  };
</script>

<style>
.bg-grid-pattern {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
</style>