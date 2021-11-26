<script>
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import {ref} from 'vue'
export default {
    name: 'ImageCropper',
    props: {
        img: {
            type: String,
            default: undefined
        },
        selectedImgData: {
            type: Object,
            default: () => {return {}}
        }
    },
    setup(props, context){
        // const img = ref("https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80")
        const cropper = ref(null)
        const image = ref(null)
        const coordinates = ref({
				width: 0,
				height: 0,
				left: 0,
				top: 0,
			})
        const change = ({coordinates, canvas}) => {
            console.log(coordinates, canvas);
        }
        const crop = () => {
			const { canvas, coordinates } = cropper.value.getResult();
			coordinates.value = coordinates;
			// You able to do different manipulations at a canvas
			// but there we just get a cropped image, that can be used 
			// as src for <img/> to preview result
			image.value = canvas.toDataURL();
            context.emit('hideCropper', image.value)
            // close()
		}
        const close = () => {
            context.emit("hideCropper")
        }
        return {
            // img,
            close,
            image, 
            crop,
            coordinates,
            change,
            cropper
        }
    },
    components: {
		Cropper,
	},
}
</script>
<template>
    <div class="img_cropper getting-result-second-example" >
        
        <div class="max" v-click-away="close">
            <button class="crop-button bg-cyan p-1 rounded absolute z-10 m-2 top-0 right-0 text-sm capitalize font-medium px-4 text-white shadow" @click="crop()">crop</button>
            <cropper
		:src="img || selectedImgData.img"
        ref="cropper"
        :stencil-props="{
                aspectRatio: 16/8,
            }"
		@change="change"
	/>
        </div>
        
    </div>
    
</template>
<style lang="scss">
.max {
    max-width: 768px;
    position:relative;
    width: 100%;
}
    .img_cropper {
        position: fixed !important;
        background-color: #00000026;
        top: 0;
        left: 0;
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        z-index: 20;
    }
     .vue-advanced-cropper__background, .vue-advanced-cropper__foreground {
         background-color: #00000026;
     }
     
</style>