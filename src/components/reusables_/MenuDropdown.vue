<template>
  <div v-click-away="close" class="menudropdown border rounded shadow-lg bg-white w-full">
    <div>
      <p class="px-2 font-medium capitalize px-4 text-base font-medium work text-gray-700 pt-2 select-none">{{ fullname }}</p>
    </div>
    <div class="my-2">
      <ul class="">
        
        <li
          @click="push('Profile')"
          class="hover:bg-gray-100 font-mediu work cursor-pointer text-gray-500 text-tiny px-4  p-2 "
        >
         Your Profile
        </li>

        <li @click="logout()" class="hover:bg-gray-100 font-mediu work cursor-pointer text-gray-500 text-tiny px-4  p-2 ">
          Sign out
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuDropdown",
  setup() {
    return {};
  },

  methods: {
    close() {
      this.$emit("toggleModal");
    },
    toggleForm(any) {
      this.close();
      this.$emit("toggleForm", any);
    },
    push(any) {
      this.close();
      this.$router.push({ name: any });
    },
    logout(){
      this.$store.dispatch('auth/logout').then(() => {
        window.location.reload(true);
      })
    }
  },
};
</script>
<style lang="scss">
.menudropdown {
  max-width: 200px;
  position: absolute;
  top: 75px;
  right: 10px;
  z-index: 2;
}
</style>
