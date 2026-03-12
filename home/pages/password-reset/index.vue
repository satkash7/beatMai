<template>
    <div class="container mx-auto px2 py-4">
      <div class="max-w-md mx-auto bg-white p-3 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-center mb-4">Reset Your Password</h2>
        <!--display success or error message according to resoonse-->
        <!-- if the success value changes to false, we must remove this text-->
        <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold text-green-700">Success!</strong> Password reset successful! 
          <hr>
          <span class="block sm:inline"><a href="/u"><b>Click here to login</b></a></span>
        </div>
        <!-- if the verified value changes to false, we must remove this text-->

        <div v-if="verified" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold text-green-700">Verification!</strong>
          <span class="block sm:inline">Please check your inbox/spam folder. Reset code sent to your email. Validity:1h</span>
        </div>

        <form v-if="step == 1" @submit.prevent="sendResetRequest">
          <label class="block mb-2">Enter your email</label>
          <input v-model="email" type="email" required class="w-full p-2 border rounded" />
          <button type="submit" class="mt-4 w-full bg-blue-800 text-white p-2 rounded">Request Password Reset</button>
        </form>
        
        <form v-if="step == 2" @submit.prevent="verifyCode">
          <label class="block mb-2">Enter 6-digit code</label>
          <input v-model="token" type="text" maxlength="6" required class="w-full p-2 border rounded" />
          <button type="submit" class="mt-4 w-full bg-blue-800 text-white p-2 rounded">Verify Code</button>
        </form>
        
        <form v-if="step == 3" @submit.prevent="resetPassword">
          <label class="block mb-2">New Password</label>
          <input v-model="password" type="password" required class="w-full p-2 border rounded" />
          <label class="block mb-2 mt-2">Confirm Password</label>
          <input v-model="confirmPassword" type="password" required class="w-full p-2 border rounded" />
          <button type="submit" class="mt-4 w-full bg-blue-800 text-white p-2 rounded">Reset Password</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import aosMixin from '@/mixins/aos';
  export default {
    name: 'reset-component',
    layout: 'user',
    mixins: [aosMixin],
    data() {
      return {
        step: 1,
        email: '',
        token: '',
        password: '',
        confirmPassword: '',
        success: false,
        verified: false,
      };
    },
    methods: {
      async sendResetRequest() {
        try {
          const response = await this.$axios.post('/user/password/request-reset', { email: this.email });
          if(response.data.status_code === 200) {
            this.verified = true;
            this.step = 2;
          } else {
            alert('Invalid or unknown email address! Please enter a valid email.');
          }
          
        } catch (error) {
          console.error('Error sending reset request', error);
        }
      },
      async verifyCode() {
        try {
            const response = await this.$axios.post('/user/password/verify-token', { token: this.token, email: this.email });
            // response 
            if (response.data.status_code === 200) {
                this.step = 3;
            } 
            else if(response.data.status_code === 401 ) {
                alert('Expired Code! Please enter a valid code.');
                this.step = 1;
            } else {
                alert('Invalid code! Please enter a valid code.');
                this.$router.push('/password-reset');
            }
          } catch (error) {
            console.error('Error sending reset request', error);
          }
      },
      async resetPassword() {
        this.verified = false // just to remove the message
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        try {
          const response = await this.$axios.post('/user/password/reset', {
            token: this.token,
            email: this.email,
            password: this.password,
          });
          if (response.data.status_code === 200) {
            this.success = true;
            // redirect to login after some seconds
            setTimeout(() => {
              this.$router.push('/u');
            }, 7000);
          } else {
            alert('Unexpected error! Please try again.');
          }
        } catch (error) {
          console.error('Error resetting password', error);
        }
      },
    },
  };
  </script>
  