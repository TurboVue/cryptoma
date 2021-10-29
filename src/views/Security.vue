<template>
    <div class="Security_container">
        <form action="">
    <div class="input_box">
        <label for="old" class="font-medium">Old Password</label>
        <input id="old" v-model="data.old" class="hover:ring-2 items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none" type="password" />
    </div>
    <div class="input_box">
        <label for="new" class="font-medium">New Password</label>
        <input id="new" v-model="data.new" class="hover:ring-2 items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none" type="password" />
    </div>
        <div class="input_box">
        <label for="confirm" class="font-medium">Confirm Password</label>
        <input id="confirm" v-model="data.confirm" class="hover:ring-2 items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none" type="password" />
    </div>
    <button class="mx-2 px-4 py-2 cursor-pointer text-tiny rounded text-white bg-cyan-500 focus:outline-none hover:bg-cyan-400">Save</button>
</form>
    </div>
</template>
<script>
export default {
    name: 'Security',
    data(){
        return {
            data: {
                old: '',
                new: '',
                confirm: ''
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.Security_container {
    width: 100%;
}
.input_box {
    margin: 1.5em 0;
   
}
</style>
