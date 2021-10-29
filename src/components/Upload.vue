<template>

  <div
    id="sideDisplay"
    :class="sideClass"
  >
    <div class="flex justify-between items-center px-8 py-4 flex-row">
      <div
        class="cancel"
        @click="closeSide"
      >
        <img
          src="/img/cancel.svg"
          alt=""
        />
    </div>

    <div class="title">
      <span class="text-md font-medium">Redeem your Giftcard</span>
    </div>
    </div>
<ScrollPanel
      style="width: 100%; height: calc(85vh - 50px); z-index:5; "
      class="custom"
    >
    <div class="card_big upload bg-cyan  shadow flex flex-col mx-auto my-8 p-4 w-8/12 h-40  justify-between rounded-md">
      <div class="card-logo w-10">
        <img
          class="w-full"
          src="/img/amazon-logo.svg"
          alt=""
        />
      </div>
      <div class="card-details text-white">
        <p class=" ">{{name}}</p>
        <!-- <p class="font-medium tracking-wider">&#8358;400</p> -->
      </div>
    </div>
    
      <div class="container px-8 pb-6">

        <div class="  my-4">
          <span class="block py-1">Card Type</span>
          <div class="relative" v-click-away="ClickAway">
          <div v-if="this.types.length > 0" 
                                    @click="toggleList" class=" rounded border capitalize bg-white w-full p-2">select card type</div>
                                    <div v-else class="rounded border capitalize  bg-white w-full p-2">None</div>
          <template v-if="types">
          <ul
            v-if="isShow"
            class="codes rounded border bg-white w-full p-2 my-2  overflow-hidden"
          >
            <li
              class="px-2 py-2 hover:bg-gray-100 flex items-center relative cursor-pointer"
              v-for="(type, index) in types"
             @click="() => {
               this.isShow = !this.isShow;
               this.selectedType = type.card;
               
                            }"
              :key="index"
            >
              <div class="font-medium px-2 text-tiny text-gray-800">{{type.card.type}} </div>
              <div class="font-medium text-sm px-2 absolute bottom-0 right-0 text-gray-400 right-0">+{{type.card.rate}}</div>
              </li>
              </ul>
              
              </template>
              <template v-else>
                 <div  class="rounded border shadow bg-white w-full p-2">no types available</div>
              </template></div>
        </div>
        <span class="block ">Amount</span>
        <div class="counter inline-flex items-center">
          <div
            class="select-none border w-12 h-12 flex justify-center items-center  text-grey-600 text-lg font-medium hover:text-white cursor-pointer hover:bg-cyan-400 rounded-md"
            @click="decrease"
          >
            -
        </div>
        <h4
          v-if="show"
          @click="edit"
          class="mx-4 font-medium "
        >{{ umber }}</h4>
          <input
            v-else
            @keyup.enter="close"
            class="border  w-16 mx-4 text-center outline-none"
            type="text"
            v-model="number"
          />
          <div
            class="select-none border w-12 h-12 flex justify-center items-center  text-grey-600 text-lg font-medium hover:text-white cursor-pointer hover:bg-cyan-400 rounded-md"
            @click="increase"
          >
            +
      </div>
      </div>
      <div class="">
        <span class="block py-1">Comment</span>
        <InputText
          type="text"
          v-model="value"
          class="p-inputtext-sm font-medium"
          placeholder="eg Card Code Optional"
        />
      </div>
      <div class="my-4">
        <span class="block py-1">Upload Card or Receipt</span>
        <label
          for="file"
          class="border bg-white rounded w-4/5 h-32 flex items-center justify-center"
        >Upload</label>
          <input
            type="file"
            class="hidden"
            id="file"
            name="file"
          />
      </div>
      </div>
</ScrollPanel>
      <div class="footer px-8 bg-white w-full flex items-center justify-between">
        <div class="">
          <span class="block">You will receive</span>
          <span class="font-medium">N{{rateCalc}}</span>
        </div>
        <div>
          <button
            class="button"
            disabled="disabled"
          >Redeem</button>
        </div>
      </div>
      
      </div>
</template>
<script>
import { mapGetters } from "vuex";
import ScrollPanel from "primevue/scrollpanel";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
export default {
  name: "Upload",
  data() {
    return {
      isShow: false,
      value: 89,
      number: 50,
      show: true,
      selectedType: false,
    };
  },
  props: {
    sideClass: String,
    name: String,
    types: Array,
  },
  computed: {
    selected(){
      if(this.types.length > 0){
        return this.types[0].card.type
      }
      else{
        return 'none'
      }
    },
    rateCalc(){
      
      return this.number * (this.selectedType.rate || 1)
    },
    ...mapGetters({
      allCard: "cards/allCards",
      names: "cards/allName"
    }),
    umber() {
      return "$" + this.number;
    },
  },
  methods: {
    ClickAway(event){
            this.isShow = false;
            
        },
    closeSide() {
      this.$emit("closeSide");
    },
    edit() {
      this.show = !this.show;
    },
     toggleList() {
      this.isShow = !this.isShow
    },
    close(val) {
      console.log(val.target.value);
      this.show = !this.show;
    },

    decrease() {
      this.number = +this.number - 25;
    },
    increase() {
      this.number = +this.number + 25;
    },
    
  },
  components: {
    ScrollPanel,
    Dropdown,
    InputText,
  },
};
</script>
<style lang="scss" >
.p-dropdown,
.p-inputtext {
  width: 100%;
  font-size: 0.9em;
  font-weight: 500;
  border-radius: 0.6em;
  padding: 0.6em !important;
  outline: none !important;
  .p-inputtext {
    font-size: 0.9em;
    font-weight: 500;
  }
  .p-dropdown-trigger-icon {
    font-size: 0.9em;
  }
}
.p-dropdown-items li.p-dropdown-item {
  font-size: 0.9em !important;
}
#sideDisplay {
  font-family: "DM Sans", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  width: 30em;
  transition: 0.5s ease-in-out transform;
  z-index: 40;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  height: 100vh;
  transform: translate(100%, 0);
  background-color: white;
}

.slide-out {
  transform: translate(0, 0) !important;
}
.footer {
  z-index: 50;
}

.button {
  background-color: #33c2d3;
  border: none;
  margin: 1em 0;
  border-radius: 5px;
  width: 200px;
  padding: 14px;
  font-size: 16px;
  color: white;
  text-align: center;
}
.custom .p-scrollpanel-wrapper {
  border-right: 9px solid #f4f4f4;
}
.custom .p-scrollpanel-bar {
  background-color: lightgrey;
  opacity: 1;
  transition: background-color 0.3s;
}

.custom .p-scrollpanel-bar:hover {
  background-color: lightgrey;
}
@media (max-width: 768px) {
  #sideDisplay {
    width: 100%;
  }
}
</style>
