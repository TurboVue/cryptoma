<template>
  <div>
    <Spinner v-if="isLoading"/>
    <router-view />
  </div>
  
</template>
<script >
import Spinner from '@/components/Spinner.vue'
// import refresh from "@/services/refresh";
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  setup(){
    const isLoading = ref(false)
    const store = useStore()
    const router = useRouter()
    const loading = async () => {
      isLoading.value = true
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(store.dispatch("auth/attempt", JSON.parse(sessionStorage.getItem("token"))).then(() => {
            // console.log();
            isLoading.value = false
            // router.push({ path: "/" });
        })
        .catch(() => {
            // console.log(err);
            isLoading.value = false
            router.push({ path: "/login" });
        })
        )
        }, 1000)
      )
    }
    loading()
    return {
      isLoading
    }
  },
  components: {
    Spinner
  }
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";
</style>
