<template>
  <router-link class="m-4" :to="'/upload/' + card.card.uuid">
    <div
      class="
        card
        
        hover:shadow-lg
       border
        
        justify-center
        items-center
        0
        fade-in
        p-4
        w-full
        lg:w-full
        bg-white
        rounded-md
      "
      :style="{ '--order': index }"
    >
      <div class="card-logo w-8 my-3">
        <img class="w-full" :src="'/img/cards/' + imgType + '.png'" alt="" />
      </div>
      <div class="card-details text-center mx-2 text-white">
        <p class="relative tracking-wider capitalize work text-gray-800 font-medium ">
          {{ card.card.name }}
        </p>
      </div>
    </div>
  </router-link>
</template>
<script>
import { ExactCardImg } from "../utils/cards";
export default {
  name: "Card",
  methods: {
    toggleSide(any) {
      console.log("me" + any);
      this.$emit("toggleSide", any);
    },
  },
  computed: {
    imgType() {
      return ExactCardImg(this.card.card.name);
    },
  },
  props: ["card", "index"],
};
</script>
<style lang="scss" scoped>

</style>
