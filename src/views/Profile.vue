<template>
  <div class="profile_container">
    <form action="" @submit.prevent="save">
      {{ isUser }}
      <div class="input_box">
        <label for="fullname" class="font-medium work">Fullname</label>
        <input
          id="fullname"
          name="fullname"
          class="
            hover:ring-2
            items-center
            w-full
            border-cyan-200 border
            text-base
            work
            px-4
            py-3
            rounded-md
            focus:border-cyan-500 focus:shadow-outline
            outline-none outline-none
          "
          type="text"
          v-model="user.fullname"
        />
      </div>
      <div class="input_box">
        <label for="email" class="font-medium work">Email Address</label>
        <input
          id="email"
          name="email"
          class="
            hover:ring-2
            items-center
            w-full
            border-cyan-200 border
            text-base
            work
            px-4
            py-3
            rounded-md
            focus:border-cyan-500 focus:shadow-outline
            outline-none outline-none
          "
          type="email"
          v-model="user.email"
        />
      </div>
      <div class="input_box">
        <label for="number" class="font-medium work">Phone number</label>
        <input
          id="number"
          name="phone"
          class="
            hover:ring-2
            items-center
            w-full
            border-cyan-200 border
            text-base
            work
            px-4
            py-3
            rounded-md
            focus:border-cyan-500 focus:shadow-outline
            outline-none outline-none
          "
          type="text"
          v-model="user.phone"
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
      >
        Save
      </button>
    </form>
  </div>
</template>
<script>
import { ProfileFormSubmit } from "../utils/settings";
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {
      isUser: "",
      //     detail: {

      //     fullname: 'name',
      //     email: 'email',
      //     tel: 'phone'
      // }
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  methods: {
    save() {
      // const _ = this.detail
      return ProfileFormSubmit(event);
      // const {fullname, email, phone} = Object.fromEntries(new FormData(event.target));
      // this.detail.fullname = fullname;
      // this.detail.email = email;
      // this.detail.phone = phone
      // console.log(this.detail)
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 786px) {
  .profile_container {
    width: 80%;
  }
}

.input_box {
  margin: 1.5em 0;
  //     input {
  //     height: 60px;
  //     color: grey;
  //     border-radius: .4em;
  //     font-size: 1.2rem;
  //     font-weight: 300;
  //   }
}
</style>
