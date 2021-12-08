<template>
  <div class="flex items-center h-full justify-center">
    <div class="overlay">
      <form class="form relative" @submit.prevent = "submit" v-click-away="FormClickAway">
        <div v-if="$route.path === '/account-details'" @click="FormClickAway" class="absolute right-0 top-0 m-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p class="font-bold text-lg work">Add Account Details</p>
        <div class="input_box">
          <!-- <label for="bank" class="font-medium">Account Bank</label> -->
           <!-- <input
            id="name"
            class="
              w-full
              border-grey-400 border
              
              px-4
              py-2
              rounded-sm
              focus:border-cyan-500 focus:shadow-outline
              outline-none outline-none
            "
            type="text"
            name="name"
            v-model="details.bank"
            placeholder="Account Name"
            
            required
          /> -->
           <div class="relative" v-click-away="ClickAway">
            <div
              @click="toggleList"
              class="
                w-full
                input
                border-grey-400 border
                p-4
                capitalize
                font-medium
                rounded-sm
                focus:border-cyan-500 focus:shadow-outline
                outline-none outline-none
              "
            >
              {{ details.bank }}
            </div>

            <ul
              v-show ="isShow"
              class="
                codes
                rounded
                border
                shadow-lg
                bg-white
                w-full
                p-2
                my-2
                overflow-auto
              "
            >
              <li
                class="
                  px-2
                  py-3
                  hover:bg-gray-100 hover:shadow
                  rounded
                  text-lg
                  font-medium
                  divide-y
                  flex
                  items-center
                  relative
                  cursor-pointer
                "
                v-for="(bank, index) in banks"
                @click="selectBank(bank.name, bank.code)"
                :key="index"
              >
                <div class="px-2 text-base text-gray-800">{{ bank.name }}</div>
              </li>
            </ul>
          </div> 
        </div>
        <div class="input_box">
          <!--  <label for="number" class="font-medium">Account Number</label> -->
          <input
            id="number"
            class="
              w-full
              border-grey-400 border
              px-4
              py-2
              rounded-sm
              focus:border-cyan-500 focus:shadow-outline
              outline-none outline-none
            "
            type="text"
            name="accnumber"
            :disabled = "isNext"
            @blur="v$.account_no.$touch"
            v-model="details.account_no"
            placeholder="Account Number"
            @change="verify"
            required
            @click="clear"
          />
          
              <div class="error_box" v-if="v$.account_no.$errors.length">
                <span
                  v-for="(error, index) of v$.account_no.$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg
                    class="mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
        </div>
        <div class="input_box">
          <!--  <label for="name" class="font-medium capitalize">Account Name</label> -->
          <input
            id="name"
            class="
              w-full
              border-grey-400 border
              
              px-4
              py-2
              rounded-sm
              focus:border-cyan-500 focus:shadow-outline
              outline-none outline-none
            "
            type="text"
            name="name"
            v-model="details.account_name"
            placeholder="Account Name"
            disabled
            required
          />
        </div>
        <div class="mx-auto">
          <button
           
            type="submit"
            class="dark rounded mx-auto hover:opacity-90 flex items-center px-4 py-2 text-white font-medium"
          >
            <BtnSpinner v-if="isSpin" /><span class="px-2">Add Account</span>
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>
<script setup>
// import axios from "axios";
import { ref, reactive, defineEmits } from "vue";
// import BtnSpinner from "@/components/reusables_/BtnSpinner.vue";
import useVuelidate from "@vuelidate/core";
import {
  minLength,
  numeric,
  required
} from "@vuelidate/validators";
import { ElNotification,ElMessage } from "element-plus";
import { useStore } from "vuex";
// import {mapGetters} from 'vuex'

const isShow = ref(false);
const isNext = ref(true)
const banks = ref(null);
const isSpin = ref(false)
const bankCode = ref("");
const details = reactive(
  {
    bank: "Select Bank",
    account_no: "",
    account_name: "",
  },
);
const rules =  {
  account_no: { required, numeric, min: minLength(10) }
}
import {useRoute} from 'vue-router'
const v$ = useVuelidate(rules, details)
const emit = defineEmits(['toggleModal', 'FormClickAway'])
const store = useStore();
 const ClickAway = () => {
   isShow.value = false;
 };
 const toggleList = () => {
   isShow.value = !isShow.value;
 };
const route = useRoute()
const submit = async () => {
  isSpin.value = true;
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            store.dispatch('auth/uploadPaymentDetails', details).then(() => {
              store.dispatch('auth/attempt').then(() => {
                  ElNotification({
                  title: "Successful",
                  type: "success",
                  message: "Account Details Added Successfully",
                  // duration: 0
                });
                isSpin.value = false
              })
            }).catch((err) => {
                ElMessage({
                  title: "Error",
                  type: "error",
                  message: err.response.data.message,
                  // duration: 0
                })
                isSpin.value = false
            })
          )}, 1000));
  isSpin.value = false
}
const fetchBanks = () => {
  
  store.dispatch("auth/getBanks").then((res) => {
    banks.value = res.data.data
  });
};
// const close = () => {
//       emit("toggleModal");
//     }
    const FormClickAway = () => {
      if(route.path === '/account-details')
       emit("FormClickAway");
    }
 const selectBank = (any, code) => {
   isShow.value = !isShow.value;
   details.bank = any;
   bankCode.value = code;
   isNext.value = false
   console.log(bankCode.value);
 };
const verify = () => {
  const data = {
    account_number: details.account_no,
    account_bank: bankCode.value,
  };
  store
    .dispatch("auth/verifyBankDetails", data)
    .then(
      (response) =>
        (details.account_name = response.data.data.acc_name)
    )
    .catch((err) => console.log(err));
};
fetchBanks();
</script>
<style lang="scss" scoped>
.form {
  max-width: 500px;
  width: 90%;
  padding: 2em;
  border-radius: 0.5em;
  background-color: white;
}
.input_box {
  margin: 1.5em 0;
  input,
  .input {
    height: 60px;
    background-color: white !important;
    border-radius: 0.4em;
  }
}
</style>
