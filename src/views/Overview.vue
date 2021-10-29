<template>
    <div id="main" class="relative">
     <Header />
     <Toast class="custom"/>
      <Footer /> 
     <Sidenav />
     <Spinner v-if="isSpin"/>
     <SuccessModal :isSuccess="isSuccess"/>
     <AccountForm v-if="verify"/>
     <main >
            
     <router-view />
     
     </main>
     
              
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import AccountForm from '../components/Acount-Form'; 
import Toast from 'primevue/toast';
import Spinner from '../components/Spinner.vue'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import Sidenav from '../components/Sidenav.vue';
import Footer from '../components/Footer.vue'
import SuccessModal from '@/components/SuccessModal.vue'
// import axios from 'axios'
export default {
    name: 'Overview',
    data(){
        return {
            isSuccess: {val: true},
        }
    },
    provide() {
        return {
            showSuccess: this.isSuccess
        }
    },
    computed:{
        ...mapGetters({
      authenticated: 'auth/authenticated',
    lists: 'auth/details',
    verify: 'auth/cardForm',
    isSpin: 'cards/isSpin'
    })
    },
    methods: {
        ...mapActions({
            getAllCards: 'cards/getAllCards',
            checkPay: 'auth/toggleForm'
        }),
        toggleSide(any){
            console.log(any)
            
            this.isSideCart = false
        },
        isAuthenticated(){
         if(!this.authenticated){
           this.$router.replace({
                    name: 'Login',

                })
         }
        
       },
       fetchCard() {
           this.getAllCards()
           
        },
        // isCard(){
        //         this.checkPay();         
        // }
    },
    components: {
        Header,
        Toast,
        Spinner,
         Footer,
        Sidenav,
        AccountForm,
        SuccessModal
    },
    mounted() {
        //this.isCard();
    this.isAuthenticated();
    this.fetchCard();
    this.$toast.add({severity:'success', summary: 'Welcome Back',detail:'Nice to see you again',life: 3000});
    // this.fetch()
    
     
    // this.events.forEach(event => window.addEventListener(event, this.resetTimers))
    //  this.setTimers();
    
  },
}
</script>
<style lang="scss" scoped>

//     
input {
    appearance: none !important;
}

main {
        transition: .5s ease-in-out;
        margin-top: 40px;
        margin-bottom: 50px;
    }
    @media (max-width: 768px){
        main {
            margin-top: 0;
        }
    }
@media (min-width: 769px){
    
    main {
        margin-left: 220px;
    }
  
}

</style>
