<template>
  <div id="Upload-page" class="flex-grow md:py-2 pt-10 px-6 md:px-2">
    <Cropper v-if="isShowCropper" :selectedImgData="selectedImgData" @hideCropper="hideCropper"/> 
    <div class="flex flex-row justify-between items-center mx-4">
      <GoBack />
      <div class="">
        <h2 class="text-lg work font-semibold capitalize p-ripple" v-ripple>
          {{ selectedCard.card.name }} Card
        </h2>
      </div>
    </div>
    <div class="upload_container md:block grid grid-cols-2 grey">
      <div class="card_form_container flex flex-col">
        <div class="w-11/12 sm:w-10/12 mx-auto">
          <BigCard>
            <div class="card-logo w-16 my-3">
              <img
                class="w-full"
                :src="'/img/cards/' + imgType + '.png'"
                alt=""
              />
            </div>
            <div class="card-details text-center text-white">
              <p
                class="
                  relative
                  tracking-wider
                  work
                  text-black text-lg
                  font-normal
                "
              >
                {{ selectedCard.card.name }}
              </p>
            </div>
          </BigCard>
          <div class="input_box my-2 flex flex-col">
            <label for="type" class="text-base work font-medium pb-2"
              >Card Type</label
            >
            <div class="relative" v-click-away="ClickAway">
              <div
                @click="toggleList"
                class="
                  w-full
                  border
                  text-base
                  work
                  px-4
                  py-3
                  capitalize
                  rounded-md
                  focus:border-cyan-500 focus:shadow-outline
                  outline-none outline-none
                "
              >
                {{
                  selectedType.type ? selectedType.type : "select card type"
                }}
                {{ selectedType.priceRange ? selectedType.priceRange : "" }}
              </div>
              <ul
                v-if="isShow"
                class="
                  codes
                  rounded
                  border
                  bg-white
                  w-full
                  p-2
                  my-2
                  overflow-hidden
                "
              >
                <li
                  class="
                    px-2
                    py-2
                    hover:bg-gray-100
                    flex
                    items-center
                    relative
                    cursor-pointer
                  "
                  v-for="(type, index) in cardTypes"
                  @click="
                    () => {
                      this.isShow = !this.isShow;
                      this.selectedType = type.card;
                    }
                  "
                  :key="index"
                >
                  <div class="font-medium px-2 text-base work text-gray-800">
                    {{ type.card.type }} {{ type.card.priceRange }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="input_box my-2 flex flex-col">
            <label for="amount" class="text-base work font-medium pb-2"
              >Amount</label
            >
            <input
              id="amount"
              autocomplete="off"
              v-model="amt"
              @input="filter"
              class="
                hover:ring-2
                items-center
                w-full
                border-cyan-200 border
                text-base
                work
                px-4
                py-3
                rounded-md
                focus:border-cyan-500 focus:shadow-outline
                outline-none outline-none
              "
              type="text"
              placeholder="Enter Amount"
            />
          </div>
        </div>
      </div>
      <div class="file_price_container flex flex-col">
        <div class="w-11/12 sm:w-10/12 mx-auto">
          <div class="my-4">
            <span class="block work">You will receive</span>
            <span class="font-bold text-green-800 ibm text-xl"
              >&#8358;{{ formatCurrency(isTotal) }}</span
            >
          </div>
          <div class="input_box mx-auto my-2">
            <label for="comment" class="text-base work font-medium"
              >Comments</label
            >
            <input
              id="comment"
              autocomplete="off"
              @input="filter"
              class="
                w-full
                border
                text-base
                work
                px-4
                py-3
                rounded-md
                focus:border-cyan-500 focus:shadow-outline
                outline-none outline-none
              "
              type="text"
              placeholder="Enter code if not clear"
            />
          </div>
          <span class="block py-1 text-base work font-medium"
            >Upload Card or Receipt</span
          >
          <div>
            
              <div
                class="
                  border-dashed
                  my-4
                  px-4
                  py-6
                  rounded
                  flex flex-col
                  text-center
                  justify-between
                  items-center
                  border-4
                "
              >
              <div v-if="allImages.length >= 1" id="preview" class="grid grid-cols-3 ">

                <div v-for="(img, index) in allImages" :key="index" class="box m-2 relative">
                  <div
             @click="deleteImg(index)"
                class="
                  flex
                  justify-center
                  top-0
                  right-0
                  absolute
                  h-4
                  w-4
                  p-0.5
                  z-10
                  items-center
                  cursor-pointer
                  rounded-2xl
                  bg-red-500
                  text-white
                "
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </div>
                  <img  @click="cropImage(index)"  class="w-full border hover:shadow-lg shadow-md rounded border-cyan-500"   :src="img"/>
                </div>
                
              </div>
              <div v-else class="items-center py-4">
                <img src="/img/proof.svg" class="mx-auto"/>
                <p class="py-4 work">
                  Kindly Upload a Picture of Your Giftcard
                </p>
              </div>
                
                <label
                  for="image"
                  class="
                    bg-cyan
                    flex
                    justify-center
                    h-8
                    w-8
                    items-center
                    cursor-pointer
                    rounded-2xl
                    text-white
                    work
                  "
                >
                  <i class="pi pi-plus"></i>
                </label>
                <input
                  name="image"
                  id="image"
                  type="file"
                  ref="file"
                  accept="image/*"
                  multiple= ""
                  @change="handleChange"
                  hidden
                />
              </div>
            
          </div>
          <input type="file" class="hidden" id="file" name="file" />
        </div>
        <button
          class="bg-cyan work rounded mx-auto text-white font-medium px-4 py-2"
        >
          Trade Card
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import {r}
import Cropper from '@/components/reusables_/Cropper.vue'
import { ExactCardImg } from "../utils/cards";
import BigCard from "../components/Big-Card.vue";
import {ref} from 'vue'
export default {
  name: "Upload",
  data() {
    return {
      amt: null,
      isShow: false,
      isUploaded: false,
      
      selectedType: {},
      cardTypes: [],
      
      selectedCard: { card: { name: "" } },
    };
  },
  setup(){
    const allImages = ref([])
    const file = ref(null)
    const isShowCropper = ref(false)
    const selectedImgData = ref(null)
    const handleChange = () => {
      console.log(file.value.files)
      if(file.value.files){
        const allFiles = file.value.files
        // let arr = []
        for(let singleFile of allFiles){
          const reader = new FileReader()
          reader.onload = () => {
            allImages.value.push(reader.result)
          }
          
          reader.readAsDataURL(singleFile)
        }
      }
    }
    const deleteImg = (id) => {
      allImages.value.splice(id, 1)
    }
     const hideCropper = (any) => {
       if(any){
         console.log(any)
         allImages.value[any.id] = any.img
       }
        isShowCropper.value = false
      //   if (any) {
      //     cropImg.value = null
      //     console.log(any)
      //    return croppedImg.value = any
      //    }
      // return cropImg.value = null 
    }
    const cropImage = (id) => {
      console.log(id)
      selectedImgData.value = {}
      
      selectedImgData.value.img = allImages.value[id]
      selectedImgData.value.id = id 
      
      console.log(selectedImgData)
      isShowCropper.value = true
    }
    return {
      allImages,
      file,
      isShowCropper,
      handleChange,
      cropImage,
      hideCropper,
      deleteImg,
      selectedImgData
    }
  },
  components: {
    BigCard,
    Cropper
  },
  computed: {
    imgType() {
      return ExactCardImg(this.selectedCard.card.name);
    },

    ...mapGetters({
      allcards: "cards/allCards",

      names: "cards/allNames",
    }),
    isTotal() {
      if (this.selectedType.rate) return this.amt * this.selectedType.rate;
      else return 0;
    },
    // selectedTyptName (){

    // }
  },
  methods: {
    toggleList() {
      this.isShow = !this.isShow;
    },
    preview() {
      const img = this.$refs.file.files[0];
      this.img = img;
      this.isUploaded = true;
      var reader = new FileReader();
      reader.onload = () => {
        let preview_box = document.getElementById("preview");
        preview_box.src = reader.result;
      };
      reader.readAsDataURL(img);
    },
    ClickAway() {
      this.isShow = false;
    },
    ...mapActions({
      getAllNames: "cards/getNames",
      isSpin: "cards/ToggleLoader",
    }),
    async fetchName() {
      this.isSpin();
      let params = this.$route.params.id;
      await this.getAllNames()
        .then(() => {
          this.selectedCard = this.names.find(
            (card) => card.card.uuid.toLowerCase() === params.toLowerCase()
          );
          let isSel = this.selectedCard;
          console.log(this.allcards);
          this.cardTypes = this.allcards.filter(
            (card) =>
              card.card.name
                .toLowerCase()
                .indexOf(isSel.card.name.toLowerCase()) >= 0
          );
          console.log(this.selectedCard);
          this.isSpin();
        })
        .catch(() => {
          this.$toast.add({ severity: "error", summary: "Check Connection" });
        });
    },
  },
  mounted() {
    this.fetchName();
  },
};
</script>
<style lang="scss">
.p-ripple.grey .p-ink {
  background: grey;
}
#preview {
  .box {
    max-width: 15em;
  }
}
</style>
