<template>
    <div>
        <div class="flex space_box justify-center items-center flex-col ">
            <p class="font-medium m-2 text-lg">No Account Details Added yet</p>
                <el-button @click="() => $router.push({'path': '/admin'})" color="#1D4ED8" style="color: white">Add Account</el-button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.space_box {
    height: calc(100vh - 150px)
}
</style>