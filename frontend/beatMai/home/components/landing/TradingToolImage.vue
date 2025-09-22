<template>
  <client-only>
  <div class="col-span-12 lg:col-span-6" v-bind="$attrs">
    <div class="w-full sm:mt-20 xl:mt-0">
      <!-- <BaseToolsButtons />-->
       <br><br>
      <div class="flex flex-wrap"> 


          <div class="w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        style="border:0;"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63811.47636251019!2d29.11131532259476!3d-1.6232212809677344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd092a7268daf5%3A0xd630ab5bd2dd6559!2sULPGL%20(campus%20Moise)%2FGoma!5e0!3m2!1sen!2srw!4v1747604115002!5m2!1sen!2srw"> 
      </iframe>
    </div>
    <br>
       
        </div>
      <!-- <img :src="require('~/assets/img/aitools.png')" class="w-full" alt="" /> -->
    </div>
  </div>
</client-only>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  name: 'tools-buttons',
  mixins: [aosMixin],
  props: {
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      areas: [ 
  {
    name: 'Études et Conseil',
    href: '/services#etudes-conseil',
  },
  {
    name: 'Infrastructures d\'eau',
    href: '/services#construction',
  },
  {
    name: 'Digitalisation des réseaux d’eau',
    href: '/services#digitalisation',
  },
  {
    name: 'Maintenance',
    href: '/services#maintenance',
  },
  {
    name: 'Énergie de secours',
    href: '/services#energie-secours',
  },
  {
    name: 'Gestion et suivi',
    href: '/services#gestion-eau',
  },
  {
    name: 'Optimisation',
    href: '/services#systemes-pompage',
  },
  {
    name: 'Formation',
    href: '/services#formation-technique',
  },
  {
    name: 'Cartographie',
    href: '/services#cartographie-reseaux',
  },
  {
    name: 'Solutions innovantes',
    href: '/services#gestion-durable-eau',
  },
  {
    name: 'Partenariats et collaborations stratégiques',
    href: '/services#partenariats-strategiques',
  },
      ],
    };
  }
}
</script>
