<template>
  <client-only>
  <div class="col-span-12 lg:col-span-6" v-bind="$attrs">
    <div class="w-full sm:mt-20 xl:mt-0"><br>
        <div class="flex flex-wrap">
          <!-- Emit click event with question and answer when a question is clicked -->
          <a
              v-for="question in questions"
              :key="question.id"
              @click="sendQuestionToMainComponent(question)"
          >
           <BaseButton
                class="max-w-full px-6 m-1 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
              >
              <span class="whitespace-no-wrap"> {{ question.question.substring(0, 100) }} ...</span>
            </BaseButton> 
          </a>
             
        </div>
      <!-- <img :src="require('~/assets/img/aitools.png')" class="w-full" alt="" /> -->
    </div>
  </div>
</client-only>
</template>

<script>
export default {
  name: 'LandingAihistory',
  props: {
    type: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      questions: []
    }
  },
  methods: {
    sendQuestionToMainComponent(question) {
      // Emit an event with the question and answer data
      this.$emit('questionClicked', { question: question.question, answer: question.answer });
    }
  },
  async mounted() {
    // Fetch data from the API endpoint
    await this.$axios.get('/everly/questions')
      .then(response => {
        this.questions = response.data.questions;
        //console.log("questions ===========> ");
        //console.log("Response:", JSON.stringify(response));
      })
      .catch(error => {
        console.error('Could not fetch the questions =========>:', error);
      });
  },
}
</script>