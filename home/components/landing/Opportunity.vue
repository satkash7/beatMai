<template>
  <client-only>
    <div class="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 m-2">
      
      <!-- Title spanning across both sections -->
      <h3 
        class="text-xl font-semibold text-neutral-800 hover:text-blue-500 transition duration-300 cursor-pointer text-center mb-1" 
        @click="handleClick"
      >
        <b>{{ opportunity.title }}</b>
      </h3>

      <div class="flex items-center space-x-6">
        <!-- Image (Left) -->
        <div class="w-48 flex-shrink-0">
          <img 
            v-if="opportunity.imageUrl && opportunity.imageUrl !== ''" 
            :src="opportunity.imageUrl"
            class="w-full rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer " 
            :alt="opportunity.title"
            @click="handleClick"
            
          />
          <img 
            v-else 
            :src="require('~/assets/img/ai.jpg')" 
            class="w-full rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer " 
            :alt="opportunity.title"
            @click="handleClick"
            
          />
        </div>

        <!-- Opportunity details Details (Right) -->
        <div class="text-left flex-1">
          <p class="text-sm text-gray-600 mt-1">
             {{ opportunity.opportunityCaption }}
          </p>
        </div>
      </div>
    </div>
  </client-only>
</template>


<script>
export default {
  name: 'LandingOpportunity',
  props: {
    opportunity: {
      type: Object,
      required: true,
    }
  },
  methods: {
    handleClick() {
      this.$emit('open-opportunity', this.opportunity);
    },
  },
}
</script>
