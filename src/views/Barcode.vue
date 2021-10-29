<template>
  <div>
    <div
      id="barcode_container"
      class="mx-auto md:shadow-none shadow rounded-md md:p-0  p-6"
        >
      <div class="flex flex-row justify-between items-center ">
            <div class="">
                <a href="#" class="py-2 text-gray-600 text-tiny flex items-center font-medium uppercase "><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.707 18.707C11.5195 18.8946 11.2652 19 11 19C10.7349 19 10.4806 18.8946 10.293 18.707L4.29303 12.7016C4.10556 12.5139 4.00024 12.2594 4.00024 11.994C4.00024 11.7286 4.10556 11.474 4.29303 11.2863L10.293 5.28096C10.4816 5.09864 10.7342 4.99776 10.9964 5.00004C11.2586 5.00232 11.5094 5.10758 11.6948 5.29316C11.8803 5.47873 11.9854 5.72977 11.9877 5.9922C11.99 6.25463 11.8892 6.50746 11.707 6.69623L7.41403 10.9931H19C19.2652 10.9931 19.5196 11.0985 19.7071 11.2862C19.8947 11.4739 20 11.7285 20 11.994C20 12.2594 19.8947 12.514 19.7071 12.7017C19.5196 12.8894 19.2652 12.9949 19 12.9949H7.41403L11.707 17.2917C11.8945 17.4794 11.9998 17.7339 11.9998 17.9993C11.9998 18.2647 11.8945 18.5193 11.707 18.707Z" fill="#192434"/>
                </svg>
                </span> <span class="font-bold sm:hidden px-1">Back</span>  </a>
            </div>
            <div class="">
                <h2 class="text-lg work font-semibold p-ripple" v-ripple>Qrcode</h2>
            </div>
        </div>
        <div id="barcode_box" class="flex my-2 p-4 justify-center items-center">
            <!-- <img src="/img/barcode.svg" />  -->
            <a href="https://www.bitcoinqrcodemaker.com"><img src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&amp;address=1FfmbHfnpaZjKFvyi1okTjJJusN455paPH" alt="Bitcoin QR Code Generator" height="300" width="300" border="0" /></a>
        </div>
        <div class="flex justify-between items-center border-cyan border-2 px-2 py-4 mt-6 rounded">
            <p class="text-base work text-gray-600">3LbhLkivqUv....BLx5g4Ff78</p>
            <button class="bg-cyan rounded work py-1 px-4 text-white font-medium shadow-md">Copy</button>
        </div>
        <button @click="() => {$router.push({name: 'Proof'})}" class="rounded my-4 bg-black text-white clear-both font-medium work cursor-pointer border shadow px-4 py-2">Already Sent It?</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Barcode",
};
</script>
<style lang="scss" scoped>
@media(min-width: 768px){
    #barcode_container {
        width: 60%;
        // border: 1px solid grey;
    }
    #rate_update_box {
        // background-color: #
    }
}
</style>