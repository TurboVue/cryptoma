<template>
  <div id="sign-page" class="signup">
    <div id="wrapper" class="relative">
       <div class="flex  my-5 items-center select-none flex-row">
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
      <div id="sign" class="my-16">
        <div class="ads">
          <h3>
            You Deserve Good <br />
            Rates,
          </h3>
        </div>
        <div class="form-container">
          <h4 class="font-bold text-gray-800">Get Started Here</h4>

          <form action="#" @submit.prevent="register">
            <div class="input-box">
              <input
                v-model="user.fullname"
                type="name"
                class="bg-grey"
                name="name"
                @blur="v$.fullname.$touch"
                id="name"
                autocomplete="no"
                placeholder="Fullname"
              />
              <div class="error_box" v-if="v$.fullname.$errors.length">
                <span
                  v-for="(error, index) of v$.fullname.$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg
                    class="mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
            </div>

            <div class="input-box">
              <input
                :class="{ invalid_input: v$.email.$errors.length }"
                v-model="user.email"
                type="email"
                class="bg-grey"
                name="email"
                id="Email Address"
                autocomplete="no"
                @blur="v$.email.$touch"
                placeholder="Email Address"
              />
              <p class="text-red-500 text-tiny work">{{ errMessage ? errMessage.email[0] : '' }}</p>
              <div class="error_box" v-if="v$.email.$errors.length">
                <span
                  v-for="(error, index) of v$.email.$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg
                    class="mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
            </div>
            <div class="input-box">
              <div class="country flex items-center">
                <div class="">
                  <div
                    class="activeCode flex items-center pointer justify-center"
                  >
                    <img :src="selectedCountry.flag" class="w-6" />
                    <span class="px-1 uppercase text-tiny">{{
                      selectedCountry.name
                    }}</span>
                    <span class="text-gray-400">&#x25BE;</span>
                  </div>
                </div>

                <div>
                  <input
                    :class="{ invalid_input: v$.phone.$errors.length }"
                    v-model="user.phone"
                    type="tel"
                    class="bg-grey"
                    name="phone"
                    id="Phone number"
                    autocomplete="off"
                    @blur="v$.phone.$touch"
                    title="Please complete number"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div class="error_box" v-if="v$.phone.$errors.length">
                <span
                  v-for="(error, index) of v$.phone.$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg
                    class="mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
            </div>
            <div class="input-box">
              <div class="relative">
                <input
                  :class="{ invalid_input: v$.password.$errors.length }"
                  v-model="user.password"
                  :type="passwordType ? 'password' : 'text'"
                  class="bg-grey"
                  @blur="v$.password.$touch"
                  name="password"
                  id="password"
                  autocomplete="no"
                  placeholder="password"
                />
                <EyeIcon :show="passwordType" @click="togglePassword()" />
              </div>

              <div class="error_box" v-if="v$.password.$errors.length">
                <span
                  v-for="(error, index) of v$.password.$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg
                    class="mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
            </div>
            <div class="input-box">
              <input
                :class="{
                  invalid_input: v$.password_confirmation.$errors.length,
                }"
                v-model="user.password_confirmation"
                type="password"
                class="bg-grey"
                @blur="v$.password_confirmation.$touch"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm Password"
              />
              <div
                class="error_box"
                v-if="v$.password_confirmation.$errors.length"
              >
                <span
                  v-for="(error, index) of v$.password_confirmation
                    .$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg
                    class="mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
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
                <div v-if="isLoading">
                  <BtnSpinner />
                </div>
                <div v-else>Create Account</div>
              </button>
            </div>
          </form>

          <p class="font-medium float-left">
            Already have an account ?
            <router-link to="/login">
              <span class="text-cyan">Sign In</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script setup>
// import Menu from "primevue/menu";
import TogglePassword from "@/utils/toggle";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  numeric,
  maxLength,
  sameAs,
  helpers
} from "@vuelidate/validators";
// import axios from "axios";
// import Dropdown from "primevue/dropdown";
import { validName } from "@/utils/validate";
import { useStore } from "vuex";
import {ref, reactive, computed} from 'vue'
import User from "../models/user";
// import ProgressSpinner from "primevue/progressspinner";

  
  const isLoading = ref(false)
  // const countries = ref([])
  const errMessage = ref(null)
  const passwordType = ref(true)
  // const isShow = ref(false)
  const user = ref(new User("", "", "", "", ""))
  const selectedCountry = reactive({
        name: "Nga",
        code: "234",
        flag: "/img/ngn-icon.svg",
      })
      const password = computed(() => {return user.value.password})
  const store = useStore()
  // const toggleList = () => {
  //     isShow.value = !isShow.value;
  //   }
  const togglePassword = () => {
      
      passwordType.value = TogglePassword(passwordType.value);
    }
  // const ClickAway = () => {
  //     isShow.value = false;
  //   }
  // const isAuthenticated = () => {
  //     if (this.authenticated) {
  //       this.$router.replace({
  //         path: "/",
  //       });
  //     }
  //     //  else {}
  //   },
    const register = async () => {
      
      const result = await v$.value.$validate()
      // console.log(result);
      if (!result) {
        // notify user form is invalid
        return;
      }
      // console.log(this.user);
      isLoading.value = true;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            store.dispatch('auth/signUp', user.value)
              .then(() => {
                isLoading.value = false;
                this.$router.push({ name: "EmailVerify" });
              })
              .catch((err) => {
                isLoading.value = false

                errMessage.value = err.response.data.errors;
                console.log(Object.entries(errMessage.value))
              })
          );
        }, 1000)
      );
      // isLoading.value = !isLoading.value;
    }
    // const selectCountry = (any) => {
    //   //   console.log(any);
    //   isShow.value = !isShow.value;
    //   selectedCountry.value = any;
    // }
    // const fetchCode() {
    //   axios
    //     .get("https://restcountries.eu/rest/v2/all", {
    //       headers: {},
    //     })
    //     .then((response) => (this.countries = response.data))
    //     .catch((err) => console.log(err));
    // },
  
  
  // mounted() {
  //   // this.fetchCode();
  //   this.isAuthenticated();
  // },
  const rules = {
        fullname: {
          required,
          name_validation: {
            $validator: validName,
            $message: "Invalid format.",
          }
        },
        phone: { required, numeric, max: helpers.withMessage('Please Enter a valid phone number', maxLength(11)), min: helpers.withMessage('Please Enter a valid phone number', minLength(10)) },
        email: { required, email },
        password: { required, min: minLength(6) },
        password_confirmation: {
           required,
           sameAsPassword: helpers.withMessage('Passwords must be the same', sameAs(password))
         },
      }
   const v$ = useVuelidate(rules, user) 

</script>
<style lang="scss">
.p-dropdown {
  width: 90%;
}
.country {
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 6em 1fr;
}
.activeCode {
  border: 0.5px solid #e5e5e5;
  background-color: #f8f8f8;
  padding: 1em 1em;
  border-radius: 0.3em;
  margin: 0.5em 0;
}
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
