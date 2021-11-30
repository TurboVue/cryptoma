<template>
  <div @click="update()">
    <div
      id="stockcard"
      :style="{ '--order': index }"
      class="
        flex
        w-full
        rounded
        flex-col
        items-start
        sm:flex-row
        justify-between
        sm:items-center
        border
        my-2
        mb-4
        px-4
        cursor-pointer
      "
    >
      <div class="stock_name_container my-2 w-full grid grid-cols-2 gap-10">
        <div class="text-center">
          <p class="stock_abbr text-gray-500 font-medium">Name</p>
          <p class="stock_fullname text-gray-600">{{card.card.name}}</p>
        </div>
        <div class="text-center">
          <p class="font-medium text-gray-500">type</p>
          <p class="font-medium">{{card.card.type}}</p>
        </div>
      </div>
      <div class="stock_details py-2 w-full my-2 grid grid-cols-2 gap-10">
        <div class="text-center">
          <p class="font-medium text-gray-500">Price Range</p>
          <p class="font-medium">{{card.card.priceRange}}</p>
        </div>
        <div class="text-center">
          <p class="font-medium text-gray-500">Rate</p>
          <p class="ibm font-bold text-green-600">${{card.card.rate}}</p>
        </div>
      </div>
    </div>
    <div>
        
    </div>
  </div>
</template>
<script>
export default {
  name: "StockCard",
   props: ['card','index'],
   methods: {
     update(){
       this.$router.push({'path': `/update/${this.card.card.uuid}`})
     }
   }
};
</script>
<style lang="scss" scoped>
#stockcard {
  box-shadow: 0px 0px 10px rgba(12, 24, 37, 0.05);

  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.35s;
  animation-delay: calc(var(--order) * 200ms);
}
.stock_name_container {
  // min-width: 8em;
}
@keyframes fadeInOpacity {
  20% {
    opacity: 0;
    transform: translateY(-40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
