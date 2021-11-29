<template>
  <div
    class=" card_box border cursor-pointer hover:bg-gray-100 work rounded mb-4
     p-4 py-6 flex items-center justify-between"
  >
    <div class="flex flex-row items-center">
      <div class="p-2 rounded bg-gray-100 flex items-center justify-center ">
        <ion-icon name="albums"></ion-icon>
      </div>
      
      <p class="px-2">
     {{name}}
    </p>
    </div>
    
    <div class="flex flex-col" >
      <span class="text-sm text-gray-400">Total</span>
      <p class="font-medium px-2 text-gray-600">{{ total }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CountsCard',
  props: {
    'name' : {
      type: String,
      default: 'Name'
    },
    'total': {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="scss">
// .card_box {}
ion-icon {
  font-size: 25px;
  --ionicon-stroke-width: 19px;
  color: #04172a7c;
}
* {
  transition: .23s ease-in-out;
}
</style>
