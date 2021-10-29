<template>
    <div class="btc-container flex flex-row items-center">
          <div class="btc-rate-card flex  flex-col justify-center items-start rounded-lg shadow-lg border">
            <img src="/img/buying.svg" alt="">
            <span class="title text-xs text-gray-400">Buying at</span>
            <p class="price">N420 - N500</p>
          </div>
          <div class="btc-rate-card flex flex-col justify-center items-start rounded-lg shadow-lg border">
             <img src="/img/selling.svg" alt="">
            <span class="title text-xs text-gray-400">Selling at</span>
            <p class="price">Unavailable</p>
          </div>
      </div>
</template>
<script>
export default {
    name: 'Rates-Update'
}
</script>
<style lang="scss" scoped>
.btc-rate-card {
  padding: 1em 1.5em;
}
.btc-rate-card:last-of-type {
  margin: 0 1em;
}
</style>
