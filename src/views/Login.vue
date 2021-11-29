<template>
  <div id="sign-page">
    <!-- <Toast /> -->
    <div id="wrapper" class="h-screen">
      <div class="logo w-16">
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <div id="sign" class="my-10">
        <div class="ads">
          <h3>
            Nice To See You <br />
            Again,
          </h3>
        </div>
        <div class="form-container md:my-10">
          <h4 class="font-bold text-gray-800">Welcome Back</h4>
          <p class="text-red-500 text-thin">{{ errMessage }}</p>
          <form action="#" @submit.prevent="signIn">
            <div class="input-box">
              <input
                type="email"
                class="bg-grey"
                name="email"
                v-model="user.email"
                id="email"
                
                @blur="v$.user.email.$touch"
                placeholder="Email address"
              />
               <div class="error_box" v-if="v$.user.email.$errors.length">
              <span class="items-center flex flex-shrink-0 text-red-500">
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>Enter a valid email.</p>
              </span>
            </div>
            </div>

            <div class="input-box relative">
              <input
                :type="passwordType ? 'password' : 'text'"
                class="bg-grey"
                name="password"
                v-model="user.password"
                id="password"
                required
                placeholder="password"
              />
              <EyeIcon :show="passwordType" @click="togglePassword" />
              
            </div>
            <div class="input-box submit">
              <button
              :disabled = "isSpin"
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
                <div v-if="isSpin">
                  <BtnSpinner />
                </div>
                <div v-else>Login</div>
              </button>
            </div>
          </form>
          <div class="direction">
            <p class="forgot-password font-medium text-cyan">
              <router-link to="/forgotpassword">Forgot Password</router-link>
            </p>
            <p class="font-medium float-left">
              Don't have an account ?
              <router-link to="/createaccount"
                ><span class="text-cyan">Sign Up</span></router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import User from "../models/user";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { ElNotification } from "element-plus";
import {ref, computed} from "vue"
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "Login",
  setup(){
    const user = ref(new User("", ""))
    const passwordType = ref(true)
    const isSpin = ref(false)
    const store = useStore()
    const router = useRouter()
    const errMessage = ref("")
    const signIn = () => {
      console.log('me')
      isSpin.value = true;
      store.dispatch('auth/USER_LOGIN', user.value).then(() => {
        isSpin.value = false;
        ElNotification({
                  title: "Login Successful",
                  type: "success",
                  message: "",
                  duration: 0
                });
        router.replace({ path: "/" });
      }).catch((err) => {
          isSpin.value = false;
          errMessage.value = err.response.data.message;
          console.log(this.message);
        })
    }
    const togglePassword = () => {
      passwordType.value = !passwordType.value
    }
    return {
      user,
      v$: useVuelidate(),
      passwordType,
      isSpin,
      signIn,
      togglePassword,
      // message: computed(() => store.getters['auth/message']),
      errMessage,
      authenticated: computed(() => store.getters['auth/authenticated'])
    }
  },
 
  validations() {
    return {
      user: {
        email: {
          required,
          email,
        }
      },
    };
  },
  // created() {
  //   this.isAuthenticated();
  // },
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
