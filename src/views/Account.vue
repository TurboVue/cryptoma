<template>
  <div class="px-2">
    <div class="flex flex-row justify-between items-center m-4">
      <GoBack />
      <div class="">
        <h2 class="text-lg work rounded font-semibold capitalize p-ripple">
          Payment Information
        </h2>
      </div>
    </div>
    <!-- <AccountForm /> -->
    <AccountForm @FormClickAway="ClickAway" v-if="isShowForm" />

    <div class="my-4 box_container p-6 shadow-lg rounded border">
      <h2 class="work font-bold text-lg">Account Basic</h2>
      <div>
        <div class="flex py-4 mb-2">
          <div class="w-6 mr-1 h-2 bg-cyan"></div>
          <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
          <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
        </div>
        <div class="input_card_container">
          <div class="input_box">
            <label class="font-medium">Bank Name</label>
            <input
              class="rounded capitalize p-3"
              type="text"
              :value="paymentDetails.bank"
              disabled
            />
          </div>
          <div class="input_box">
            <label class="font-medium">Account Number</label>
            <input
              class="rounded p-3"
              type="text"
              :value="paymentDetails.account_no"
              disabled
            />
          </div>
          <div class="input_box">
            <label class="font-medium">Account Name</label>
            <input
              class="rounded p-3"
              :value="paymentDetails.account_name"
              type="text"
              disabled
            />
          </div>
        </div>
        <div class="">
          <button
          @click="toggleForm"
            class="px-4 py-2 shadow-lg bg-cyan rounded text-white font-medium"
          >
            Edit Details
          </button>
        </div>
    </div>
        
    </div>
    
  </div>
</template>

<script setup>
// import AccountForm from '@/components/AccountForm.vue'
import { ref, onErrorCaptured } from "vue";
import AccountForm from "@/components/Acount-Form.vue";
import { useStore } from "vuex";
const store = useStore();
const paymentDetails = store.getters["auth/payment_details"];
const isShowForm = ref(false);
const toggleForm = () => {
  isShowForm.value = !isShowForm.value;
};
const errMsg = ref(null)
    onErrorCaptured(() => {
      errMsg.value = 'Uh oh. Something went wrong!'
      return true
    })
const ClickAway = () => {
  console.log("jf");
  isShowForm.value = false;
};
</script>

<style lang="scss" scoped>
.space_box {
  height: calc(100vh - 150px);
}


.box_container {
  max-width: 800px;
  margin: 0 auto;
}
.input_card_container {
  margin: 1em 0;
  .input_box {
    margin-bottom: 1em;
    label {
      display: block;

      font-medium: 500;
    }
    input {
      width: 100%;
      // text-transform: capitalize;
      // border: .5px solid grey;
    }
  }
}
</style>
