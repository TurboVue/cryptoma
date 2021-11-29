<template>
  <div id="main" class="relative">
    <Header />
    <!-- <Toast class="custom" /> -->
    <Footer />
    <!-- <Sidenav /> -->
    <Spinner v-if="isSpin" />
    <SuccessModal :isSuccess="isSuccess" />
    <AccountForm v-if="verify" />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import Header from "./Header.vue";
import AccountForm from "@/components/Acount-Form";
// // import Toast from "primevue/toast";
import Spinner from "@/components/Spinner.vue";
import {} from "vuex";
import { mapGetters, mapActions } from "vuex";
// // import Sidenav from "./Sidenav.vue";
import Footer from "./Footer.vue";
import SuccessModal from "@/components/SuccessModal.vue";
// import axios from 'axios'
export default {
  name: "Overview",
  data() {
    return {
      isSuccess: { val: false },
    };
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
    Footer,
    // Sidenav,
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
  margin-top: 40px;
  margin-bottom: 50px;
}
@media (max-width: 768px) {
  main {
    margin-top: 0;
  }
}
@media (min-width: 769px) {
  main {
    margin-left: 220px;
  }
}
</style>
