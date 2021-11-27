<template>
  <div>
    <div
      id="barcode_container"
      class="mx-auto md:border-0 border rounded-md md:p-0 p-6"
    >
      <div class="flex flex-row justify-between items-center">
        <div class="">
          <GoBack />
        </div>
        <div class="">
          <h2 class="text-lg work font-semibold p-ripple" >Qrcode</h2>
        </div>
      </div>
      <div id="barcode_box" class="flex my-2 p-4 justify-center items-center">
        <!-- <img src="/img/barcode.svg" />  -->
        <a href="https://www.bitcoinqrcodemaker.com"
          ><img
            src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&amp;address=1FfmbHfnpaZjKFvyi1okTjJJusN455paPH"
            alt="Bitcoin QR Code Generator"
            height="300"
            width="300"
            border="0"
        /></a>
      </div>
      <div
        class="
          flex
          justify-between
          items-center
          border-cyan border-2
          px-2
          py-4
          mt-6
          rounded
        "
      >
        <p class="text-base work text-gray-600">3LbhLkivqUv....BLx5g4Ff78</p>
        <button
          class="
            bg-cyan
            rounded
            work
            py-1
            px-4
            text-white
            font-medium
            shadow-md
          "
        >
          Copy
        </button>
      </div>
      <button
        @click="
          () => {
            $router.push({ name: 'Proof' });
          }
        "
        class="
          rounded
          my-4
          bg-black
          text-white
          clear-both
          font-medium
          work
          cursor-pointer
          border
          shadow
          px-4
          py-2
        "
      >
        Already Sent It?
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Barcode",
};
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  #barcode_container {
    width: 60%;
    // border: 1px solid grey;
  }
  #rate_update_box {
    // background-color: #
  }
}
</style>
