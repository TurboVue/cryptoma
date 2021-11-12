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
                        :type="passwordType"
                        class="bg-grey "
                        @blur="v$.user.password.$touch"
                        name="password"
                        id="password"
                        autocomplete="no"
                        placeholder="password"
                    >
                        <div class="absolute inset-y-0 display flex items-center right-0 mx-2">
                             <div v-if="passwordType === 'password'" @click="togglePassword()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 9.64136C10.6696 9.64136 9.58862 10.7234 9.58862 12.0534C9.58862 13.3824 10.6696 14.4634 11.9996 14.4634C13.3296 14.4634 14.4116 13.3824 14.4116 12.0534C14.4116 10.7234 13.3296 9.64136 11.9996 9.64136ZM11.9996 15.9634C9.84262 15.9634 8.08862 14.2094 8.08862 12.0534C8.08862 9.89636 9.84262 8.14136 11.9996 8.14136C14.1566 8.14136 15.9116 9.89636 15.9116 12.0534C15.9116 14.2094 14.1566 15.9634 11.9996 15.9634Z" fill="black"/>
                                    <mask id="mask0_33437_4760" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="17">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00024 4.00024H22.0001V20.1052H2.00024V4.00024Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_33437_4760)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.56999 12.0525C5.42999 16.1615 8.56299 18.6045 12 18.6055C15.437 18.6045 18.57 16.1615 20.43 12.0525C18.57 7.94451 15.437 5.50151 12 5.50051C8.56399 5.50151 5.42999 7.94451 3.56999 12.0525ZM12.002 20.1055H11.998H11.997C7.86099 20.1025 4.14699 17.2035 2.06099 12.3485C1.97999 12.1595 1.97999 11.9455 2.06099 11.7565C4.14699 6.90251 7.86199 4.00351 11.997 4.00051C11.999 3.99951 11.999 3.99951 12 4.00051C12.002 3.99951 12.002 3.99951 12.003 4.00051C16.139 4.00351 19.853 6.90251 21.939 11.7565C22.021 11.9455 22.021 12.1595 21.939 12.3485C19.854 17.2035 16.139 20.1025 12.003 20.1055H12.002Z" fill="black"/>
                                    </g>
                                </svg>
                            </div>
                            <div v-else @click="togglePassword()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76082 15.6172C9.56882 15.6172 9.37682 15.5442 9.23082 15.3972C8.49282 14.6602 8.08582 13.6802 8.08582 12.6382C8.08582 10.4782 9.84182 8.72119 11.9998 8.72119C13.0378 8.72119 14.0458 9.14019 14.7648 9.87119C15.0548 10.1672 15.0518 10.6412 14.7558 10.9312C14.4608 11.2232 13.9868 11.2182 13.6958 10.9242C13.2568 10.4772 12.6388 10.2212 11.9998 10.2212C10.6688 10.2212 9.58582 11.3052 9.58582 12.6382C9.58582 13.2792 9.83682 13.8832 10.2908 14.3372C10.5838 14.6302 10.5838 15.1042 10.2918 15.3972C10.1448 15.5442 9.95282 15.6172 9.76082 15.6172Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5674 16.4912C12.2124 16.4912 11.8964 16.2372 11.8304 15.8752C11.7564 15.4682 12.0264 15.0772 12.4344 15.0032C13.4144 14.8252 14.1904 14.0472 14.3664 13.0662C14.4404 12.6592 14.8304 12.3912 15.2374 12.4612C15.6454 12.5342 15.9164 12.9242 15.8434 13.3322C15.5564 14.9252 14.2944 16.1892 12.7024 16.4792C12.6574 16.4872 12.6114 16.4912 12.5674 16.4912Z" fill="black"/>
                                    <mask id="mask0_33437_4845" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="17" height="15">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.62439H18.0862V18.7225H2V4.62439Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_33437_4845)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.6545 18.7225C6.4925 18.7225 6.3295 18.6695 6.1915 18.5625C4.5005 17.2345 3.0715 15.2875 2.0615 12.9335C1.9795 12.7435 1.9795 12.5295 2.0615 12.3405C3.0825 9.97652 4.5205 8.01952 6.2205 6.68252C9.6865 3.93952 14.3005 3.93052 17.8015 6.70252C18.1265 6.95952 18.1815 7.43152 17.9245 7.75652C17.6665 8.07952 17.1965 8.13652 16.8705 7.87852C13.9045 5.53052 10.0835 5.53852 7.1495 7.86052C5.7135 8.99052 4.4805 10.6365 3.5705 12.6385C4.4715 14.6285 5.6935 16.2645 7.1185 17.3825C7.4445 17.6385 7.5005 18.1105 7.2445 18.4355C7.0965 18.6235 6.8765 18.7225 6.6545 18.7225Z" fill="black"/>
                                    </g>
                                    <mask id="mask1_33437_4845" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="14" height="13">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.71753 8.74121H22.0001V20.6894H8.71753V8.74121Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask1_33437_4845)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 20.6894C11.0632 20.6894 10.1312 20.5374 9.23116 20.2384C8.83816 20.1074 8.62516 19.6824 8.75616 19.2894C8.88716 18.8954 9.31016 18.6864 9.70516 18.8144C10.4522 19.0634 11.2242 19.1894 12.0002 19.1894C15.4282 19.1894 18.5612 16.7474 20.4302 12.6364C19.9742 11.6374 19.4432 10.7324 18.8492 9.94242C18.6002 9.61142 18.6662 9.14042 18.9972 8.89142C19.3272 8.64242 19.7982 8.71042 20.0472 9.04042C20.7712 10.0014 21.4072 11.1124 21.9382 12.3384C22.0212 12.5284 22.0212 12.7444 21.9382 12.9334C19.8422 17.7904 16.1272 20.6894 12.0002 20.6894Z" fill="black"/>
                                    </g>
                                    <mask id="mask2_33437_4845" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="18" height="18">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36353 4.00037H20.637V21.2734H3.36353V4.00037Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask2_33437_4845)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11328 21.2734C3.92128 21.2734 3.72928 21.2004 3.58328 21.0534C3.29028 20.7604 3.29028 20.2864 3.58328 19.9934L19.3573 4.21938C19.6503 3.92638 20.1243 3.92638 20.4173 4.21938C20.7103 4.51238 20.7103 4.98738 20.4173 5.28038L4.64328 21.0534C4.49728 21.2004 4.30528 21.2734 4.11328 21.2734Z" fill="black"/>
                                    </g>
                                    </svg>
                            </div>
                           
                        </div>
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
                        <ProgressSpinner
                            v-if="isLoading"
                            style="width:20px;height:20px; stroke:white "
                            strokeWidth="5"
                        />
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
import ProgressSpinner from "primevue/progressspinner";
export default {
  name: "Login",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      isLoading: false,
      countries: [],
      passwordType: 'password',
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
            this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
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
    ProgressSpinner,
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