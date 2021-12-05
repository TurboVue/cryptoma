<template>
  <div id="sign-page" class="signup">
    <div id="wrapper" class="relative">
      <div class="logo w-16">
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <div id="sign" class="my-16">
        <div class="ads">
          <h3>
            You Deserve Good <br />
            Rates,
          </h3>
        </div>
        <div class="form-container md:my-10">
          <h4 class="font-bold text-gray-800">Reset Your Password</h4>
          <form action="#" @submit.prevent="save">
            <div class="input-box">
              <input
                type="name"
                class="bg-grey"
                name="name"
                id="name"
                placeholder="Senou Didier"
                disabled
              />
            </div>

            <div class="input-box">
              <input
                type="password"
                class="bg-grey"
                name="password"
                id="password"
                placeholder="New password"
              />
            </div>
            <div class="input-box">
              <input
                type="password"
                class="bg-grey"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm New Password"
              />
            </div>
            <div class="input-box submit">
              <button
                type="submit"
                class="
                  bg-cyan
                  text-base
                  flex flex-row
                  justify-center
                  items-center
                  font-medium
                  text-white
                "
                name="submit"
                id="submit"
              >
                <!-- <ProgressSpinner 
                  v-if="isLoading"
                  style="width: 20px; height: 20px; stroke: white"
                  strokeWidth="5"
                /> -->
                <div>Reset</div>
              </button>
            </div>
          </form>

          <p class="font-medium float-left">
            Want to go back ?
            <span class="text-cyan">Click</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ProgressSpinner from "primevue/progressspinner";
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    // ProgressSpinner,
  },
};
</script>
<style lang="scss">
@keyframes p-progress-spinner-color {
  100%,
  0% {
    stroke: #ffffff;
  }
  40% {
    stroke: #ffffff;
  }
  66% {
    stroke: #ffffff;
  }
  80%,
  90% {
    stroke: #ffffff;
  }
}
</style>
