<script>
import ProfilePic from "@/components/reusables_/ProfilePic.vue";
import MenuDropDown from "@/components/reusables_/MenuDropdown.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";


export default {
  name: "Header",
  setup() {
    const store = useStore();
    // const isRequest = ref(false);
    const isDrop = ref(false);
    const toggleModal = () => {
      isDrop.value = !isDrop.value;
    };
    return {
      isDrop,
      // isRequest,
      toggleModal,
      fullname: computed(() => store.getters["auth/user"].fullname),
       role: computed(() => {
         const isRole = store.getters['auth/user_role']
         if (isRole != 'admin') return false 
         return true
       })
    };
  },
  components: {
    ProfilePic,
    MenuDropDown
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
      static
      sm:fixed
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
    <div class="capitalize select-none flex items-center" >
      <div class="px-4"><el-button v-if="role" @click="() => $router.push({'path': '/admin'})" color="#1D4ED8" style="color: white">Dashboard</el-button></div>
      <div class="capitalize select-none flex items-center" @click="toggleModal()">
        <ProfilePic :isSize="'small'" :name="fullname" /><span
        class="hidden sm:block font-medium px-2"
        >{{ fullname }}</span
      >
      <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
              fill="#111827"
            />
          </svg>
      </div>
      
        </div>
    </div>
    <transition name="fade">
        <MenuDropDown @toggleForm="toggleForm" @toggleModal="toggleModal" v-if="isDrop" />
      </transition>

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
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
