<template>
  <client-only>
  <div class="w-full">
     <div class="w-full container mx-auto px-6">
    <!-- Login/Register Section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
      <!-- Display login or register content based on user's choice -->
      <div class="w-full bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
          <div v-if="loading" class="loader my-6"></div>  
          <div v-if="successMessage  && !loading" class="bg-green-200 text-green-800 py-4 px-8 rounded my-6 text-center">
            <p v-html="successMessage"></p>  
          </div>
            <div v-if="errorMessage  && !loading" class="bg-red-200 text-green-800 py-4 px-8 rounded my-6 text-center">
              <p v-html="errorMessage"></p>
            </div>
  `        <div v-if="showLogin  && !loading" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6">
`          <!-- Login form -->
          
          <form @submit.prevent="postLogin()" class="flex flex-col items-center">
            <h2 class="text-2xl font-semibold mb-4 text-[#4A8FF6]">Connexion à votre compte!</h2>

            <div class="mb-8">
              <input type="text" placeholder="Votre adresse mail" id="loginLogin" v-model="loginLogin" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>

            <div class="mb-8">
              <input type="password" placeholder="Votre mot de passe" id="loginPassword" v-model="loginPassword" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div> 
              <div class="flex items-center">
                <input type="checkbox" id="acceptance" class="mr-2" checked/>
                <small for="acceptance">Conserver ma session</small>
              </div>
            <br>
            <BaseButton 
              class="px-10 py-4 bg-inherit text-gradient justify-center border border-[#4A8FF6] text-base"
              type="submit"
            >
              Connexion
            </BaseButton>
            <!-- Agreement to the terms of services-->

            <p class="mt-4"><b>Pas de compte? <a class="cursor-pointer text-[#4A8FF6]" href="mailto:info@primetek.africa">Faites une requête</a></b></p><br>
          </form>
        </div>

        <div v-else class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6">
          <!-- Register form -->
          <form @submit.prevent="validateRegisterForm() && postRegister()">
           
            <h2 class="text-2xl font-semibold mb-4 text-[#4A8FF6]">Join, start publishing!</h2>
           
            <!-- Your register form elements go here -->
            <label for="registerName">Your Name(s)
              </label>
            <div>
              <input type="text" id="registerName" v-model="registerName" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div v-if="registerName != ''" class="text-gray-500 text-sm"><small>Your username is : <span class="text-1xl font-semibold mb-4 text-[#4A8FF6]">{{ generatedUsername }}</span></small></div> 
            <label for="registerEmail">Adresse mail</label>
            <div>
              <input type="email" id="registerEmail" v-model="registerEmail" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <label for="registerPassword">Mot de passe</label>
            <div>
              <input type="password" id="registerPassword" v-model="registerPassword" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <br>
            <div v-if="formReady == true && !validateRegisterForm()">
              <p class="text-red-500">Please fill valid Name, Email and password (min 8 characters)</p>
            </div>
            <BaseButton 
              class="px-10 py-4 bg-inherit text-gradient justify-center border border-[#4A8FF6] text-base"
              type="submit"
            >
              Register
            </BaseButton>
              
            <p>Already have an account? <a class="cursor-pointer text-[#4A8FF6]" @click="toggleForm('login')">Login</a></p>

          </form>
          <!-- continue with google -->
          <!-- <hr>
           <p>Continue with google </p>
        
          <div class="google-btn">
            <GoogleSignInButton
              @success="onSuccess"
              @error="onError"
            />
          </div> -->
        </div>
      </div>
    </section>
  </div>
  </div>
</client-only>
</template>

<script>
import aosMixin from '@/mixins/aos';
// import VueSanitize from "vue-sanitize";
// import { ref, onMounted, onUpdated } from 'vue';

export default {
  name: 'user-component',
  layout: 'user',
  mixins: [aosMixin],
  setup() {

  },
  data() {
    return {
      showLogin: true, // Flag to toggle between login and register
      userRegistred: false,
      // Login form data
      loginLogin: '',
      loginPassword: '',
      // Register form data
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
      // Apply your username generation logic here
      const normalizedName = this.registerName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const username = normalizedName.replace(/\s/g, "");
      return username;
    },
},
  methods: {
    // sanitizeMessage(message) {
    //   return VueSanitize.sanitize(message);
    // },

    login() {
      console.log('Logging in with:', this.loginLogin, this.loginPassword);
    },

    register() {
      // Handle register logic
      console.log('Registering with:', this.registerName, this.registerEmail, this.registerPassword);
    },

    toggleForm(formType) {
      this.showLogin = formType === 'login';
    },
    validateRegisterForm() {
      this.formReady = true;
      if (this.registerName === '' || this.registerEmail === '' || this.registerPassword === '' || this.registerPassword.length < 8) {
        // Display an error message or visually indicate missing fields
        return false;
      }
      return true; // Allow form submission
    },

    async postLogin() {
      try {
        this.loading = true;
        // Make an Axios post request to the login endpoint
        const response = await this.$axios.post('/user/login', {
          login: this.loginLogin,
          password: this.loginPassword,
        });

        console.log(response.data);
        // Assuming the response contains user data, update your state or take further actions
        const userData = response.data.user;
        const token = response.data.token;
        
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('username', response.data.user.username);
        localStorage.setItem('token', token);
        localStorage.setItem('accesshash', response.data.user.accesshash);
        localStorage.setItem('name', response.data.user.name);

        // store it in session as well
        sessionStorage.setItem('email', response.data.user.email);
        sessionStorage.setItem('username', response.data.user.username);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('accesshash', response.data.user.accesshash);
        sessionStorage.setItem('name', response.data.user.name);
        // Example: Redirect to the user's profile page
        this.loading = false;
        if (this.nextroute != null && this.nextpost != null) {
          this.$router.push({ path: `/${this.nextCreator}` + `/${this.nextroute}` + "/" +`${this.nextpost}` + '#comments' });
        }
        else {
          // this.$router.push({ path: `/${userData.username}` });
          location.reload();
        }
        console.log('Login successful!', userData);
        console.log('token: ', sessionStorage.getItem('token'));
      } catch (error) {
        // Handle login failure
        // Handle login failure
        this.loading = false;
        this.errorMessage = 'Login failed! Please try again.';
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
        // Remove spaces
        const username = normalizedUsername.replace(/[^a-zA-Z0-9]/g, "");

        // Make an Axios post request to the login endpoint
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
          // Assuming the response contains user data, update your state or take further actions
          const userData = response.data.user;
          // Show success message
          this.successMessage = 'Registration successful! Please login with: ' + username + ' or ' + this.registerEmail + ' to start publishing.';
          // Hide message after 3 seconds and reload the page
          this.loading = false; 
          console.log('Registration successful!', userData);
        }
        setTimeout(() => {
            this.successMessage = '';
            this.errorMessage = ''
            location.reload();
          }, 10000);
        
      } catch (error) {
        // Handle login failure
        this.loading = false;
        this.errorMessage = 'Registration failed! Please try again.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 6000);
        console.log('Registration failed:', error);
        }
      }
    },
    onSuccess(response) {
      // Handle the successful authentication response here
      // For example, send the response token to your backend for verification
      this.$axios.post('/social-login', {
        provider: 'google_jwt',
        token: response.credential,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        this.$auth.setUserToken(response.data.token);
        this.$emit('loggedIn');
      }).catch((err) => {
        console.log({ err });
      });
    },
    onError(error) {
      // Handle any errors that occur during the sign-in process
      console.error('Google Sign-In Error:', error);
    },
  mounted() {
      if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('token')) { 
        // Redirect the user to the appropriate page
        const username = sessionStorage.getItem('username');
        this.$router.push(`/${username}`);
      }
      // i need to get the current value of ?next= and route=
      const nextParam = this.$route.query.next;
      const routeParam = this.$route.query.route;
      const creatorParam = this.$route.query.creator;

      // Assign the retrieved values to data properties
      this.nextroute = nextParam;
      this.nextCreator = creatorParam;
      this.nextpost = routeParam;
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* add css for the input fiels, text email and password */
input[type="text"], input[type="email"], input[type="password"] {
  width: 50vh;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.google-btn {
  display: flex;
  justify-content: center;
  @media screen and (max-width: 720px) {
    margin-bottom: 16px;
  }
}
</style>

