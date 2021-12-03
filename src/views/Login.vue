<template>
  <div id="sign-page">
    <!-- <Toast /> -->
    <div id="wrapper" class="h-screen">
       <div class="flex my-5 items-center select-none flex-row">
      <div>
        <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1696 0.376465L43.3767 0.376465L41.0324 7.68837L39.5413 6.09666L30.7935 14.3536L30.6941 14.3039C29.3604 11.278 23.6114 8.71428 19.0139 10.1174C13.8365 11.7091 9.13954 18.1257 12.3537 24.7909L9.86852 27.2282L9.71941 27.1288C9.0277 24.9858 7.47034 22.6251 8.0295 19.2697C8.38363 17.164 8.71499 15.3091 9.62 13.7568C12.1942 9.34225 18.2394 4.54226 25.7735 6.84278C27.8445 7.4749 29.3832 8.47801 30.9509 9.57852L35.8218 5.00236C36.2132 4.61066 37.4662 3.71739 37.0644 3.36092L35.8715 1.96817V1.91843L43.1696 0.376465Z" fill="#00C2FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1013 1.37125C26.5313 1.27591 30.1017 2.86969 33.2288 5.05207L32.3839 5.94741L30.8431 7.39818C29.1408 6.4759 27.5461 5.55777 25.3757 5.00233C16.336 2.72254 9.19117 9.4044 7.085 15.3982C6.57968 16.8365 6.5714 18.366 6.28975 20.1236C5.93975 22.3101 7.05186 25.3982 7.68143 26.8386L8.52639 28.48L6.14064 30.7184L5.99153 30.6189L4.64954 28.1318C4.08975 26.8166 3.65702 25.4508 3.35726 24.0531C1.01707 13.6116 8.28615 5.51632 14.8884 2.71425C16.1558 2.17954 17.6055 1.86658 19.0552 1.57021L21.1013 1.37125Z" fill="#00C2FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.8514 9.97656C38.3733 10.4781 38.6508 11.2905 38.9946 11.9662C40.9495 15.8149 41.662 21.7299 39.9886 26.4905C37.1121 34.6812 27.3847 42.3952 15.7832 38.2791C13.9545 37.6304 12.0555 36.8491 10.7632 35.6428L13.1986 33.3631C14.7912 34.2169 16.3196 35.1309 18.3181 35.6428C26.5688 37.7859 32.8624 32.7413 35.6644 27.9745C36.5529 26.4677 38.1496 22.5962 37.7023 19.9164C37.4082 18.1237 37.373 16.5444 36.8076 15.0916L35.4656 12.2066L37.8514 9.97656Z" fill="#00C2FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2009 11.4189C24.7216 11.3526 26.7014 12.4448 28.4079 14.1546C28.7952 14.5422 29.3585 14.9836 29.5014 15.6054L26.9665 17.9349L26.8671 17.8852C26.1899 15.7567 22.8308 14.0572 20.0081 15.1909C17.9992 16.0033 16.8312 17.6199 16.4874 20.1152C16.0235 23.4043 19.772 26.6106 23.247 25.7359C25.0695 25.2758 25.7177 24.1795 26.8257 23.0417L27.6706 23.8375L29.2611 25.5784C25.9476 30.4323 18.1276 30.3929 14.7478 25.6282C14.1616 24.7913 13.7089 23.8684 13.4058 22.8924C11.834 17.7836 15.0957 13.5246 18.4258 12.0987C19.2625 11.7546 20.2628 11.794 21.2009 11.4189Z" fill="#00C2FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1234 13.5081C34.6018 13.8355 34.7861 14.7246 35.0181 15.2987C36.4823 18.9194 36.0681 23.6055 34.4714 26.7391C32.0152 31.5619 25.4875 36.1629 17.8125 33.7443C15.9487 33.1619 14.499 32.1816 13.0907 31.1578H12.9913L6.72873 37.1267L6.82814 37.2262L8.12042 38.7184V38.7681L0.623535 40.3764L3.00928 33.0645L3.3075 33.3132L4.45068 34.6065L10.9121 28.5961C11.6556 27.9951 12.3473 26.7308 13.2978 26.4075C14.5135 29.3505 20.3391 32.0262 24.8787 30.6355C30.201 29.0023 34.7986 22.7246 31.6383 15.9205L34.1234 13.5081Z" fill="#00C2FF"/>
        </svg>
      </div>
        <p class="font-bold opacity-80 px-2">Cryptomania<br />Exchange</p>
    </div>
      <div id="sign" class="my-20 sm:my-10">
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
                  // duration: 0
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
