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
                                type="name"
                                class="bg-grey"
                                name="name"
                                id="name"
                                autocomplete="no"
                                placeholder="Fullname"
                            > <p class="text-red-500 text-sm" >{{errors.fullname[0]}}</p>
                        </div>
                       
                        <div class="input-box">
                            <input
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
                                
                                    @click="toggleList"
                                    class="activeCode flex items-center pointer justify-center"
                                ><img :src="selectedCountry.flag" class="w-6 " /> <span class="px-1 uppercase text-tiny">{{selectedCountry.name}}</span><span class="text-gray-400">&#x25BE;</span> </div> 
                             <ul v-if="isShow" class="codes rounded border shadow bg-white w-64 p-2  overflow-hidden">
                                    <li class="px-2 py-2 hover:bg-gray-100 flex items-center relative cursor-pointer" v-for="(code, index) in countries" @click="selectCountry({
                                        name: code.alpha3Code,
                                        code: code.callingCodes[0],
                                        flag: code.flag
                                    })" :key="index">
                                    <img :src="code.flag" class="w-6 " />
                                        <div class="font-medium px-2 text-tiny text-gray-800">{{code.name}} </div>
                                        <div class="font-medium text-sm px-2 absolute bottom-0 right-0 text-gray-400 right-0">+{{code.callingCodes[0]}}</div>
                                    </li>
                                </ul>
                            <!-- <Dropdown
                                v-model="selectedCountry"
                                :options="countries"
                                optionLabel="name"
                                :filter="true"
                                placeholder="Select a Country"
                                :showClear="true"
                            >
                                <template #value="slotProps">
                                    <div
                                        class="country-item country-item-value flex items-center"
                                        v-if="slotProps.value"
                                    >
                                        <img :src="slotProps.value.flag" class="w-8 px-2" />
                                        <div>{{slotProps.value.name}}</div>
                        </div>
                        <span v-else>
                            {{slotProps.placeholder}}
                        </span>
                        </template>
                        <template #option="slotProps">
                            <div
                                class="country-item flex items-center"
                                @click="selectCountry({
                                        name: slotProps.option.alpha3Code,
                                        code: slotProps.option.callingCodes[0],
                                        flag: slotProps.option.flag
                                    })"
                            >
                                <img
                                    :src="slotProps.option.flag"
                                    class="w-8 px-2"
                                />
                                <div>{{slotProps.option.name}}</div>
                </div>
                </template>
                </Dropdown> -->
                </div>
                <div>
                <input
                    type="tel"
                    class="bg-grey"
                    name="phone"
                    id="Phone number"
                    autocomplete="off"
                    
                    title="Please complete number"
                    :value = "'+' + selectedCountry.code"
                    placeholder="Phone number"
                />
                
</div>
                </div><p class="text-red-500 text-sm" >{{errors.phone[0]}}</p></div>
                <div class="input-box">
                    <input
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
                        type="password"
                        class="bg-grey"
                        name="confirmpassword"
                        id="confirmpassword"
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
import ProgressSpinner from "primevue/progressspinner";
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      countries: [],
      isShow: false,
      details: {
          fullname: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: ""
      },
      selectedCountry: {
        name: "Nga",
        code: "234",
        flag: "https://www.countryflags.io/ng/flat/64.png",
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
    register(event){
        this.isLoading = !this.isLoading;
        const {name,email,phone,password,confirmpassword} = Object.fromEntries(new FormData(event.target));
         this.details.fullname = name;
         this.details.email = email;
         this.details.phone = phone;
         this.details.password = password;
         this.details.password_confirmation = confirmpassword
         console.log(this.details)
         this.signUp(this.details).then(this.isAuthenticated()).catch(() => {
                     
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