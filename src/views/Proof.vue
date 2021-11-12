<template>
    <div>
       <div class="flex flex-row justify-between items-center ">
            <div class=" my-1">
                <a href="#" class="py-2 text-gray-600 text-tiny flex items-center font-medium uppercase "><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.707 18.707C11.5195 18.8946 11.2652 19 11 19C10.7349 19 10.4806 18.8946 10.293 18.707L4.29303 12.7016C4.10556 12.5139 4.00024 12.2594 4.00024 11.994C4.00024 11.7286 4.10556 11.474 4.29303 11.2863L10.293 5.28096C10.4816 5.09864 10.7342 4.99776 10.9964 5.00004C11.2586 5.00232 11.5094 5.10758 11.6948 5.29316C11.8803 5.47873 11.9854 5.72977 11.9877 5.9922C11.99 6.25463 11.8892 6.50746 11.707 6.69623L7.41403 10.9931H19C19.2652 10.9931 19.5196 11.0985 19.7071 11.2862C19.8947 11.4739 20 11.7285 20 11.994C20 12.2594 19.8947 12.514 19.7071 12.7017C19.5196 12.8894 19.2652 12.9949 19 12.9949H7.41403L11.707 17.2917C11.8945 17.4794 11.9998 17.7339 11.9998 17.9993C11.9998 18.2647 11.8945 18.5193 11.707 18.707Z" fill="#192434"/>
                </svg>
                </span> <span class="font-bold sm:hidden px-1">Back</span>  </a>
            </div>
            <div class="">
                <h2 class="text-lg work font-semibold p-ripple" v-ripple></h2>
            </div>
        </div>
        <div id="proof_container" class="mx-auto my-2 md:shadow-none shadow rounded-md md:p-0  p-6">
            <div id="proof_box" class="  flex flex-col   text-center  justify-between items-center">
                <div>
                    <template v-if="isUploaded">
                        <div class="border-dashed my-10 relative px-4 py-6 rounded flex flex-col text-center  justify-between items-center border-4">
                            <div @click="isUploaded = !isUploaded" class="flex justify-center top-0 right-0 absolute h-8 w-8 items-center cursor-pointer rounded-2xl bg-red-500 text-white"><i class="pi pi-times"></i></div>
                            <img id="preview"/>
                        </div>
                    </template>
                    <template v-else>
                        <div class="border-dashed my-10 px-4 py-6 rounded flex flex-col text-center  justify-between items-center border-4">

                            <img src="/img/proof.svg" />
                            <p class="py-4 work">Kindly Upload a Screenshot of successful Transaction</p>
                            <label for="image" class="bg-cyan flex justify-center h-8 w-8 items-center cursor-pointer rounded-2xl text-white work"><i class="pi pi-plus"></i></label>
                            <input name="image" id="image" type="file" ref="file" accept="image/*" @change="preview" hidden/>
                        </div>
                    </template>
                </div>
                <!-- //{{amount + ',' + img}} -->
                 <Input :logo="'/img/btc-icon.svg'" :title="'BTC'"  v-model="amount"/>
                 <div @click="upload" class="rounded bg-cyan cursor-pointer text-white mx-2 my-4 work font-medium shadow-md px-4 py-2">Submit</div>
            </div>

        </div>
    </div>
</template>
<script>
// import {ref} from 'vue'
// import axios from 'axios'
import {mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    name: 'Proof',
    data(){
        return {
            isUploaded : false,
            
                amount: 0,
            
            img: null
        }
    },
    components: {
        Input,
        
    },
    inject: ['showSuccess'],
    methods: {
        ...mapActions({
            isSpin : 'cards/ToggleLoader'
        }),
        preview(){
            const img = this.$refs.file.files[0]
            this.img = img
            this.isUploaded = true;
            var reader = new FileReader();
            reader.onload = () => {
                 let preview_box = document.getElementById('preview');
                preview_box.src = reader.result
            };
            reader.readAsDataURL(img)
        },
       async upload(){
           this.isSpin()
            let formData = new FormData()
        // <!-- WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST -->
            formData.append('shot', this.img)
            formData.append('amount', this.amount)
            console.log(formData)
            // await axios.post('users/proof-make', formData,
            // { headers: {
            //   'Content-Type': 'multipart/form-data'
            // }}).then(response => console.log(response))
            this.isSpin()
            this.showSuccess.val = !this.showSuccess.val
        }
    }

}
</script>
<style lang="scss" scoped>
@media(min-width: 768px){
    #proof_container {
        width: 60%;
        // border: 1px solid grey;
    }
    #proof_box {
        max-width: 20em;
        margin: 0 auto;
        // background-color: #
        background: #FFFFFF;

    }
}

</style>