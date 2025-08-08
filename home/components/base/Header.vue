<template> 
<client-only>
  <!-- Hero section -->
  <section id="hero" class="hero desktop w-full pb-24">
    <BaseSection class="nospace">
      <div class="col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left nospace">
        <h1
          data-aos-once="true"
          class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight sm:pr-8 xl:pr-10 mobile"
          style="color:white;"
        > <br></br><br></br><br></br>
        Bienvenu au "Bureau d'Expertise et Accompagnement Technique" BEAT
        </h1>
        <p data-aos-once="true" data-aos-delay="300" class="text-white extramobile">
          BEAT est un bureau d'expertise et accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.
        </p>
        <div
          data-aos-once="true"
          data-aos-delay="700"
          class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
        > 
        <a href="#contact">
          <base-button class="px-2 xl:px-4 py-3 mt-2 bg-inherit border border-[#0c66ee] smallbtn">
          Entrez en contact avec nous pour savoir plus
          </base-button>
        </a>
        </div>
      </div>


    </BaseSection>
  </section>
</client-only>
</template>


<script>
import aosMixin from '@/mixins/aos'

export default {
  name: 'header-component',
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      typedText: "",
      typeaheadPhrases: [
        "Hey",
      ],
      currentPhraseIndex: 0,
      typeaheadInterval: null,
      typeaheadPlaceholder: "",
      deleteInterval: null,
      showModal: false,
      userQuestion: '',
      userAnswer: '',
     
    };
  },


  methods: {
    openModal() {
      this.showModal = true;
    },
    
    closeModal() {
      this.showModal = false;
      this.typedText = "";
      this.userQuestion = "";
      this.userAnswer = "";
    }, 
  }
}
</script>
<style>
 .text-header-gradient {
  background: rgb(34, 107, 215);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-header-gradient-big {
  background: rgb(31, 109, 227);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5em;
  color:#030a3c;
}

.bg-partner {
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
.modal {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
}

.modal-content {
  background-color: #dbdbdb;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  overflow: scroll;
}

.close {
  color: #030a3c;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-top: -10px;
}

.close:hover,
.close:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}

.fullscreen {
  color: #095c01;
  float: right;
  font-size: 16px;
  font-weight: bold;
  margin-top: -10px;
}

.fullscreen:hover,
.fullscreen:focus {
  color: rgb(5, 118, 224);
  text-decoration: none;
  cursor: pointer;
}
 
.hero {
    background-size: cover;
    background-position: center;
    color: #fff;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: rgba(14, 42, 74, 0.7); /* Overlay color */
    background-blend-mode: multiply; /* Darkens images */
    z-index: 1; 
    animation: heroFade 25s infinite;
    
}

.upzone {
  z-index: 100 !important;
}

@media screen and (min-width: 640px) {
    .desktop {
      margin-top:-50px;
    }
  }
/* Effet de transition fluide (fondu) */
@keyframes heroFade {
    0% { background-image: url('~/assets/img/pic1.jpg'); opacity: 1; }
    33% { background-image: url('~/assets/img/pic2.jpg'); opacity: 1; }
    66% { background-image: url('~/assets/img/aa.jpeg'); opacity: 1; }
    100% { background-image: url('~/assets/img/cc.jpeg'); opacity: 1; }
}

@media screen and (max-width: 640px) {
  .nospace {
    margin-top: 0;
    margin-bottom: 0;
  }
  .mobile {
    font-size: 26px;
    padding: 2px 4px;
    margin-top:0;
    margin-bottom:0;
  }

  .extramobile {
    font-size: 12px;
    padding: 2px 4px;
    margin-top:0;
    margin-bottom:0;
  }

  .optional {
    display: none;
  }
}
</style>
