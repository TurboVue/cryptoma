<template>
    <div id="sign-page">
        <Toast />
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
                    <h3>Nice To See You <br /> Again,</h3>
                </div>
                <div class="form-container md:my-10">
                    <h4 class="font-bold text-gray-800">Welcome Back</h4>
                    <p class="text-red-500 text-sm" >{{message}}</p>
                    <form action="#" @submit.prevent="logIn">
                        <div class="input-box">
                            <input
                                type="email"
                                class="bg-grey"
                                name="email"
                                v-model="user.email"
                                id="email"
                                required
                                placeholder="Email address"
                            >
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
                            <EyeIcon :show="passwordType" @click="togglePassword()"/>
                        </div>
                        <div class="input-box submit">

                            <button
                                type="submit"
                                class="bg-cyan text-base flex flex-row justify-center items-center font-medium text-white"
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
                        <p class="forgot-password  font-medium text-cyan"><router-link to="/forgotpassword">Forgot Password</router-link></p>
                        <p class="font-medium float-left">Don't have an account ?
                            <router-link to="/createaccount"><span class=" text-cyan ">Sign Up</span></router-link>
                        </p>
                    </div>
                </div>
    </div>
    </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
// import axios from 'axios'
import User from "../models/user";
import Toast from 'primevue/toast';
import {mapActions} from 'vuex' 
// import ProgressSpinner from "primevue/progressspinner";
export default {
  name: "Login",
  data() {
    return {
      isSpin: false,
      passwordType: true,
      user: new User("", ""),
    };
  },
  computed: {
      ...mapGetters({
            message : 'auth/message',
            authenticated : 'auth/authenticated'
        })
  },
  methods : {
      ...mapActions({
            signIn: 'auth/USER_LOGIN'
        }),
        togglePassword(){
            this.passwordType = this.TogglePassword(this.passwordType)
        },
        isAuthenticated(){
         if(this.authenticated){
           this.$router.replace({
                    path: '/',

                })
         }
        
       },
      async logIn(){
             this.isSpin = true;
           await this.signIn(this.user).then(() => {
                this.$router.replace({path: '/' }) 
                }).catch((err) => {
                    console.log(err.response)
                     
                console.log(this.message)
            })
            this.isSpin = false;
        }
  },
  components: {
  
    Toast
  },
  mounted() {
    this.isAuthenticated();
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