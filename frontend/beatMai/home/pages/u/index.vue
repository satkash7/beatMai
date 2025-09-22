<template>
  <client-only>
    <div class="w-full min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div class="w-full max-w-md mx-4">
        <!-- Carte de connexion -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <!-- En-tête sobre -->
          <div class="bg-white p-6 text-center border-b border-gray-200">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                <span class="text-2xl font-bold text-gray-700">B</span>
              </div>
            </div>
            <h1 class="text-2xl font-semibold text-gray-800">Beat Expertise</h1>
            <p class="text-gray-600 mt-2">Plateforme de connexion</p>
          </div>
          
          <!-- Contenu du formulaire -->
          <div class="p-8">
            <!-- Messages d'alerte -->
            <div v-if="loading" class="flex justify-center my-4">
              <div class="loader"></div>
            </div>
            
            <div v-if="successMessage && !loading" class="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
              <p v-html="successMessage"></p>
            </div>
            
            <div v-if="errorMessage && !loading" class="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-6">
              <p v-html="errorMessage"></p>
            </div>
            
            <!-- Formulaire de connexion -->
            <div v-if="showLogin && !loading">
              <h2 class="text-xl font-semibold text-gray-800 mb-2 text-center">Connexion</h2>
              <p class="text-gray-600 text-center mb-8">Accédez à votre espace personnel</p>
              
              <form @submit.prevent="postLogin()" class="space-y-6">
                <div>
                  <label for="loginLogin" class="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      id="loginLogin" 
                      v-model="loginLogin" 
                      placeholder="Votre adresse email" 
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label for="loginPassword" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <input 
                      type="password" 
                      id="loginPassword" 
                      v-model="loginPassword" 
                      placeholder="Votre mot de passe" 
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input 
                      type="checkbox" 
                      id="acceptance" 
                      class="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      checked
                    />
                    <label for="acceptance" class="ml-2 block text-sm text-gray-700">Conserver ma session</label>
                  </div>
                  
                  <a href="#" class="text-sm text-blue-500 hover:text-blue-700 transition-colors duration-200">
                    Mot de passe oublié?
                  </a>
                </div>

                <button
                  type="submit"
                  class="w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  Se connecter
                </button>
              </form>
              
              <div class="mt-6 text-center">
                <p class="text-gray-600">
                  Pas de compte? 
                  <a 
                    href="mailto:info@primetek.africa" 
                    class="font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    Faites une requête
                  </a>
                </p>
              </div>
            </div>

            <!-- Formulaire d'inscription -->
            <div v-else class="space-y-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-2 text-center">Créer un compte</h2>
              <p class="text-gray-600 text-center mb-8">Rejoignez notre plateforme</p>
              
              <form @submit.prevent="validateRegisterForm() && postRegister()">
                <div class="mb-4">
                  <label for="registerName" class="block text-sm font-medium text-gray-700 mb-2">Votre nom complet</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      id="registerName" 
                      v-model="registerName" 
                      placeholder="Votre nom complet" 
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div v-if="registerName != ''" class="mb-4 bg-gray-50 p-3 rounded-md">
                  <p class="text-sm text-gray-700">
                    Votre identifiant sera: 
                    <span class="font-medium text-gray-800">{{ generatedUsername }}</span>
                  </p>
                </div>
                
                <div class="mb-4">
                  <label for="registerEmail" class="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      id="registerEmail" 
                      v-model="registerEmail" 
                      placeholder="Votre adresse email" 
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div class="mb-6">
                  <label for="registerPassword" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <input 
                      type="password" 
                      id="registerPassword" 
                      v-model="registerPassword" 
                      placeholder="Créez un mot de passe sécurisé" 
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                  <p class="text-xs text-gray-500 mt-1">Minimum 8 caractères</p>
                </div>
                
                <div v-if="formReady && !validateRegisterForm()" class="mb-4 bg-red-50 p-3 rounded-md border border-red-200">
                  <p class="text-sm text-red-700">Veuillez remplir tous les champs avec des informations valides</p>
                </div>
                
                <button
                  type="submit"
                  class="w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  Créer un compte
                </button>
              </form>
              
              <div class="mt-6 text-center">
                <p class="text-gray-600">
                  Vous avez déjà un compte? 
                  <a 
                    @click="toggleForm('login')" 
                    class="font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                  >
                    Connectez-vous
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-500">© 2023 Beat Expertise. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import aosMixin from '@/mixins/aos';

export default {
  name: 'user-component',
  layout: 'user',
  mixins: [aosMixin],
  data() {
    return {
      showLogin: true,
      userRegistred: false,
      loginLogin: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      formReady: false,
      nextroute: null,
      nextpost: null,
      nextCreator: null,
      successMessage: '', 
      errorMessage: '',
      loading: false
    };
  },
  computed: {
    generatedUsername() {
      const normalizedName = this.registerName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const username = normalizedName.replace(/\s/g, "");
      return username;
    },
  },
  methods: {
    login() {
      console.log('Logging in with:', this.loginLogin, this.loginPassword);
    },
    register() {
      console.log('Registering with:', this.registerName, this.registerEmail, this.registerPassword);
    },
    toggleForm(formType) {
      this.showLogin = formType === 'login';
    },
    validateRegisterForm() {
      this.formReady = true;
      if (this.registerName === '' || this.registerEmail === '' || this.registerPassword === '' || this.registerPassword.length < 8) {
        return false;
      }
      return true;
    },
    async postLogin() {
      try {
        this.loading = true;
        const response = await this.$axios.post('/user/login', {
          login: this.loginLogin,
          password: this.loginPassword,
        });

        console.log(response.data);
        const userData = response.data.user;
        const token = response.data.token;
        
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('username', response.data.user.username);
        localStorage.setItem('token', token);
        localStorage.setItem('accesshash', response.data.user.accesshash);
        localStorage.setItem('name', response.data.user.name);

        sessionStorage.setItem('email', response.data.user.email);
        sessionStorage.setItem('username', response.data.user.username);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('accesshash', response.data.user.accesshash);
        sessionStorage.setItem('name', response.data.user.name);
        
        this.loading = false;
        if (this.nextroute != null && this.nextpost != null) {
          this.$router.push({ path: `/${this.nextCreator}` + `/${this.nextroute}` + "/" +`${this.nextpost}` + '#comments' });
        }
        else {
          location.reload();
        }
        console.log('Login successful!', userData);
      } catch (error) {
        this.loading = false;
        this.errorMessage = 'Échec de la connexion! Veuillez vérifier vos identifiants.';
        console.log('Login failed:', error);
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      }
    },
    async postRegister() {
      try { 
        this.loading = true;
        const normalizedUsername = this.registerName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const username = normalizedUsername.replace(/[^a-zA-Z0-9]/g, "");

        const response = await this.$axios.post('/user/register', {
          email: this.registerEmail,
          name: this.registerName,
          username: username,
          password: this.registerPassword,
          accesshash: 'beat_user'
        });
        
        if (response.data.status_code == 409) {
            this.loading = false; 
            this.errorMessage = response.data.status_message;
            console.log('Account exists !', response.data);
        } 
        if (response.data.status_code == 200) {
          const userData = response.data.user;
          this.successMessage = 'Inscription réussie! Connectez-vous avec: ' + username + ' ou ' + this.registerEmail;
          this.loading = false; 
          console.log('Registration successful!', userData);
        }
        setTimeout(() => {
            this.successMessage = '';
            this.errorMessage = ''
            location.reload();
          }, 10000);
        
      } catch (error) {
        this.loading = false;
        this.errorMessage = 'Échec de l\'inscription! Veuillez réessayer.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 6000);
        console.log('Registration failed:', error);
      }
    },
  },
  mounted() {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('token')) { 
      const username = sessionStorage.getItem('username');
      this.$router.push(`/${username}`);
    }
    
    const nextParam = this.$route.query.next;
    const routeParam = this.$route.query.route;
    const creatorParam = this.$route.query.creator;

    this.nextroute = nextParam;
    this.nextCreator = creatorParam;
    this.nextpost = routeParam;
  },
};
</script>

<style scoped>
.loader {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4B5563;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>