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
        <p class="relative tracking-wider capitalize work text-gray-700 ">
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
.card {
  height: 5em;
  transition: .2s ease-in-out;
  background-size: 7em;
  background-position: right bottom;
  display: flex;
  flex-direction: row;
  background-repeat: no-repeat;
  p {
    font-size: 1.2rem;
  }
}
.card:hover .tracking-wider::before {
  width: 100%;
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.35s;
  // animation-delay: calc(var(--order) * 200ms)
}
.tracking-wider::before {
  position: absolute;
  left: 0;
  content: "";
  bottom: 0;
  width: 20%;
  background-color: white;
  height: 1px;
  transition: 0.5s ease-in-out;
}

@keyframes fadeInOpacity {
  20% {
    opacity: 0;
    transform: translateY(20%);
  }
  30%,
  100% {
    opactity: 1;
    transform: translateY(0);
  }
}
</style>
