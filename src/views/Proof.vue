<template>
  <div>
    <Cropper v-if="isShowCropper" :img="cropImg" @hideCropper="hideCropper"/> 
    <div class="flex flex-row justify-between items-center">
      <div class="my-1">
        <GoBack />
      </div>
      <div class="">
        <h2 class="text-lg work font-semibold p-ripple" ></h2>
      </div>
    </div>
    <div
      id="proof_container"
      class="mx-auto my-2 md:shadow-none shadow md:border rounded-md md:p-0 p-6"
    >
      <div
        id="proof_box"
        class="flex flex-col text-center justify-between items-center"
      >
        <div>
          
            <div
              class="
                border-dashed
                my-10
                px-4
                relative
                py-6
                rounded
                flex flex-col
                text-center
                justify-between
                items-center
                border-2
              "
            >
              <div
              v-if="croppedImg"
                @click="isUploaded = !isUploaded"
                class="
                  flex
                  justify-center
                  top-0
                  right-0
                  absolute
                  h-8
                  w-8
                  items-center
                  cursor-pointer
                  rounded-2xl
                  bg-red-500
                  text-white
                "
              >
                <i class="pi pi-times"></i>
              </div>
              <div v-if="croppedImg">
                <img id="preview" :src="croppedImg" />
              </div>
              <div v-else class="items-center py-4">
                <img src="/img/proof.svg" class="mx-auto"/>
              <p class="py-4 work">
                Kindly Upload a Screenshot of successful Transaction
              </p>
              </div>
              
              <div>
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
                  absolute
                  bottom
                  mb-10
                  plus_icon
                  text-white
                  work
                "
                ><i class="pi pi-plus"></i
              ></label>
              <input
                name="image"
                id="image"
                type="file"
                ref="imgInput"
                accept="image/*"
                @change="crop"
                hidden
              />
              </div>
              
            </div>
          
        </div>
        <!-- //{{amount + ',' + img}} -->
        <Input :logo="'/img/btc-icon.svg'" :title="'BTC'" v-model="amount" />
        <div
          @click="upload"
          class="
            rounded
            bg-cyan
            cursor-pointer
            text-white
            mx-2
            my-4
            work
            font-medium
            shadow-md
            px-4
            py-2
          "
        >
          Submit
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import {ref} from 'vue'
// import axios from 'axios'
import { useStore } from "vuex";
import Cropper from '@/components/reusables_/Cropper.vue'
import Input from "../components/Input";
export default {
  name: "Proof",
  data() {
    return {
      isUploaded: false,

      amount: 0,
      // cropImg: null,
      img: null,
    };
  },
  components: {
    Input,
    Cropper
  },
  inject: ["showSuccess"],
  setup(){
    const store = useStore()
    const isShowCropper = ref(false)
    const croppedImg = ref(null)
    const cropImg = ref(null)
    const imgInput = ref(null)
      const hideCropper = (any) => {
        isShowCropper.value = false
        if (any) {
          cropImg.value = null
          console.log(any)
         return croppedImg.value = any
         }
      return cropImg.value = null 
    }
    
     const crop = async () => {
    store.dispatch('cards/ToggleLoader')
      const img = imgInput.value.files[0];
      console.log(img)
      const reader = new FileReader();
      // const crpImg = 
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            reader.onload = () => {
          cropImg.value = reader.result
          isShowCropper.value = true
         store.dispatch('cards/ToggleLoader')
        // addImg(reader.result)
      }
          )}), 1000)
       
      reader.readAsDataURL(img);
      
    }
    return {
      imgInput,
      cropImg,
      crop,
      croppedImg,
      hideCropper,
      isShowCropper
    }
  },
  methods: {
    // ...mapActions({
    //   isSpin: "cards/ToggleLoader",
    // }),
    preview() {
      const img = this.$refs.file.files[0];
      this.img = img;
      // this.isUploaded = true;
      var reader = new FileReader();
      reader.onload = () => {
        // let preview_box = document.getElementById("preview");
        // preview_box.src = reader.result;
        this.cropImg = reader.result
      };
      reader.readAsDataURL(img);
    },
    async upload() {
      this.isSpin();
      let formData = new FormData();
      // <!-- WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST -->
      formData.append("shot", this.img);
      formData.append("amount", this.amount);
      console.log(formData);
      // await axios.post('users/proof-make', formData,
      // { headers: {
      //   'Content-Type': 'multipart/form-data'
      // }}).then(response => console.log(response))
      this.isSpin();
      this.showSuccess.val = !this.showSuccess.val;
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  #proof_container {
    width: 60%;
    // border: 1px solid grey;
  }
  #proof_box {
    max-width: 30em;
    margin: 0 auto;
    // background-color: #
    background: #ffffff;
  }
}
.plus_icon {
  transform: translateY(-20px)
}
</style>
