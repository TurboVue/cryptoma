<template>
    <div id="Giftcard-page" class="flex-grow md:py-2 md:px-2">
        <div class="flex flex-row  justify-between items-center ">
            <div class=" my-1">
                <GoBack />
            </div>
            <div class="">
                <h2  class="text-lg work font-semibold p-ripple">Giftcard</h2>
            </div>
        </div>
     <div class="flex justify-between items-center my-4">
        <!-- <input id="input1" autocomplete="off" class="w-full order-first md:order-last border-cyan-200 border px-4 py-3 work rounded-md focus:border-cyan-500 focus:shadow-outline outline-none" type="text" placeholder="Enter your giftcard" @input="filter" />
        <button class="bg-cyan font-medium rounded-md flex text-white py-3 mx-2 px-6" @click="AddCard"><span class="pr-2"><i class="pi pi-plus"></i></span ><span class="hidden sm:block"> Add Card</span></button> -->
    </div>
    <!-- <div v-if="skeleton" class="card-container sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4  flex flex-wrap">
        <Skeleton v-for="i in 12" :key="i" :style="{maxWidth: '12em'}" width="100%" height="12em"></Skeleton>
        </div> -->
    <div class="card-container gap-4 my-2 mt-4 sm:grid md:grid-cols-5 sm:grid-cols-2 flex flex-wrap">
        <template v-if="showAll">
            <Card v-for="(card, index) in cards" :key="index" :card = 'card' :index = 'index' @toggleSide = 'toggleSide'/>
        
        </template>
        <template v-if="!showAll">
        
                <Card v-for="(card, index) in searchCards" :key="index" :card = 'card' :index = 'index' @toggleSide = 'toggleSide'/>
        </template>
        </div>
        <router-view />
        <!-- <ScrollPanel style="width: 100%; height: 50vh; z-index:5; position:fixed"> -->
   <!-- <Upload :class=" isSideCart ? 'slide-out relative' : ' relative' " @closeSide = 'closeSide' :name="selectedCard" :types = "types"/> -->
   <!-- </ScrollPanel> -->
   
    </div>
    
</template>
<script>

import Card from '@/components/admin/Card.vue'
import {useStore} from 'vuex'
import {ref, computed} from 'vue'
// import ScrollPanel from 'primevue/scrollpanel';
// import Upload from '../components/Upload.vue';
// import axios from 'axios'
// import {} from 'vuex'
// import InputText from 'primevue/inputtext';
export default {
    name: 'Giftcard',
    setup(){
        const store = useStore()
        const showAll = ref(true)
        const searchCards = ref([])
        const selectedCard = ref('card')
        const skeleton = ref(false)
        const fetchNames = () => {
            store.dispatch('admin/getAllNames')
            store.dispatch('admin/getAllCards')
        }
        fetchNames()
        return {
            cards: computed(() => store.getters['admin/names']),
            showAll,
            selectedCard,
            searchCards,
            skeleton
        }
    },
    components: {
    //     InputText,
    //    // Upload,
    //     ScrollPanel,
        Card,
        // Skeleton
    },
    
    data(){
        return {
            
            isSideCart: false,
            types: [],
            // skeleton: false
        }
    },
    
    methods: {
        
        toggleSide(any){
            this.selectedCard = any
            this.isSideCart = true
            this.types = this.allcards.filter( card => card.card.name.toLowerCase().indexOf(any.toLowerCase()) >= 0);
            
        },
        AddCard(){
            this.$router.push({'name': 'AddCard'})
        },
        closeSide(){
            this.isSideCart = false
        },
         fetchName(){
             this.skeleton = !this.skeleton
            this.allCards().then(() => {this.skeleton = !this.skeleton})
                 .catch(() => {
                     this.$toast.add({severity:'error', summary: 'Check Connection'});
                    
                 })
             
                 
          }
    },
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
  .card-container{
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr)) 
  }
}
</style>
