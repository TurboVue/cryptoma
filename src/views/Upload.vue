<template>
  <div id="Upload-page" class="flex-grow py-2 px-2">
    <Cropper
      v-if="isShowCropper"
      :selectedImgData="selectedImgData"
      @hideCropper="hideCropper"
    />
    
      <transition>
          <ListModal :cardTypes="cardTypes" @ClickAway = "ClickAway" @selectType="selectType" v-if="isTypeModalShow"/>
    </transition>
    
    
    <div class="flex flex-row justify-between items-center mx-4">
      <GoBack />
      <div class="">
        <h2 class="text-lg work font-semibold capitalize p-ripple">
          {{ selectedCard.card.name }} Card
        </h2>
      </div>
    </div>
    <div class="upload_container block sm:grid grid-cols-2 grey">
      <div class="card_form_container flex flex-col">
        <div class="w-11/12 sm:w-10/12 mx-auto">
          <BigCard :imgType="imgType" :name="selectedCard.card.name" />

          <div class="input_box my-2 flex flex-col">
            <label for="type" class="text-base work font-medium pb-2"
              >Card Type</label
            >
            <div class="relative" v-click-away="ClickAway">
              <div
                @click="toggleTypeModal"
                class="
                  w-full
                  border
                  text-base
                  work
                  px-4
                  flex
                  justify-between
                  select-none
                  py-3
                  capitalize
                  rounded-md
                  shadow
                  outline-none outline-none
                "
              >
                <p>
                  {{
                    selectedType.type ? selectedType.type : "select card type"
                  }}
                  {{ selectedType.priceRange ? selectedType.priceRange : "" }}
                </p>
                
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
               
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
              <div
                v-if="allImages.length >= 1"
                id="preview"
                class="grid grid-cols-3"
              >
                <div
                  v-for="(img, index) in allImages"
                  :key="index"
                  class="box m-2 relative"
                >
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <img
                    @click="cropImage(index)"
                    class="
                      w-full
                      border
                      hover:shadow-lg
                      shadow-md
                      rounded
                      border-cyan-500
                    "
                    :src="img"
                  />
                </div>
              </div>
              <div v-else class="items-center py-4">
                <img src="/img/proof.svg" class="mx-auto" />
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
                multiple=""
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
import ListModal from '@/components/reusables_/ListModal.vue'
import Cropper from "@/components/reusables_/Cropper.vue";
import { ExactCardImg } from "../utils/cards";
import BigCard from "../components/Big-Card.vue";
import { ref } from "vue";
export default {
  name: "Upload",
  data() {
    return {
      amt: null,
      
      isUploaded: false,

      
      cardTypes: [],

      selectedCard: { card: { name: "" } },
    };
  },
  setup() {
    const allImages = ref([]);
    const file = ref(null);
    const isTypeModalShow = ref(false);
    const isShowCropper = ref(false);
    const selectedImgData = ref(null);
    const selectedType = ref({})
    const handleChange = () => {
      console.log(file.value.files);
      if (file.value.files) {
        const allFiles = file.value.files;
        // let arr = []
        for (let singleFile of allFiles) {
          const reader = new FileReader();
          reader.onload = () => {
            allImages.value.push(reader.result);
          };

          reader.readAsDataURL(singleFile);
        }
      }
    };
    const deleteImg = (id) => {
      allImages.value.splice(id, 1);
    };
    const hideCropper = (any) => {
      if (any) {
        console.log(any);
        allImages.value[any.id] = any.img;
      }
      isShowCropper.value = false;
      //   if (any) {
      //     cropImg.value = null
      //     console.log(any)
      //    return croppedImg.value = any
      //    }
      // return cropImg.value = null
    };
   const ClickAway = () => {
      isTypeModalShow.value = false;
    }
     const toggleTypeModal = () => {
      isTypeModalShow.value = !isTypeModalShow.value;
    }
    const selectType = (any) => {
      selectedType.value = any.card
    }
    const cropImage = (id) => {
      console.log(id);
      selectedImgData.value = {};

      selectedImgData.value.img = allImages.value[id];
      selectedImgData.value.id = id;

      console.log(selectedImgData);
      isShowCropper.value = true;
    };
    return {
      allImages,
      file,
      isShowCropper,
      isTypeModalShow,
      handleChange,
      selectedType,
      ClickAway,
      cropImage,
      toggleTypeModal,
      hideCropper,
      selectType,
      deleteImg,
      selectedImgData,
    };
  },
  components: {
    BigCard,
    Cropper,
    ListModal,
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
