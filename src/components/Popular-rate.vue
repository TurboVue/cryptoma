<template>
  <div
    style="background-image: url('/img/amazon.svg')"
    :for="for"
    :class="class"
  >
    <div class="slider__item-content grid grid-rows-2 gap-4">
      <div class="flex items-center justify-between">
        <div class="">
          <span class="card-head text-sm font-medium p-1">card</span>
          <div class="flex flex-row items-center">
            <img src="/img/amazon-logo.svg" />
            <p class="px-1 font-medium">Amazon Card</p>
          </div>
        </div>

        <div class="text-right">
          <a
            href="#"
            class="py-2 text-indigo-600 text-xs uppercase hover:underline"
            ><img src="/img/watermark.svg"
          /></a>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="">
          <span class="card-head text-sm font-medium p-1">Date</span>
          <p class="px-1">21, Sep 2020</p>
        </div>

        <div class="">
          <span class="card-head text-sm font-medium p-1">Rate</span>
          <p class="px-1 font-medium">N320</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RateBox",
  data() {
    return {
      for: `slide-` + this.i,
      class: "slider__item slider__item--" + this.i + " card",
    };
  },
  computed: {},
  props: ["i"],
};
</script>
<style lang="scss" scoped>
p {
  color: white;
  font-size: inherit;
}
.card {
  background-size: cover;
  padding: 0.5em 1.3em;
}
.card-head {
  display: block;
  font-size: 0.8em;
  color: white;
}
</style>
