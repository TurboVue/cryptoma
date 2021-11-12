<template>
  <div
    id="Upload-page"
    class="flex-grow md:py-2 pt-10 px-6 md:px-2"
  >
    <div class="flex flex-row justify-between items-center mx-4">
      <div @click="$router.go(-1)" class=" my-1">
        <div
          class="py-2 text-gray-600 text-tiny flex items-center font-medium uppercase "
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.707 18.707C11.5195 18.8946 11.2652 19 11 19C10.7349 19 10.4806 18.8946 10.293 18.707L4.29303 12.7016C4.10556 12.5139 4.00024 12.2594 4.00024 11.994C4.00024 11.7286 4.10556 11.474 4.29303 11.2863L10.293 5.28096C10.4816 5.09864 10.7342 4.99776 10.9964 5.00004C11.2586 5.00232 11.5094 5.10758 11.6948 5.29316C11.8803 5.47873 11.9854 5.72977 11.9877 5.9922C11.99 6.25463 11.8892 6.50746 11.707 6.69623L7.41403 10.9931H19C19.2652 10.9931 19.5196 11.0985 19.7071 11.2862C19.8947 11.4739 20 11.7285 20 11.994C20 12.2594 19.8947 12.514 19.7071 12.7017C19.5196 12.8894 19.2652 12.9949 19 12.9949H7.41403L11.707 17.2917C11.8945 17.4794 11.9998 17.7339 11.9998 17.9993C11.9998 18.2647 11.8945 18.5193 11.707 18.707Z"
                fill="#192434"
              />
              </svg>
          </span>
          <span class="font-bold sm:hidden px-1">Back</span>
          </div>
      </div>
      <div class="">
        <h2
          class="text-lg work font-semibold p-ripple"
          v-ripple
        >{{selectedCard.card.name}} Card</h2>
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
              <p class="relative tracking-wider work text-black text-lg font-normal">
                {{ selectedCard.card.name }}
              </p>
            </div>
          </BigCard>
          <div class="input_box  my-2  flex flex-col">
            <label
              for="type"
              class="text-base work font-medium pb-2"
            >Card Type</label>
              <div
                class="relative"
                v-click-away="ClickAway"
              >
                <div
                  @click="toggleList"
                  class="w-full border text-base work px-4 py-3 capitalize rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                >
                  select card type
          </div>
          <ul
            v-if="isShow"
            class="codes rounded border bg-white w-full p-2 my-2  overflow-hidden"
          >
            <li
              class="px-2 py-2 hover:bg-gray-100 flex items-center relative cursor-pointer"
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
                {{ type.card.type }}
              </div>
              </li>
              </ul>
        </div>
      </div>
      <div class="input_box  my-2  flex flex-col">
        <label
          for="amount"
          class="text-base work font-medium pb-2"
        >Amount</label>
          <input
            id="amount"
            autocomplete="off"
            @input="filter"
            class="hover:ring-2 items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
            type="text"
            placeholder="Enter Amount"
          />
      </div>
     
    </div>
    </div>
    <div class="file_price_container flex flex-col ">
      <div class="w-11/12 sm:w-10/12 mx-auto">
        <div class="my-4">
          <span class="block work">You will receive</span>
          <span class="font-bold text-green-500 text-lg">₦45,000</span>
        </div>
        <div class="input_box mx-auto my-2 ">
          <label
            for="comment"
            class="text-base work font-medium"
          >Comments</label>
            <input
              id="comment"
              autocomplete="off"
              @input="filter"
              class="w-full border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
              type="text"
              placeholder="Enter code if not clear"
            />
        </div>
        <span class="block py-1 text-base work font-medium">Upload Card or Receipt</span>
        <div>
          <template v-if="isUploaded">
            <div class="border-dashed my-4 relative px-4 py-6 rounded flex flex-col text-center  justify-between items-center border-4">
              <div
                @click="isUploaded = !isUploaded"
                class="flex justify-center top-0 right-0 absolute h-8 w-8 items-center cursor-pointer rounded-2xl bg-red-500 text-white"
              >
                <i class="pi pi-times"></i>
              </div>
              <img id="preview" />
            </div>
          </template>
          <template v-else>
            <div class="border-dashed my-4 px-4 py-6 rounded flex flex-col text-center  justify-between items-center border-4">

              <img src="/img/proof.svg" />
              <p class="py-4 work">Kindly Upload a Picture of Your Giftcard</p>
              <label
                for="image"
                class="bg-cyan flex justify-center h-8 w-8 items-center cursor-pointer rounded-2xl text-white work"
              >
                <i class="pi pi-plus"></i>
                </label>
                <input
                  name="image"
                  id="image"
                  type="file"
                  ref="file"
                  accept="image/*"
                  @change="preview"
                  hidden
                />
            </div>
          </template>
        </div>
          <input
            type="file"
            class="hidden"
            id="file"
            name="file"
          />
      </div>
       <button class="bg-cyan work rounded mx-auto text-white font-medium px-4 py-2">Trade Card</button>
    </div>
    
    </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { ExactCardImg } from '../utils/cards';
import BigCard from "../components/Big-Card.vue";
export default {
  name: "Upload",
  data() {
    return {
      isShow: false,
      isUploaded: false,
      selectedType: {},
      cardTypes: [],
      selectedCard: { card: { name: "" } }
    };
  },
  components: {
    BigCard
  },
  computed: {
    imgType() {
     return ExactCardImg(this.selectedCard.card.name)
    },
    
    ...mapGetters({
      allcards: "cards/allCards",

      names: "cards/allNames"
    })
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
      isSpin: "cards/ToggleLoader"
    }),
    async fetchName() {
      this.isSpin();
      let params = this.$route.params.id;
      await this.getAllNames()
        .then(() => {
          this.selectedCard = this.names.find(
            card => card.card.uuid.toLowerCase() === params.toLowerCase()
          );
          let isSel = this.selectedCard;
          console.log(this.allcards)
          this.cardTypes = this.allcards.filter(
            card =>
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
    }
  },
  mounted() {
    this.fetchName();
  }
};
</script>
<style lang="scss">
.p-ripple.grey .p-ink {
  background: grey;
}
</style>
