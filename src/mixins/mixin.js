import { computed } from 'vue'
export default {
    computed: {
        fullname: computed(() => this.$store.getters["auth/user"].fullname)
    }
}