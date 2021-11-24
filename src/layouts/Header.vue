<script>
import ProfilePic from "@/components/reusables_/ProfilePic.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Header",
  setup() {
    const store = useStore();
    return {
      fullname: computed(() => store.getters["auth/user"].fullname),
    };
  },
  components: {
    ProfilePic,
  },
};
</script>
<template>
  <header
    class="
      flex
      py-5
      px-4
      bg-white
      md:static
      fixed
      inset-x-0
      top-0
      w-full
      justify-between
      items-center
    "
  >
    <div class="logo w-10 mx-2">
      <img src="/img/logo.svg" class="w-full" alt="" />
    </div>
    <div class="capitalize flex items-center">
      <ProfilePic :isSize="'small'" :name="fullname" /><span
        class="md:hidden font-medium px-2"
        >{{ fullname }}</span
      >
    </div>

    <!-- <div class="notifications md:mx-2 mx-8 flex items-center">
                <img src="/img/nav-icons/notification.svg" class="hidden" alt="">
                <img src="/img/nav-icons/unread-notification.svg" alt="">
                <span class="px-2 font-medium md:hidden">Notifications</span>
            </div> -->
  </header>
</template>
<style lang="scss" scoped>
header {
  z-index: 5;
}
</style>
