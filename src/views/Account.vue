<template>
    <div>
        <div class="flex flex-row justify-between items-center mx-4">
      <GoBack />
      <div class="">
        <h2 class="text-lg work rounded font-semibold capitalize p-ripple" >
            Account Details
        </h2>
      </div>
    </div>
    <!-- <AccountForm /> -->
    <AccountForm @ClickAway = "ClickAway" @selectType="selectType" v-if="isShowForm"/>
        <div class="flex space_box justify-center items-center flex-col ">
            <p class="font-medium m-2 text-lg">No Account Details Added yet</p>
                <el-button @click="toggleForm" color="#1D4ED8" style="color: white">Add Account</el-button>
        </div>
    </div>
</template>

<script setup>
    // import AccountForm from '@/components/AccountForm.vue'
    import {ref} from 'vue'
    import AccountForm from '@/components/Acount-Form.vue'
    const isShowForm = ref(false)
    const toggleForm = () => {
        isShowForm.value = !isShowForm.value
    }
    const ClickAway = () => {
        isShowForm.value = false
    }
</script>

<style lang="scss" scoped>
.space_box {
    height: calc(100vh - 150px)
}
</style>