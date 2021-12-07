<script setup>
// import ProfilePic from "@/components/reusables_/ProfilePic.vue";
import {useStore} from 'vuex'
const store = useStore()
const user = store.getters['auth/user']
</script>

<template>
  <div class="px-2">
    <div class="flex flex-row justify-between items-center mx-4">
      <div class="my-1">
        <GoBack />
      </div>
      <div class="">
        <h2 class="text-lg work font-semibold p-ripple">Profile</h2>
      </div>
    </div>
   
    <div class="md:grid  flex items-center justify-center grid-cols-2">
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
                    <label class="font-medium">Fullname</label>
                    <input class="rounded capitalize p-3" type="text" :value="user.fullname" disabled/>
                </div>
                <div class="input_box">
                    <label class="font-medium">Email</label>
                    <input class="rounded p-3" type="text" :value="user.email" disabled/>
                </div>
                <div class="input_box">
                    <label class="font-medium">Phone</label>
                    <input class="rounded p-3" :value="user.phone" type="text" disabled/>
                </div>
            </div>
            <div class="float-right">
                <button class="px-4 py-2 shadow-lg bg-cyan rounded text-white font-medium">Edit Profile</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.box_container {
    // width: 80%;
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
