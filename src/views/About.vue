<template>
 <div id="body">
   <Header />
   <!-- <Sidenav /> -->
   <main>
      <router-view /> 
   </main>
 </div>
</template>
<script>
import Header from '../components/Header.vue';
// import Sidenav from '../components/Sidenav.vue';
export default {
  components: {
    Header,
    // Sidenav
  }
}
</script>


