<template>
<div class="overlay">
    <div class="modal fadeUp rounded-xl relative" v-click-away="close">
      <div @click="close" class="absolute right-0 top-0 m-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="#111827"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="font-bold text-lg work">Card Category</p>
      <div >
          <el-scrollbar view-class="modal_guts" height="400px">
              <div class="p-4">
                  <button v-for="(type, index) in cardTypes" @click="selectedType(type)" :key="index" class="border w-full slelct-none focus:ring focus:border-cyan-300 item p-4 hover:black rounded-md my-2">
                    <p class="font-medium">{{ type.card.type }} {{ type.card.priceRange }}</p>
                </button>
              </div>
          
      </el-scrollbar>
      </div>
      
    </div>
  </div>
</template>

<script >
    export default {
        name: 'ListModal',
        setup(props, context){
            const close = () => {
                // console.error('hdjd')
            context.emit("ClickAway");
            }
            const selectedType = (type) => {
                context.emit('selectType', type)
                close()
            }
            return {
                close,
                selectedType
            }
        },
        props: {
            cardTypes: {
                type: Array,
                default: () => {return []}
            }
        }
    }
</script>

<style lang="scss" scoped>
* {
    transition: .15s ease-in-out;
}
.modal {
  max-width: 600px;
  width: 90%;
  padding: 1em;
  background-color: white;
  
  max-height: 100%;
  position: fixed;
  transition: 0.25s ease-in-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modal_guts {
      width: 100%;
      padding:.5em;
  height: 100%;
  // background: red;

  /* let it scroll */
  overflow: auto;

  }
}
</style>