<template>
  <div id="main" class="relative">
    <div
      class="overlay"
      :class="isSideBar ? 'active' : ''"
      @click="toggleSideBar"
    ></div>
    <Sidenav :isSideBar="isSideBar" @toggleSideBar="toggleSideBar" />

    <div>
      <main>
        <Header @toggleSideBar="toggleSideBar" />
        <div class="bg-white rounded-lg">
          <router-view />
        </div>
      </main>
    </div>

    <!-- <Toast class="custom" /> -->
    <!-- <Footer /> -->

    <Spinner v-if="isLoading" />
    <SuccessModal :isSuccess="isSuccess" />
    <AccountForm @FormClickAway = "ClickAway" v-if="isShowForm"/>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import AccountForm from "@/components/Acount-Form";
// // import Toast from "primevue/toast";
import Spinner from "@/components/Spinner.vue";
// import {} from "vuex";
import { useStore } from "vuex";
import Sidenav from "./Sidenav.vue";
// // import Footer from "./Footer.vue";
import SuccessModal from "@/components/SuccessModal.vue";
// import axios from 'axios'
import { ref } from "vue";

const isSuccess = ref({ val: false });

const isSideBar = ref(false);
const toggleSideBar = () => {
  isSideBar.value = !isSideBar.value;
};
const isLoading = ref(false);
const store = useStore();
// const router = useRouter()
const isShowForm = ref(false)
    // const toggleForm = () => {
    //     isShowForm.value = !isShowForm.value
    // }
    const ClickAway = () => {
        console.log('jf')
        isShowForm.value = false
    }
    const checkAccountDetails = () => {
      const account = store.getters['auth/payment_details']
      if(account.account_name === 'none'){
       return isShowForm.value = true
      }
    }
const loading = async () => {
  isLoading.value = true;
  console.log("me")
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        store
          .dispatch("auth/attempt", JSON.parse(sessionStorage.getItem("token")))
          .then(() => {
            // console.log();
            isLoading.value = false;
            // router.push({ path: "/" });
          })
          .catch(() => {
            // console.log(err);
            isLoading.value = false;
            // router.push({ path: "/login" });
          })
      );
    }, 1000)
  );
};

loading();
checkAccountDetails()
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
    margin-left: 325px;
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
