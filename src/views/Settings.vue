<template>
  <div class="py-14 md:py-2 px-6">
    <div class="my-2" :class="phoneShow ? 'show' : 'hide'">
      <p
        class="
          py-1
          text-gray-600 text-tiny
          font-medium
          uppercase
          hover:underline
        "
        @click="phoneShow = !phoneShow"
      >
        <span>&#8592;</span> Back
      </p>
    </div>
    <h2 class="text-lg work font-semibold">Settings</h2>
    <div class="settings_container">
      <div class="settings_menu" :class="phoneShow ? 'hide' : 'show'">
        <div class="user_welcome md:my-8 flex items-center">
          <div class="avatar w-12">
            <img src="/img/avatar.svg" alt="avatar" />
          </div>
          <div class="welcome_text mx-4">
            <p class="text-gray-400 work text-base">Welcome</p>
            <p class="font-medium work text-lg">Senou Didier</p>
          </div>
        </div>
        <ul class="menu_list">
          <TabMenu :model="lists" @toogleShow="toogleShow" />
        </ul>
      </div>
      <div class="active_settings_view" :class="phoneShow ? 'show' : 'hide'">
        <div class="flex flex-col md:m-0 m-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabMenu from "../components/TabMenu";

export default {
  name: "Settings",
  data() {
    return {
      phoneShow: false,
      isShow: false,

      lists: [
        {
          label: "Profile",
          name: "Profile",
          icon: "/img/nav-icons/profile.svg",
          activeIcon: "/img/nav-icons/profile-sharp.svg",
        },
        {
          label: "Payment Details",
          name: "Payment",
          icon: "/img/nav-icons/wallet.svg",
          activeIcon: "/img/nav-icons/wallet-sharp.svg",
        },
        {
          label: "Security",
          name: "Security",
          icon: "/img/nav-icons/security.svg",
          activeIcon: "/img/nav-icons/security-sharp.svg",
        },
      ],
    };
  },
  components: {
    TabMenu,
  },
  methods: {
    toogleShow(any) {
      console.log(any);
      this.phoneShow = !this.phoneShow;
      this.$router.push({ name: any });
      console.log(this.phoneShow);
    },
  },
  computed: {
    displayText() {
      return this.mq.current === "sm" ? "I am small" : "I am large";
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 786px) {
  .settings_menu {
    width: 30%;
  }
  .settings_menu {
    padding: 1rem;
    border-right: 1px solid lightgrey;
  }
}
@media (max-width: 786px) {
  .hide {
    display: none !important;
  }
  .settings_container {
    display: block !important;
  }
  .active_settings_view {
    display: block;
  }
  .settings_container {
    max-width: 500px;
  }
}
.settings_container {
  width: 100%;
  margin: 1em auto;
  background-color: white;
  border-radius: 0.6em;
  display: flex;
}

.active_settings_view {
  flex-grow: 1;
  display: block;
  justify-content: center;
  align-items: center;
}
.menu_list {
  margin: 2em 0;
  li {
    display: flex;
    margin: 2.5em 0;
    span {
      margin: 0 0.5em;
    }
  }
}
</style>
