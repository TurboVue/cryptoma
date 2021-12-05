<template>
  <div class="calculator-container">
    <label
      for="rate1-input"
      class="
        input1
        my-2
        rounded-lg
        px-2
        flex flex-row
        border border-1
        items-center
        justify-between
      "
    >
      <div class="rates-input flex flex-row">
        <img src="/img/btc-icon.svg" alt="btc" /><input
          type="text"
          id="rate1-input"
          name=" rate1-input"
          class="rate-value p-1 m-2"
        />
      </div>
      <p class="text-thin cursor-not-allowed font-medium">
        BTC
        <i
          class="pi pi-angle-down font-normal text-gray-400 align-middle mx-1"
        ></i>
      </p>
    </label>

    <div
      class="
        input1
        my-2
        rounded-lg
        px-2
        flex flex-row
        border border-1
        items-center
        justify-between
      "
    >
      <div class="rates-input flex flex-row">
        <img :src="selected.icon" :alt="selected.currency" /><input
          type="text"
          id="rate2-input"
          name=" rate2-input"
          class="rate-value p-1 m-2"
        />
      </div>
      <p
        label="Toggle"
        class="text-thin cursor-pointer uppercase font-medium"
        @click="toggle"
      >
        {{ selected.currency }}
        <i
          class="pi pi-angle-down font-normal text-gray-400 align-middle mx-1"
        ></i>
      </p>
    </div>
    <Menu :model="items" ref="menu" :popup="true">
      <template #item="{ item }">
        <div
          @click="item.command"
          class="
            cursor-default
            flex flex-row
            items-center
            p-2
            hover:bg-cyan-100
          "
        >
          <img class="px-2" :src="item.img" />
          <p class="font-medium text-sm">{{ item.label }}</p>
        </div>
      </template>
    </Menu>
  </div>
</template>
<script>
import Menu from "primevue/menu";
export default {
  name: "CurrencyConverter",
  data() {
    return {
      selected: {
        icon: "/img/usa-icon.svg",
        currency: "usd",
      },
      items: [
        {
          label: "Usd",
          img: "/img/usa-icon.svg",
          command: () => {
            console.log("me");
            this.selected.icon = "/img/usa-icon.svg";
            this.selected.currency = "usd";
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Ngn",
          img: "/img/ngn-icon.svg",
          command: () => {
            this.selected.icon = "/img/ngn-icon.svg";
            this.selected.currency = "ngn";
            this.$toast.add({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
  components: {
    Menu,
  },
};
</script>
<style lang="scss" scoped>
.calculator-container {
  max-width: 21em;
}
</style>
