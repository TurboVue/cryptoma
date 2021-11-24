<template>
  <footer
    class="
      md:flex
      flex-row
      justify-evenly
      hidden
      fixed
      inset-x-0
      bottom-0
      w-full
      bg-white
      border-t-1 border-gray-100
    "
  >
    <div
      class="p-ripple grey"
      v-ripple
      v-if="
        $route.name === 'Main' ||
        $route.name === 'Giftcard' ||
        $route.name === 'Bitcoin'
      "
    >
      <router-link to="/">
        <img src="/img/nav-icons/grid-sharp.svg" alt="" class="p-4" />
      </router-link>
    </div>
    <div class="p-ripple grey" v-ripple v-else>
      <router-link to="/">
        <img src="/img/nav-icons/grid.svg" alt="" class="p-4" />
      </router-link>
    </div>

    <div class="p-ripple grey" v-ripple v-if="$route.path === '/transactions'">
      <router-link to="/transactions">
        <img src="/img/nav-icons/albums-sharp.svg" alt="" class="p-4" />
      </router-link>
    </div>
    <div class="p-ripple grey" v-ripple v-else>
      <router-link to="/transactions">
        <img src="/img/nav-icons/albums.svg" alt="" class="p-4" />
      </router-link>
    </div>
    <div
      class="p-ripple grey"
      v-ripple
      v-if="
        $route.path === '/settings' ||
        $route.name === 'Payment' ||
        $route.name === 'Security'
      "
    >
      <router-link to="/settings">
        <img src="/img/nav-icons/settings-sharp.svg" alt="" class="p-4" />
      </router-link>
    </div>
    <div class="p-ripple grey" v-ripple v-else>
      <router-link to="/settings">
        <img src="/img/nav-icons/settings.svg" alt="" class="p-4" />
      </router-link>
    </div>
    <div class="p-ripple grey" v-ripple>
      <span @click="exit">
        <img src="/img/nav-icons/logout.svg" alt="" class="p-4" />
      </span>
    </div>
  </footer>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Footer",
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    async exit() {
      await this.logout()
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch(() => {
          console.log("failed");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
footer {
  z-index: 4;
}
.p-ripple.grey .p-ink {
  background: grey;
}
</style>
