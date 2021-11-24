<template>
  <div
    id="sidenav"
    class="
      grid
      fixed
      w-52
      bg-white
      left-0
      h-screen
      md:inset-x-0 md:bottom-0 md:h-auto md:hidden md:w-auto md:fixed
    "
  >
    <ul
      class="
        my-16
        md:flex md:flex-row md:my-0
        flex-wrap
        md:justify-evenly
        md:w-full
        md:py-4
        md:bg-white
        md:border-t-1
        md:border-gray-100
      "
    >
      <li
        v-if="
          $route.name === 'Main' ||
          $route.name === 'Giftcard' ||
          $route.name === 'Bitcoin'
        "
      >
        <router-link
          class="
            active
            py-4
            text-gray-400
            my-12
            mx-8
            p-ripple
            purple
            md:m-0
            flex
            items-center
            flex-row
          "
          :to="{ name: 'Main' }"
          v-ripple
        >
          <img src="/img/nav-icons/grid-sharp.svg" alt="" />

          <span class="px-2 md:hidden">Overview</span>
        </router-link>
      </li>
      <li v-else>
        <router-link
          class="
            py-4
            text-gray-400
            my-12
            mx-8
            p-ripple
            md:m-0
            flex
            items-center
            flex-row
          "
          :to="{ name: 'Main' }"
          v-ripple
        >
          <img src="/img/nav-icons/grid.svg" alt="" />
          <span class="px-2 md:hidden">Overview</span>
        </router-link>
      </li>
      <li v-if="$route.path === '/transactions'">
        <router-link
          class="
            active
            py-4
            text-gray-400
            md:m-0
            my-12
            mx-8
            p-ripple
            flex
            items-center
            flex-row
          "
          to="/transactions"
          v-ripple
        >
          <img src="/img/nav-icons/albums-sharp.svg" alt="" />
          <span class="px-2 md:hidden">Transactions</span>
        </router-link>
      </li>
      <li v-else>
        <router-link
          class="
            py-4
            text-gray-400
            my-12
            mx-8
            p-ripple
            md:m-0
            flex
            md:m-0
            items-center
            flex-row
          "
          to="/transactions"
          v-ripple
        >
          <img src="/img/nav-icons/albums.svg" alt="" />
          <span class="px-2 md:hidden">Transactions</span>
        </router-link>
      </li>

      <li
        v-if="
          $route.path === '/settings' ||
          $route.name === 'Payment' ||
          $route.name === 'Security'
        "
      >
        <router-link
          class="
            active
            nav-link
            py-4
            my-12
            mx-8
            p-ripple
            md:m-0
            flex
            md:m-0
            items-center
            flex-row
          "
          to="/settings"
          v-ripple
        >
          <img src="/img/nav-icons/settings-sharp.svg" alt="" />
          <span class="px-2 md:hidden">Settings</span>
        </router-link>
      </li>
      <li v-else>
        <router-link
          class="
            nav-link
            py-4
            text-gray-400
            my-12
            mx-8
            p-ripple
            md:m-0
            flex
            items-center
            flex-row
          "
          to="/settings"
          v-ripple
        >
          <img src="/img/nav-icons/settings.svg" alt="" />
          <span class="px-2 md:hidden">Settings</span>
        </router-link>
      </li>
      <li>
        <span
          @click="exit"
          class="
            logout
            active
            nav-link
            py-4
            my-12
            mx-8
            p-ripple
            md:m-0
            flex
            md:m-0
            items-center
            flex-row
          "
        >
          <img v-ripple src="/img/nav-icons/logout.svg" alt="" />
          <span class="px-2 md:hidden">Logout</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Sidenav",
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    async exit() {
      await this.logout()
        .then(() => {
          this.$router.replace({ name: "Login" });
        })
        .catch(() => {
          console.log("failed");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#sidenav {
  z-index: 3;
  transition: 0.5s ease-in-out;
}
.active {
  color: inherit;
  font-weight: 600;
}
@media (min-width: 768px) {
  #sidenav li:hover,
  #sidenav a:hover,
  #sidenav .logout:hover {
    background-color: #f8f8f8;
  }
}
.p-ripple.purple .p-ink {
  background: green !important;
}
</style>
