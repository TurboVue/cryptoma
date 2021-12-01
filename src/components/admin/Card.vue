<template>
<router-link class="" :to="'/admin/category/' + card.card.uuid">
    <div class="card
        border
        hover:shadow-lg
        shadow
        flex flex-row
        justify-center
        items-center
        0
        fade-in
        p-4
        w-full
        lg:w-full
        bg-white
        rounded-md" :style='{"--order": index }'>
            <div class="card-logo w-8 my-3">
                <img class="w-full" :src="'/img/cards/' + imgType + '.png'" alt="">
            </div>
            <div class="card-details text-center px-2 ">
                
                <p class="relative tracking-wider work text-gray-800 font-medium">{{card.card.name}}</p>
            </div>
        </div>
        </router-link>
</template>
<script>
import  {ExactCardImg}  from '@/utils/cards';

export default {
    name: 'Card',
    props: ['card','index'],
emits: ['toggleSide'],
    computed: {
        imgType(){
            
           return ExactCardImg(this.card.card.name)
            
        }
    },
    methods: {
        toggleSide(any){
           
            this.$emit('toggleSide', any)
        }
    },
}
</script>
