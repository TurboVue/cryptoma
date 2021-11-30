<template>
  <div>
    <div class="float-right">
      <button class="flex items-center p-2 border inline-block rounded" @click="AddCard()" >
       <span class="px-2" >Add New Type</span>
      </button>
    </div>
    <div class="stocks_list clear-right">
      <p class="p-2 font-bold">Card Types:</p>
      <CategoryCard v-for="(card, index) in cardTypes" :key="index" :card = 'card' :index = 'index' />
    </div>
<router-view />
    <!-- <LoanFormModal @toggleModal="toggleModal" v-if="isRequest" /> -->
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore} from 'vuex'
import {useRouter, useRoute} from 'vue-router'
import CategoryCard from "@/components/admin/CategoryCard.vue";
// import LoanFormModal from "@/components/reusables_/LoanFormModal.vue";

export default {
  name: "Category",
    components: {
      CategoryCard,
      
    },
  setup() {
    const isRequest = ref(false);
    const toggleModal = () => {
      isRequest.value = !isRequest.value;
    };
    const store = useStore()
    const selectedType = ref({})
    const cardTypes = ref([])
    const router = useRouter()
    const route = useRoute()
    const selectedCard = ref({ card: { name: "" } })
    const fetchName = () => {
    //   this.isSpin();
      const params = route.params.id;
      
          selectedCard.value = store.getters['admin/names'].find(
            card => card.card.uuid.toLowerCase() === params.toLowerCase()
          );
          const isSel = selectedCard.value;
          // console.log(this.cards)
          cardTypes.value = store.getters['admin/cards'].filter(
            card =>
              card.card.name
                .toLowerCase()
                .indexOf(isSel.card.name.toLowerCase()) >= 0
          );
          console.log(selectedCard.value);
        //   this.isSpin();
       
    }
    fetchName()
    const AddCard = () => {
            router.push({'name': 'AddCard'})
        }
    return {
      AddCard,
      fetchName,
      isRequest,
      toggleModal,
      selectedType,
      cardTypes,
      selectedCard
    };
  },
  
  methods: {
      
  }
};
</script>
