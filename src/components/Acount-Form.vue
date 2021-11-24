<template>
  <div class="flex items-center h-full justify-center">
    <div id="overlay">
      <form class="form">
        <div class="input_box">
          <label for="bank" class="font-medium">Account Bank</label>
          <div class="relative" v-click-away="ClickAway">
            <div
              @click="toggleList"
              class="
                w-full
                input
                border-grey-400 border
                text-tiny
                capitalize
                px-4
                py-4
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
                overflow-scroll
              "
            >
              <li
                class="
                  px-2
                  py-3
                  hover:bg-gray-100
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
          <label for="number" class="font-medium">Account Number</label>
          <input
            id="number"
            class="
              w-full
              border-grey-400 border
              text-tiny
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
          <label for="name" class="font-medium capitalize">Account Name</label>
          <input
            id="name"
            class="
              w-full
              border-grey-400 border
              uppercase
              text-tiny
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
            text-tiny
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
#overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 300;
  background-color: #00000026;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}
.form {
  max-width: 500px;
  width: 90%;
  padding: 1em;
  border-radius: 0.5em;
  background-color: white;
}
.input_box {
  margin: 1.5em 0;
  input,
  .input {
    height: 60px;
    color: grey;
    border-radius: 0.4em;
    font-size: 1.2rem;
    font-weight: 300;
  }
}
</style>
