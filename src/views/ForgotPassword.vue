<template>
    <div
        id="sign-page"
        class="signup"
    >
       <div
            id="wrapper"
            class="h-screen"
        >
            <div class="logo w-16 ">
                <img
                    src="/img/logo.svg"
                    alt="logo"
                >
            </div>
            <div
                id="sign"
                class="my-10"
            >
                <div class="ads">
                    <h3>No Need to be
                        <br />
                        Afraid,</h3>
                </div>
                <div class="form-container md:my-10">
                    <h4 class="font-bold text-gray-800 my-2">Forgot your password</h4>
                    <p class="font-regular text-gray-400">Enter the email associated with your account and we'll send an email to reset your password</p>
                    <form action="#">
                        
                        <div class="input-box">
                            <input
                                type="email"
                                class="bg-grey"
                                name="Email Address"
                                id="Email Address"
                                placeholder="Email Address"
                            />
                        </div>
                        
                        <div class="input-box submit">

                            <button
                                type="submit"
                                class="bg-cyan text-base flex flex-row justify-center items-center font-medium text-white"
                                name="submit"
                                id="submit"
                            >
                                <ProgressSpinner
                                    v-if="isLoading"
                                    style="width:20px;height:20px; stroke:white "
                                    strokeWidth="5"
                                />
                                <div v-else>Send</div>
                                </button>
                        </div>
                    </form>

                    <p class="font-medium float-left">Want to go back ?
                        <span class=" text-cyan ">Click</span>
                    </p>

                </div>
                </div>
                </div>
                </div>
</template>
<script>
import ProgressSpinner from "primevue/progressspinner";
export default {
  name: "Login",
  data() {
    return {
      isLoading: true
    };
  },
  components: {
    ProgressSpinner
  }
};
</script>
<style lang="scss" >
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