<template>
  <div id="main" class="relative">
    <div class="overlay" :class="isSideBar ? 'active' : ''" @click="toggleSideBar"></div>
      <Sidenav :isSideBar = "isSideBar"/>
    
    <div>
      <main>
      <Header @toggleSideBar = "toggleSideBar"/>
      <div class="bg-white rounded-lg">
        <router-view />
      </div>
      
    </main>
    </div>
    
    <!-- <Toast class="custom" /> -->
    <!-- <Footer /> -->
      
    <Spinner v-if="isSpin" />
    <SuccessModal :isSuccess="isSuccess" />
    <AccountForm v-if="verify" />
    
  </div>
</template>
<script>
import Header from "./Header.vue";
import AccountForm from "@/components/Acount-Form";
// // import Toast from "primevue/toast";
import Spinner from "@/components/Spinner.vue";
// import {} from "vuex";
import { mapGetters, mapActions } from "vuex";
import Sidenav from "./Sidenav.vue";
// // import Footer from "./Footer.vue";
import SuccessModal from "@/components/SuccessModal.vue";
// import axios from 'axios'
import {ref} from 'vue'
export default {
  name: "Overview",
  data() {
    return {
      isSuccess: { val: false },
    };
  },
  setup(){
    const isSideBar = ref(false)
    const toggleSideBar = () => {
      isSideBar.value = !isSideBar.value
    }
    return {
      isSideBar,
      toggleSideBar
    }
  },
  provide() {
    return {
      showSuccess: this.isSuccess,
    };
  },
  computed: {
    ...mapGetters({
      lists: "auth/details",
      verify: "auth/cardForm",
      isSpin: "cards/isSpin",
    }),
  },
  methods: {
    ...mapActions({
      getAllCards: "cards/getAllCards",
      checkPay: "auth/toggleForm",
    }),
    toggleSide(any) {
      console.log(any);

      this.isSideCart = false;
    },

    fetchCard() {
      this.getAllCards();
    },
    // isCard(){
    //         this.checkPay();
    // }
  },
  components: {
    Header,
    // Toast,
    Spinner,
    // Footer,
    Sidenav,
    AccountForm,
    SuccessModal,
  },
  mounted() {
    //this.isCard();

    this.fetchCard();
    // this.$toast.add({
    //   severity: "success",
    //   summary: "Welcome Back",
    //   detail: "Nice to see you again",
    //   life: 3000,
    // });
    // this.fetch()

    // this.events.forEach(event => window.addEventListener(event, this.resetTimers))
    //  this.setTimers();
  },
};
</script>
<style lang="scss" scoped>
//
input {
  appearance: none !important;
}

main {
  transition: 0.5s ease-in-out;
  // margin-top: 40px;
  margin-bottom: 50px;
  // position: relative;
}

@media (min-width: 769px) {
  main {
    margin-left: 350px;
  }
}
// #view {
//   width: calc(100vw - 260px);
//   margin-left: 240px;
//   padding: 1rem 1.2rem;
// }
.overlay {
  background-color: #00000045;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  opacity: 0;
  transition: 0.5s ease-in-out;
}
  @media (max-width: 768px) {

  .overlay.active {
    opacity: 1;
    display: block;
  }
  // #view {
  //   width: 100%;
  //   margin-left: 0px;
  // }
}
</style>
