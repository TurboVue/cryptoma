<template>
    <div 
        id="sign-page"
        class="signup"
        
    >
        <div
            id="wrapper"
            class="relative"
        >
            <div class="logo w-16 ">
                <img
                    src="/img/logo.svg"
                    alt="logo"
                >
            </div>
            <div
                id="sign"
                class="my-16"
            >
                <div class="ads">
                    <h3>You Deserve Good
                        <br /> Rates,</h3>
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
                                @blur="v$.user.fullname.$touch"
                                id="name"
                                autocomplete="no"
                                placeholder="Fullname"
                            >
                             <div class="error_box" v-if="v$.user.fullname.$errors.length">
              <span
                v-for="(error, index) of v$.user.fullname.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
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
                            :class="{ invalid_input: v$.user.email.$errors.length }"
                                v-model="user.email"
                                type="email"
                                class="bg-grey"
                                name="email"
                                id="Email Address"
                                autocomplete="no"
                                @blur="v$.user.email.$touch"
                                placeholder="Email Address"
                            />
                            <div class="error_box" v-if="v$.user.email.$errors.length">
              <span
                v-for="(error, index) of v$.user.email.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
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
                     <div  class="input-box">
                        <div class=" country flex items-center">
                            <div class="">
                                <div class="activeCode flex items-center pointer justify-center">
                                    <img :src="selectedCountry.flag" class="w-6 " />
                                     <span class="px-1 uppercase text-tiny">{{selectedCountry.name}}</span>
                                     <span class="text-gray-400">&#x25BE;</span>
                                </div> 
                           </div>
                        
                <div>
                <input
                    :class="{ invalid_input: v$.user.phone.$errors.length }"
                    v-model="user.phone"
                    type="tel"
                    class="bg-grey"
                    name="phone"
                    id="Phone number"
                    autocomplete="off"
                    @blur="v$.user.phone.$touch"
                    title="Please complete number"
                    placeholder="Phone number"
                />
                
            </div>
            </div>
                <div class="error_box" v-if="v$.user.phone.$errors.length">
              <span
                v-for="(error, index) of v$.user.phone.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
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
                    :class="{ invalid_input: v$.user.password.$errors.length }"
                        v-model="user.password"
                        :type="passwordType ? 'password' : 'text'"
                        class="bg-grey "
                        @blur="v$.user.password.$touch"
                        name="password"
                        id="password"
                        autocomplete="no"
                        placeholder="password"
                    >
                       <EyeIcon :show="passwordType" @click="togglePassword()"/>
                    </div>
                    
                    <div class="error_box" v-if="v$.user.password.$errors.length">
              <span
                v-for="(error, index) of v$.user.password.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
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
                    :class="{ invalid_input: v$.user.password_confirmation.$errors.length }"
                        v-model="user.password_confirmation"
                        type="password"
                        class="bg-grey"
                        @blur="v$.user.password_confirmation.$touch"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Confirm Password"
                    />
                    <div class="error_box" v-if="v$.user.password_confirmation.$errors.length">
              <span
                v-for="(error, index) of v$.user.password_confirmation.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
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
                        class="bg-cyan text-base flex flex-row justify-center items-center font-medium text-white"
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

                <p class="font-medium float-left">Already have an account ?
                    <router-link to="/login">
                        <span class=" text-cyan ">Sign In</span>
                    </router-link>
                </p>

                </div>
                </div>
                </div>
                </div>
</template>
<script>
// import Menu from "primevue/menu";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, numeric, maxLength } from "@vuelidate/validators";
import axios from "axios";
// import Dropdown from "primevue/dropdown";
import { validName } from "@/utils/validate";
import {mapActions, mapGetters} from 'vuex' 
import User from "../models/user";
// import ProgressSpinner from "primevue/progressspinner";
export default {
  name: "Login",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      isLoading: false,
      countries: [],
      passwordType: true,
      isShow: false,
      user: new User("","","","",""),
      selectedCountry: {
        name: "Nga",
        code: "234",
        flag: "/img/ngn-icon.svg",
      },
    };
  },
  computed: {
      ...mapGetters({
            message : 'auth/message',
            errors: 'auth/errors',
            authenticated : 'auth/authenticated'
        })
  },
  methods: {
    toggleList() {
      this.isShow = !this.isShow
    },
    ...mapActions({
            signUp: 'auth/signUp',
            
        }),
        togglePassword(){
            this.passwordType = this.TogglePassword(this.passwordType)
        },
        ClickAway(){
            this.isShow = false;
            
        },
        isAuthenticated(){
         if(this.authenticated){
           this.$router.replace({
                    path: '/',

                })
         }
        //  else {}
       },
     register(){
        this.isLoading = true;
        console.log(this.user)
           this.signUp(this.user).then(() => this.isAuthenticated()).catch(() => {
                 console.log('failed')
             })
            this.isLoading = !this.isLoading;
    },
    selectCountry(any) {
    //   console.log(any);
      this.isShow = !this.isShow
       this.selectedCountry = any
    },
    async fetchCode() {
      axios
        .get("https://restcountries.eu/rest/v2/all", {
  headers: {
  }
})
        .then(response => (this.countries = response.data))
        .catch(err => console.log(err));
    },
  },
  components: {
    // ProgressSpinner,
  },
  mounted() {
    this.fetchCode();
    this.isAuthenticated()
  },
  validations() {
    return {
      user: {
        fullname: {
          required,
          name_validation: {
            $validator: validName,
            $message: "Invalid format.",
          },
        },
        
        phone: { required, numeric, max: maxLength(11) },
        email: { required, email },
        password: { required, min: minLength(6) },
        password_confirmation: { required }
      },
    };
  },
};
</script>
<style lang="scss" >
.p-dropdown {
    width: 90%;
}
.country {
    display: grid;
    grid-gap: .5em;
    grid-template-columns: 6em 1fr;
}
.activeCode {
    border: .5px solid #E5E5E5;
    background-color: #f8f8f8;
    padding: 1em 1em;
    border-radius: .3em;
    margin: .5em 0;
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