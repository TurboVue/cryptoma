<template>
    <div>
        <div class="flex flex-row justify-between items-center">
            <div class=" my-1">
                <a href="#" class="py-2 text-gray-600 text-tiny flex items-center font-medium uppercase "><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.707 18.707C11.5195 18.8946 11.2652 19 11 19C10.7349 19 10.4806 18.8946 10.293 18.707L4.29303 12.7016C4.10556 12.5139 4.00024 12.2594 4.00024 11.994C4.00024 11.7286 4.10556 11.474 4.29303 11.2863L10.293 5.28096C10.4816 5.09864 10.7342 4.99776 10.9964 5.00004C11.2586 5.00232 11.5094 5.10758 11.6948 5.29316C11.8803 5.47873 11.9854 5.72977 11.9877 5.9922C11.99 6.25463 11.8892 6.50746 11.707 6.69623L7.41403 10.9931H19C19.2652 10.9931 19.5196 11.0985 19.7071 11.2862C19.8947 11.4739 20 11.7285 20 11.994C20 12.2594 19.8947 12.514 19.7071 12.7017C19.5196 12.8894 19.2652 12.9949 19 12.9949H7.41403L11.707 17.2917C11.8945 17.4794 11.9998 17.7339 11.9998 17.9993C11.9998 18.2647 11.8945 18.5193 11.707 18.707Z" fill="#192434"/>
                </svg>
                </span> <span class="font-bold sm:hidden px-1">Back</span>  </a>
            </div>
            <div class="">
                <h2 class="text-lg work font-semibold p-ripple" v-ripple>Rate Converter</h2>
            </div>
        </div>
        <div id="converter_container" class="mx-auto md:border-0 border rounded-md md:p-0  p-6">
            <div>
                <p class="font-bold py-2 text-lg work">Current Bitcoin Rate</p>
        
                <div class="flex justify-between border  mb-4  p-4 work rounded-md w-full">
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
                        <Input :logo="'/img/btc-icon.svg'" :title="'BTC'" @convert = "convert" v-model="btcInput"/>
                        
                    </div>
                    <div id="input_box" class="mb-4">
                        <Input :logo="'/img/usa-icon.svg'" :title="'USD'" @convert = "convert" v-model="usdInput"/>
                    </div>
                    <div id="input_box" class="mb-4">
                        <p class="font-medium work">You will receive</p>
                        <Input :logo="'/img/ngn-icon.svg'" :title="'NGN'" @convert = "convert" v-model="ngnInput"/>
                    </div>
                </div> 
                <div class="flex items-center flex-wrap justify-center mx-auto">
                    <div @click="() => {$router.push({name: 'Barcode'})}" class="rounded bg-cyan cursor-pointer work text-white mx-2 font-medium shadow-md px-4 py-2">Click to send</div>
                    <div @click="() => {$router.push({name: 'Proof'})}" class="rounded font-medium work cursor-pointer mx-2 border shadow px-4
                     py-2">Already Sent It?</div>
                </div>
            </div>
        </div>
        <!-- <CurrencyConverter /> -->
    </div>
</template>
<script>
import Input from "../components/Input"
import axios from 'axios'
// import CurrencyConverter from '../components/CurrConverter'
export default {
    name: "Converter",
    data() {
        return {
            btcInput : 0,
            usdInput : 0,
            ngnInput : 0,
            liveBtcRate: null,
            BtcRate: null
        }
    },
    components: {
        Input,
        // CurrencyConverter
    },
    methods: {
       async getRate(){
         await axios.get('btc-rate').then((res) => {
             this.liveBtcRate = res.data.data.data
             this.BtcRate = res.data["0"][0].card
             })
            .catch(err => console.log(err))
        },
        convert(data){
            console.log(data)
            const _this = this
            if(data === 'BTC'){
                _this.usdInput = _this.btcInput * parseFloat(_this.liveBtcRate.amount); 
                _this.ngnInput = parseFloat(_this.liveBtcRate.amount) * parseFloat(_this.BtcRate.buy_rate) * _this.btcInput
            }
             else if(data === 'USD'){
                // _this.usdInput = _this.usdInput / parseFloat(_this.liveBtcRate.amount);
                _this.ngnInput = _this.usdInput * parseFloat(_this.BtcRate.buy_rate)
                _this.btcInput = _this.usdInput / parseFloat(_this.liveBtcRate.amount)
            } else if(data === 'NGN'){
                _this.btcInput = _this.ngnInput / (parseFloat(_this.liveBtcRate.amount) * parseFloat(_this.BtcRate.buy_rate))
                _this.usdInput = _this.ngnInput / parseFloat(_this.BtcRate.buy_rate); 
            }
        }
    },
    computed: {

    },
    mounted(){
        this.getRate()
    }
}
</script>
<style lang="scss" scoped>
@media(min-width: 768px){
    #converter_container {
        width: 60%;
        // border: 1px solid grey;
    }
    #rate_update_box {
        // background-color: #
    }
}
</style>
