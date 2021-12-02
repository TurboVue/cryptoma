<template>
  <div class="flex items-center h-full justify-center">
    <div class="overlay">
      <form class="form">
        <div @click="close" class="absolute right-0 top-0 m-4">
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
              {{ details[0].bank }}
            </div>

            <ul
              v-if="isShow"
              class="
                codes
                rounded
                border
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
                  hover:bg-gray-100
                  hover:shadow
                  rounded
                  text-lg font-medium
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
            v-model="details[0].account_no"
            @change="verify"
            required
            @click="clear"
          />
        </div>
        <div class="input_box">
          <!--  <label for="name" class="font-medium capitalize">Account Name</label> --> 
          <input
            id="name"
            class="
              w-full
              border-grey-400 border
              uppercase
              
              px-4
              py-2
              rounded-sm
              focus:border-cyan-500 focus:shadow-outline
              outline-none outline-none
            "
            type="text"
            name="name"
            v-model="details[0].account_name"
            disabled
            required
          />
        </div>
        <button
          class="
            mx-2
            px-4
            py-2
            cursor-pointer
            
            rounded
            text-white
            bg-cyan-500
            focus:outline-none
            hover:bg-cyan-400
          "
          @click.prevent="checkPay()"
        >
          Save
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
// import {mapGetters} from 'vuex'
export default {
  name: "Account-Form",
  data() {
    return {
      isShow: false,
      banks: [{ id: 1, code: "none", name: "no available banks" }],
      bankCode: "",
      details: [
        {
          bank: "Select Bank",
          account_no: "",
          account_name: "",
        },
      ],
    };
  },
  computed: {},
  methods: {
    ClickAway() {
      this.isShow = false;
    },
    ...mapActions({
      checkPay: "auth/toggleForm",
    }),
    async fetchBanks() {
      axios
        .get("/banks")
        .then((response) => (this.banks = response.data.data))
        .catch((err) => console.log(err));
    },
    toggleList() {
      this.isShow = !this.isShow;
    },
    selectBank(any, code) {
      this.isShow = !this.isShow;
      this.details[0].bank = any;
      this.bankCode = code;
      console.log(this.bankCode);
    },
    async verify() {
      var data = {
        account_number: this.details[0].account_no,
        account_bank: this.bankCode,
      };
      await axios
        .post("https://cryptoexbe.herokuapp.com/api/v1/banks", data)
        .then(
          (response) =>
            (this.details[0].account_name = response.data.data.account_name)
        )
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.fetchBanks();
    // this.getAccount();
  },
};
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
    
    border-radius: 0.4em;
    
  }
}
</style>
