<template>
  <div>
    <Cropper v-if="cropImg" :img="cropImg" @hideCropper="hideCropper"/> 
    <div class="flex flex-row justify-between items-center">
      <div class="my-1">
        <GoBack />
      </div>
      <div class="">
        <h2 class="text-lg work font-semibold p-ripple" v-ripple></h2>
      </div>
    </div>
    <div
      id="proof_container"
      class="mx-auto my-2 md:shadow-none shadow rounded-md md:p-0 p-6"
    >
      <div
        id="proof_box"
        class="flex flex-col text-center justify-between items-center"
      >
        <div>
          <template v-if="isUploaded">
            <div
              class="
                border-dashed
                my-10
                relative
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
              <img id="preview" />
            </div>
          </template>
          <template v-else>
            <div
              class="
                border-dashed
                my-10
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
              <img src="/img/proof.svg" />
              <p class="py-4 work">
                Kindly Upload a Screenshot of successful Transaction
              </p>
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
          </template>
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
    const cropImg = ref(null)
    const imgInput = ref(null)
      const hideCropper = () => {
      cropImg.value = null 
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
      hideCropper
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
    max-width: 20em;
    margin: 0 auto;
    // background-color: #
    background: #ffffff;
  }
}
</style>
