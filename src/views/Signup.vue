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
                                id="name"
                                autocomplete="no"
                                placeholder="Fullname"
                            >
                             <p class="text-red-500 text-sm" >{{errors.fullname[0] || ''}}</p>
                        </div>
                       
                        <div class="input-box">
                            <input
                                v-model="user.email"
                                type="email"
                                class="bg-grey"
                                name="email"
                                id="Email Address"
                                autocomplete="no"
                                placeholder="Email Address"
                            />
                            <p class="text-red-500 text-sm" >{{errors.email[0]}}</p>
                        </div>
                        <div v-click-away="ClickAway" class="input-box">
                        <div class=" country flex items-center">

                            <div class="relative">
                                <div
                                
                                    
                                    class="activeCode flex items-center pointer justify-center"
                                ><img :src="selectedCountry.flag" class="w-6 " /> <span class="px-1 uppercase text-tiny">{{selectedCountry.name}}</span><span class="text-gray-400">&#x25BE;</span> </div> 
                           
                           
                </div>
                <div>
                <input
                    v-model="user.phone"
                    type="tel"
                    class="bg-grey"
                    name="phone"
                    id="Phone number"
                    autocomplete="off"
                    title="Please complete number"
                    placeholder="Phone number"
                />
                
</div>
                </div><p class="text-red-500 text-sm" >{{errors.phone[0]}}</p></div>
                <div class="input-box">
                    <input
                        v-model="user.password"
                        type="password"
                        class="bg-grey"
                        name="password"
                        id="password"
                        autocomplete="no"
                        placeholder="password"
                    >
                    <p class="text-red-500 text-sm" >{{errors.password[0]}}</p>
                </div>
                <div class="input-box">
                    <input
                        v-model="user.password_confirmation"
                        type="password"
                        class="bg-grey"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Confirm Password"
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
import axios from "axios";
// import Dropdown from "primevue/dropdown";
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex' 
import User from "../models/user";
import ProgressSpinner from "primevue/progressspinner";
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      countries: [],
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