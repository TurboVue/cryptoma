<template>
  <div
    class=" card_box border cursor-pointer hover:bg-gray-100 work rounded mb-4
     p-4 py-6 flex items-center justify-between"
  >
    <div class="flex flex-row items-center">
      <div class="p-2 rounded bg-gray-100 flex items-center justify-center ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z" fill="#130F26"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="#130F26"/>
</svg>

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
