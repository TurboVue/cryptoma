<template>
  <div>
    <div class="flex flex-row justify-between items-center">
      <div class="my-1">
        <GoBack />
      </div>
      <div class="">
        <h2 class="text-lg work font-semibold p-ripple" v-ripple>
          Rate Converter
        </h2>
      </div>
    </div>
    <div
      id="converter_container"
      class="mx-auto md:border-0 border rounded-md md:p-0 p-6"
    >
      <div>
        <p class="font-bold py-2 text-lg work">Current Bitcoin Rate</p>

        <div
          class="flex justify-between border mb-4 p-4 work rounded-md w-full"
        >
          <div>
            <p class="font-light text-md text-grey-700">BTC to USD</p>
            <p class="font-medium text-lg">$55,995.66 / BTC</p>
          </div>
          <div>
            <p class="font-light text-md text-grey-700">USD to Naira</p>
            <p class="font-medium text-lg">550 / USD</p>
          </div>
        </div>
        <div id="calculator_box" class="mb-6">
          <div id="input_box" class="mb-4">
            <p class="font-medium work">You want to send</p>
            <Input
              :logo="'/img/btc-icon.svg'"
              :title="'BTC'"
              @convert="convert"
              v-model="btcInput"
            />
          </div>
          <div id="input_box" class="mb-4">
            <Input
              :logo="'/img/usa-icon.svg'"
              :title="'USD'"
              @convert="convert"
              v-model="usdInput"
            />
          </div>
          <div id="input_box" class="mb-4">
            <p class="font-medium work">You will receive</p>
            <Input
              :logo="'/img/ngn-icon.svg'"
              :title="'NGN'"
              @convert="convert"
              v-model="ngnInput"
            />
          </div>
        </div>
        <div class="flex items-center flex-wrap justify-center mx-auto">
          <div
            @click="
              () => {
                $router.push({ name: 'Barcode' });
              }
            "
            class="
              rounded
              bg-cyan
              cursor-pointer
              work
              text-white
              mx-2
              font-medium
              shadow-md
              px-4
              py-2
            "
          >
            Click to send
          </div>
          <div
            @click="
              () => {
                $router.push({ name: 'Proof' });
              }
            "
            class="
              rounded
              font-medium
              work
              cursor-pointer
              mx-2
              border
              shadow
              px-4
              py-2
            "
          >
            Already Sent It?
          </div>
        </div>
      </div>
    </div>
    <!-- <CurrencyConverter /> -->
  </div>
</template>
<script>
import Input from "../components/Input";
import axios from "axios";
// import CurrencyConverter from '../components/CurrConverter'
export default {
  name: "Converter",
  data() {
    return {
      btcInput: 0,
      usdInput: 0,
      ngnInput: 0,
      liveBtcRate: null,
      BtcRate: null,
    };
  },
  components: {
    Input,
    // CurrencyConverter
  },
  methods: {
    async getRate() {
      await axios
        .get("btc-rate")
        .then((res) => {
          this.liveBtcRate = res.data.data.data;
          this.BtcRate = res.data["0"][0].card;
        })
        .catch((err) => console.log(err));
    },
    convert(data) {
      console.log(data);
      const _this = this;
      if (data === "BTC") {
        _this.usdInput = _this.btcInput * parseFloat(_this.liveBtcRate.amount);
        _this.ngnInput =
          parseFloat(_this.liveBtcRate.amount) *
          parseFloat(_this.BtcRate.buy_rate) *
          _this.btcInput;
      } else if (data === "USD") {
        // _this.usdInput = _this.usdInput / parseFloat(_this.liveBtcRate.amount);
        _this.ngnInput = _this.usdInput * parseFloat(_this.BtcRate.buy_rate);
        _this.btcInput = _this.usdInput / parseFloat(_this.liveBtcRate.amount);
      } else if (data === "NGN") {
        _this.btcInput =
          _this.ngnInput /
          (parseFloat(_this.liveBtcRate.amount) *
            parseFloat(_this.BtcRate.buy_rate));
        _this.usdInput = _this.ngnInput / parseFloat(_this.BtcRate.buy_rate);
      }
    },
  },
  computed: {},
  mounted() {
    this.getRate();
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  #converter_container {
    width: 60%;
    // border: 1px solid grey;
  }
  #rate_update_box {
    // background-color: #
  }
}
</style>
