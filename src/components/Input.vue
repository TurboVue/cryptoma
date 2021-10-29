<template>
    <label for="id" class="grid hover:ring-2 items-center w-full border-cyan-200 border text-tiny px-4 py-2 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none">
        <div class="flex ">
            <img :src="logo" class="" alt="btc"> <span class="text-base px-2 work align-baseline">{{title}}</span>
        </div>
        <input type="number" name="name" :value="modelValue" step="any"  @input="valChange" id="id" class="work text-right w-full bg-white outline-none flex-grow p-2 "/>
       
    </label>

</template>
<script>
export default {
    name: "Input",
    data(){
        return {

        }
    },
    methods: {
        valChange(e){
            console.log(e.target.value)
            const data = this.title
            this.$emit('update:modelValue', parseFloat(e.target.value))
             this.$emit('convert', data)
        }
    },
    props: {
        logo:  String,
        title: String,
        modelValue: Number
            

    }
}
</script>
<style lang="scss" scoped>
    input[type=number]{
        font-size: 1.2rem;
    }
    label {
        grid-template-columns : 70px 1fr;
    }
</style>