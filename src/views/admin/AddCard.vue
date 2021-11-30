<template>
    <div   class="flex items-center h-full justify-center">
        <div id="overlay">
            <form v-click-away="ClickAway" class="form">
                <div class="input_box">
                    <label
                        for="bank"
                        class="font-medium"
                    >Card Name</label>
                        <input
                            id="number"
                            v-model="name"
                            class="w-full border-grey-400 border text-tiny px-4 py-2 rounded-sm focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                            type="text"
                            name="accnumber"
                            required
                        />
                </div>
        <div class="input_box">
            <label
                for="number"
                class="font-medium"
            >Card type</label>
                <input
                    id="number"
                    v-model="type"
                    class="w-full border-grey-400 border text-tiny px-4 py-2 rounded-sm focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                    type="text"
                    name="type"
                    required
                />
        </div>
        <div class="input_box">
            <label
                for="name"
                class="font-medium capitalize"
            >Price Range</label>
                <input
                    id="priceRange"
                    v-model="priceRange"
                    class="w-full border-grey-400 border uppercase text-tiny px-4 py-2 rounded-sm focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                    type="text"
                    name="name"
                />
        </div>
        <div class="input_box">
            <label
                for="name"
                class="font-medium capitalize"
            >Rate</label>
                <input
                    id="name"
                    v-model="rate"
                    class="w-full border-grey-400 border uppercase text-tiny px-4 py-2 rounded-sm focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                    type="text"
                    name="rate"
                />
        </div>
        <button
            class="mx-2 px-4 py-2 cursor-pointer text-tiny rounded text-white bg-cyan-500 shadow focus:outline-none hover:bg-cyan-400"
            @click.prevent="addCard()"
        >Save</button>
            </form>
    </div>

    </div>
</template>
<script>
import { mapActions } from 'vuex'
// import {AddNewCard} from "@/utils/cards";

export default {
    name: 'AddCard',
    
    data() {
        return {
            
            name: '',
            type: '',
            priceRange: '',
            rate: ''

        }    },
    computed: {

    },
    // inject: ['isShowForm'],
    mounted() {
        // this.fetchBanks();
    },
    methods: {
        ClickAway() {
            this.$router.go(-1) 
        },
        ...mapActions({
            checkPay: 'auth/toggleForm'
        }),
      addCard(){
          
           this.$store.dispatch('data/addCard', {'name':this.name, 'type':this.type, 'priceRange':this.priceRange, 'rate':this.rate})
           .then(() => {
               this.$store.dispatch('data/getAllCards').then(() => this.$router.push({'name': 'Cards'}))
           })
           .catch(() => this.$toast.add({ severity: 'error', summary: 'Something Went Wrong' }))
      }
        
    },
}
</script>
<style lang="scss" scoped>
#overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 300;
  background-color: #00000026;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}
.form {
  max-width: 500px;
  width: 90%;
  padding: 1em;
  border-radius: 0.5em;
  background-color: white;
}
.input_box {
  margin: 1.5em 0;
  input,
  .input {
    height: 60px;
    color: grey;
    border-radius: 0.4em;
    font-size: 1.2rem;
    font-weight: 300;
  }
}
</style>
