<script>
import Header from './Header.vue'
export default {
    name: 'AdminMainPage',
    components: {
        Header
    }
}
</script>

<template>
    <div id="main-page">
        <Header />
        <div class="px-2">
            <router-view />
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
#main-page {
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
}
</style>