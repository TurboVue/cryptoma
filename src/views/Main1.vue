<template>
   
            <div class="flex-grow py-14 md:py-2 px-6">
                <h2 class="text-lg pt-4  work font-bold capitalize">Hello, {{name}}</h2>
                <p class="text-grey-600 font-medium">Lets Make Trading easy for you</p>
                <div class="card h-full flex flex-row flex-nowrap py-4 justify-between bg-white my-8 px-8 border rounded-md items-center w-full sm:justify-center sm:flex-wrap sm:text-center">
                    <div class="flex-grow md:flex-none flex flex-col sm:items-center sm:justify-center md:order-last">
                        <h3 class="text-lg font-bold my-4   text-grey-800">Trade your Giftcard</h3>
                        <router-link to="/giftcard" class=" lg:px-10 lg:py-2 px-14 py-3 text-center trade font-medium bg-cyan-500 text-tiny rounded-md text-white border focus:outline-none transition duration-500 hover:bg-cyan-400">Trade Now</router-link>
                    </div>
                    <div class="trade-img">
                        <img src="/img/trade-giftcard.svg" alt="">
                    </div>
                </div>
               
                 <div class="card flex flex-row bg-card-blue flex-nowrap py-4 justify-between bg-white my-8 px-8 rounded-md items-center w-full sm:justify-center sm:flex-wrap sm:text-center">
                    <div class="flex-grow md:flex-none flex flex-col sm:items-center sm:justify-center md:order-last">
                        <h3 class="text-lg font-bold my-4 ">Sell Your Bitcoin</h3>
                        <router-link to="/tradebitcoin" class=" px-14 lg:px-10 lg:py-2 text-center py-3 trade font-medium bg-cyan-500 text-tiny rounded-md text-white border focus:outline-none transition duration-500 hover:bg-cyan-400">Trade Now</router-link>
                    </div>
                    <div class="trade-img">
                        <img src="/img/trade-bitcoins.svg" alt="">
                    </div>
                </div>
            </div>
       
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Main',
  data(){
      return {
          isUser : this.user 
      }
  },
  computed: {
      ...mapGetters({
          user: 'auth/user'
      }),
      name(){
          if(this.user == null || undefined){
              return 'user'
          }
          else {
              return this.user.fullname
          }
      }
  },
  methods: {
     
  },
  inject: ["mq"]
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
#main {
    font-family: 'DM Sans', sans-serif;

}
.trade {
    max-width: 14em;
}
.card {
    
    height: 100%;
}
.bg-card-blue {
    background-color: #D8E6FF;
}
</style>
