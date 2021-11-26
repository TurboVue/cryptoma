<template>
  <div id="Giftcard-page" class="flex-grow md:py-2 py-10 px-6 md:px-2">
    <div class="flex flex-row justify-between items-center mx-4">
      <div class="my-1">
        <GoBack />
      </div>
      <div class="">
        <h2 class="text-lg work font-semibold p-ripple" v-ripple>Giftcard</h2>
      </div>
    </div>
    <div class="">
      <input
        id="input1"
        autocomplete="off"
        @input="filter"
        class="
          w-full
          m-4
          border-gray-200 border
          px-4
          py-3
          work
          shadow
          rounded-md
          focus:border-cyan-500 focus:shadow-outline
          outline-none
        "
        type="text"
        placeholder="Enter your giftcard"
      />
    </div>
    <div
      v-if="skeleton"
      class="
        card-container
        lg:grid
        grid-cols-3
        gap-4
        sm:grid-cols-2
        flex flex-wrap
      "
    >
      <Skeleton
        :style="{ maxWidth: '12em' }"
        width="100%"
        height="12em"
        v-for="i in 12"
        :key="i"
      ></Skeleton>
    </div>
    <div
      class="card-container lg:grid grid-cols-4 sm:grid-cols-2 grid flex-wrap"
    >
      <template v-if="showAll">
        <Card
          v-for="(card, index) in names"
          :key="index"
          @toggleSide="toggleSide"
          :card="card"
          :index="index"
        />
      </template>
      <template v-if="!showAll">
        <Card
          v-for="(card, index) in searchCards"
          :key="index"
          @toggleSide="toggleSide"
          :card="card"
          :index="index"
        />
      </template>
    </div>
    <!-- <ScrollPanel style="width: 100%; height: 50vh; z-index:5; position:fixed"> -->
    <!-- <Upload :class=" isSideCart ? 'slide-out relative' : ' relative' " @closeSide = 'closeSide' :name="selectedCard" :types = "types"/> -->
    <!-- </ScrollPanel> -->
  </div>
</template>
<script>
import Skeleton from "primevue/skeleton";
import Card from "../components/Card";
// import ScrollPanel from 'primevue/scrollpanel';
// import Upload from '../components/Upload.vue';
// import axios from 'axios'
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
// import InputText from 'primevue/inputtext';
export default {
  name: "Giftcard",
  data() {
    return {
      cards: null,
      showAll: true,
      searchCards: [],
      selectedCard: "card",
      isSideCart: false,
      types: [],
      skeleton: false,
    };
  },

  computed: {
    ...mapGetters({
      allcards: "cards/allCards",
      user: "auth/user",
      names: "cards/allNames",
    }),
  },
  methods: {
    toggleSide(any) {
      console.log(any);
      this.selectedCard = any;
      this.isSideCart = true;
      this.types = this.allcards.filter(
        (card) => card.card.name.toLowerCase().indexOf(any.toLowerCase()) >= 0
      );
      console.log(this.types);
    },

    closeSide() {
      this.isSideCart = false;
    },
    ...mapActions({
      getAllCards: "cards/getAllCards",
      getAllNames: "cards/getNames",
    }),
    filter(e) {
      if (e.target.value === "") {
        this.showAll = true;
      } else {
        this.showAll = false;
        console.log(e.target.value);
        this.searchCards = this.names.filter(
          (card) =>
            card.card.name
              .toLowerCase()
              .indexOf(e.target.value.toLowerCase()) >= 0
        );
      }
    },

    async fetchName() {
      this.skeleton = !this.skeleton;
      await this.getAllNames()
        .then(() => (this.skeleton = !this.skeleton))
        .catch((error) => {
          this.$toast.add({ severity: "error", summary: "Check Connection" });
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchName();
  },
  components: {
    //     InputText,
    //    // Upload,
    //     ScrollPanel,
    Card,
    Skeleton,
  },
};
</script>
<style lang="scss" scoped>
#input1 {
  max-width: 350px;
}
@media (max-width: 425px) {
  #input1 {
    width: 90%;
  }
}
</style>
