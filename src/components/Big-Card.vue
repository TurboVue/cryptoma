<template>

         <div class="card_big card shadow-md mx-auto flex flex-col justify-center bg-white items-center border fade-in m-4 p-4 h-40 rounded-md">
            <slot></slot>
            </div>
         
</template>
<script>
export default {
    name: 'BigCard',
    data() {
        return {

        }
    },
    computed: {
        
    },
    props: {
        selectedCard : Object
    }
}
</script>

<style lang="scss" scoped>
    .card_big {
  height:10em;
  background-size: 8em;
  background-position: right bottom;
    //background-color: #00C2FF;
  // box-shadow: 0px 0px 30px #e4e8ef;
  // filter: drop-shadow(0px 0px 15px #e4e8ef);
  background-repeat: no-repeat;
  //max-height: 12em;
}
.card-details p {
    font-size: 1.25rem;
}
@media (max-height: 768px){
    .card_big {
        height: 12em;
        max-width: 18em;
    }
}
.tracking-wider-1::before {
    position: absolute;
    left: 0;
    content: "";
    bottom: 0;
    width: 5%;
    background-color: white;
    height: 1px;
    transition: .5s ease-in-out;
}

</style>