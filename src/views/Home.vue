<template>
  <div id="Dashboard">
    <Toast />
    <Spinner />
    <Header />
    <!--<h3 class="welcome text-cyan-500">Welcome,</h3> -->
    <div
      id="main"
      class="grid-container"
    >
      <Footer v-if="windowWidth < 624" />
      <Sidenav v-else /> {{ windowWidth }}
      <div class="view">
        <router-view />
      </div>
  </div>
  </div>
</template>

<script>
import SuccessModal from '@/components/SuccessModal.vue'
import Toast from "primevue/toast";
import Spinner from "../components/Spinner.vue";
import Header from "../components/Header.vue";
import Sidenav from "../components/Sidenav.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  components: {
    Header,
    Footer,
    Toast,
    SuccessModal,
    Sidenav,
    Spinner,
  },
};
</script>
<style lang="scss">
.welcome {
  font-size: 1.6em;
  font-weight: 600;
}
.text-head {
  font-size: 1em;
  font-weight: 600;
}

.header {
  padding: 1.5em 0;
  position: fixed;
  top: 0;
  width: 100%;

  z-index: 999;
}
.view {
  margin-left: 200px;
  margin-top: 6em;
}
.sidenav {
  width: 150px;
  position: fixed;
  padding: 1em 0;
  left: 0;
}

.main {
}

.footer {
  background-color: #648ca6;
}

@media (max-width: 624px) {
  .view {
    margin: 1em;
  }
}
</style>
