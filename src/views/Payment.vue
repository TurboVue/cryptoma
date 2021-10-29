<template>
    <div class="Payment_container">
        
    </div>
</template>
<script>
import axios from "axios";
import {mapGetters} from 'vuex'
export default {
  name: "Payment",
  data() {
    return {
      isShow: false,
      banks: [{ id: 1, code: "none", name: "no available banks" }],
      bankCode: "",
        details: [{
          bank: "Select Bank",
          account_no: "",
          account_name: "",
        }],
    };
  },
  computed: {
    ...mapGetters({
    authenticated: 'auth/authenticated'
    })
  },
  methods: {
    ClickAway() {
      this.isShow = false;
    },
    
    selectBank(any, code) {
      this.isShow = !this.isShow;
      this.details[0].bank = any;
      this.bankCode = code;
      console.log(this.bankCode);
    },
    async fetchBanks() {
      axios
        .get("/banks")
        .then(response => (this.banks = response.data.data))
        .catch(err => console.log(err));
    },
    async verify() {
      var data = {
        "account_number": this.details[0].account_no,
        "account_bank": this.bankCode 
             };
     await axios
        .post(
          "https://cryptoexbe.herokuapp.com/api/v1/banks",
          data         
        )
        .then(response => this.details[0].account_name = (response.data.data.account_name))
        .catch(err => console.log(err));
    },
  async getAccount() {
            await axios.get('users/account', {
                    headers: {
                        'Authorization': 'Bearer ' + this.authenticated
                    }
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data.data.length > 0){
                      this.details = response.data.data
                    }
                    // else {

                    // }
                        //      console.log(response.status);
                        //      console.log(response.statusText);
                        //      console.log(response.headers);
                        //      console.log(response.config);
                }).catch(err => {
                    console.log('failed', err)
                    // commit('SET_ERROR', err.response.data.errors)


                });

        },
        async saveAccount() {
          const {accnumber} = Object.fromEntries(new FormData(event.target));
                let data = {
              "account_no": accnumber,
              "bank": this.details.bankName,
              "account_name": this.details.accName
              }
            await axios.post('users/account', data, {
                    headers: {
                        'Authorization': 'Bearer ' + this.authenticated
                    }
                })
                .then((response) => {
                    console.log(response.data);
                    this.details = response.data.data
                        //      console.log(response.status);
                        //      console.log(response.statusText);
                        //      console.log(response.headers);
                        //      console.log(response.config);
                }).catch(err => {
                    console.log('failed', err)


                });

        },
   saveData(){
      
      console.log()
      this.saveDetails()
    },
    toggleList() {
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    this.fetchBanks();
    this.getAccount();
  },
};
</script>
<style lang="scss" scoped>
.Payment_container {
  width: 100%;
}
.input_box {
  margin: 1.5em 0;
  input, .input {
    height: 60px;
    color: grey;
    border-radius: .4em;
    font-size: 1.2rem;
    font-weight: 300;
  }
}
</style>
