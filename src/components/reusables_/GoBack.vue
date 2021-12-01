<template>
  <div
    @click="$router.go(-1)"
    class="back_btn cursor-default rounded hover:bg-gray-100 p-2 select-none flex items-center"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 16L3 12M3 12L7 8M3 12L21 12"
        stroke="#111827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="px-2 sm:block hidden font-medium">Back</span>
  </div>
</template>
<script>
export default {
  name: "GoBack",
};
</script>
<style lang="scss" scoped>
.back_btn:hover {
  animation: direct-left 0.7s infinite ease-in-out;
}
@keyframes direct-left {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
