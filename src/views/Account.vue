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
    <AccountForm @FormClickAway = "ClickAway" v-if="isShowForm"/>
        <div class="border rounded shadow-lg p-2">
            <button @clikc="toggleForm"></button>
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
        console.log('jf')
        isShowForm.value = false
    }
</script>

<style lang="scss" scoped>
.space_box {
    height: calc(100vh - 150px)
}
</style>