<template>
    <div id="Giftcard-page" class="flex-grow md:py-2 py-10 px-6 md:px-2">
        <div class="flex flex-row justify-between items-center mx-4">
            <div class=" my-1">
                <a href="#" class="py-2 text-gray-600 text-tiny flex items-center font-medium uppercase "><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.707 18.707C11.5195 18.8946 11.2652 19 11 19C10.7349 19 10.4806 18.8946 10.293 18.707L4.29303 12.7016C4.10556 12.5139 4.00024 12.2594 4.00024 11.994C4.00024 11.7286 4.10556 11.474 4.29303 11.2863L10.293 5.28096C10.4816 5.09864 10.7342 4.99776 10.9964 5.00004C11.2586 5.00232 11.5094 5.10758 11.6948 5.29316C11.8803 5.47873 11.9854 5.72977 11.9877 5.9922C11.99 6.25463 11.8892 6.50746 11.707 6.69623L7.41403 10.9931H19C19.2652 10.9931 19.5196 11.0985 19.7071 11.2862C19.8947 11.4739 20 11.7285 20 11.994C20 12.2594 19.8947 12.514 19.7071 12.7017C19.5196 12.8894 19.2652 12.9949 19 12.9949H7.41403L11.707 17.2917C11.8945 17.4794 11.9998 17.7339 11.9998 17.9993C11.9998 18.2647 11.8945 18.5193 11.707 18.707Z" fill="#192434"/>
                </svg>
                </span> <span class="font-bold sm:hidden px-1">Back</span>  </a>
            </div>
            <div class="">
                <h2 class="text-lg work font-semibold p-ripple" v-ripple>Giftcard</h2>
            </div>
        </div>
     <div class=" ">
        <input id="input1" autocomplete="off" @input="filter" class="w-full  m-4 border-cyan-200 border px-4 py-4 work rounded-md focus:border-cyan-500 focus:shadow-outline outline-none" type="text" placeholder="Enter your giftcard" />
    </div>
    <div v-if="skeleton" class="card-container lg:grid grid-cols-3 gap-4 sm:grid-cols-2 flex flex-wrap">
        <Skeleton :style="{maxWidth: '12em'}" width="100%" height="12em" v-for="i in 12" :key="i"></Skeleton>
        </div>
    <div class="card-container lg:grid grid-cols-3 sm:grid-cols-2 flex flex-wrap">
        <template v-if="showAll">
            <Card v-for="(card, index) in names" :key="index" @toggleSide = 'toggleSide' :card = 'card' :index = 'index'/>
        
        </template>
        <template v-if="!showAll">
        
                <Card v-for="(card, index) in searchCards" :key="index" @toggleSide = 'toggleSide' :card = 'card' :index = 'index'/>
        </template>
        </div>
        <!-- <ScrollPanel style="width: 100%; height: 50vh; z-index:5; position:fixed"> -->
   <!-- <Upload :class=" isSideCart ? 'slide-out relative' : ' relative' " @closeSide = 'closeSide' :name="selectedCard" :types = "types"/> -->
   <!-- </ScrollPanel> -->
    </div>
    
</template>
<script>
import Skeleton from 'primevue/skeleton';
import Card from '../components/Card'
// import ScrollPanel from 'primevue/scrollpanel';
// import Upload from '../components/Upload.vue';
// import axios from 'axios'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
// import InputText from 'primevue/inputtext';
export default {
    name: 'Giftcard',
    data(){
        return {
            cards: null,
            showAll: true,
            searchCards: [],
            selectedCard: 'card',
            isSideCart: false,
            types: [],
            skeleton: false
        }
    },
    
    computed: {
        ...mapGetters({
       allcards : 'cards/allCards',
       user: 'auth/user',
       names: 'cards/allNames'
    }),
     
    },
    methods: {
        toggleSide(any){
            console.log(any)
            this.selectedCard = any
            this.isSideCart = true
            this.types = this.allcards.filter( card => card.card.name.toLowerCase().indexOf(any.toLowerCase()) >= 0);
            console.log(this.types)
        },
        
        closeSide(){
            this.isSideCart = false
        },
        ...mapActions({
            getAllCards: 'cards/getAllCards',
            getAllNames: 'cards/getNames',
        }),
        filter(e){
            if(e.target.value === '' ){
                this.showAll = true
            }
            else {
                this.showAll = false
                console.log(e.target.value)
          this.searchCards = this.names.filter( card => card.card.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0)
        
            }
            
        }, 
              
         async fetchName(){
             this.skeleton = !this.skeleton
            await this.getAllNames().then(() => this.skeleton = !this.skeleton)
                 .catch((error) => {
                     this.$toast.add({severity:'error', summary: 'Check Connection'});
                     console.log(error)
                 })
             
                 
          }
    },
    mounted(){
        this.fetchName();
        
    },
    components: {
    //     InputText,
    //    // Upload,
    //     ScrollPanel,
        Card,
        Skeleton
    }
}
</script>
<style lang="scss" scoped>

#input1 {
    max-width: 350px;
}
@media(max-width: 425px){
    #input1 {
    width: 90%;
}
  
}
</style>
