<template>
  <ul class="menu_list">
    <li
      v-for="(list, index) in model"
      :class="$route.name === list.name ? 'active' : list.name"
      :key="index"
      @click="push(list.name)"
      class="cursor-pointer relative"
    >
      <img
        v-if="$route.name === list.name"
        :src="list.activeIcon"
        :alt="list.label"
      />
      <img v-else :src="list.icon" /> <span>{{ list.label }}</span>
      <i class="pi absolute text-sm right-0 pi-angle-right"></i>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Tabmenu",
  methods: {
    push(any) {
      // console.log(any)
      this.$emit("toogleShow", any);
    },
  },
  props: {
    model: Array,
  },
};
</script>
<style lang="scss" scoped>
.menu_list {
  margin: 2em 0;
  li {
    display: flex;
    align-items: center;
    padding: 1em 0;
    margin: 2em 0;
    span {
      margin: 0 1em;
      // font-size: 1.25rem;
      // font-weight:300;
      font-family: "Work Sans", sans-serif;
    }
  }
}
@media (max-width: 425px) {
}
.Logout {
  color: #ff9c00;
}
.active {
  color: #33c2d3 !important;
  img {
    color: #33c2d3;
  }
}
</style>
