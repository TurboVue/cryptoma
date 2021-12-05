<script>
import ProfilePic from "@/components/reusables_/ProfilePic.vue";
import CountsCard from "@/components/admin/CountsCard.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";
export default {
  name: "AdminMain",
  setup() {
    const store = useStore();
    const loading = ref(false);
    const fetchUsers = async () => {
      loading.value = true;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            store
              .dispatch("admin/getAllUsers")
              .then(() => (loading.value = false))
              .catch((err) => console.log(err))
          );
        }, 1000)
      );
    };
    fetchUsers();
    return {
      users: computed(() => store.getters["admin/users"]),
      fetchUsers,
      loading,
    };
  },
  components: {
    CountsCard,
    ProfilePic,
  },
};
</script>

<template>
  <div>
    <p class="work text-lg font-medium capitalize my-2">Hello {{ fullname }}</p>
    <div class="md:grid gap-10 mt-2 md:grid-cols-3">
      <CountsCard
        :total="3"
        :name="'Cards'"
        @click="$router.push({ path: '/admin/cards' })"
      />
      <CountsCard :total="3" :name="'Cardlets'" />
      <CountsCard :total="3" :name="'Btc Trades'" />
    </div>

    <div class="-mx-4 px-4 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="
                  px-5
                  py-3
                  border-b-2 border-gray-200
                  bg-cyan
                  text-left
                  font-semibold
                  text-white
                  uppercase
                  tracking-wider
                "
              >
                User
              </th>

              <th
                class="
                  px-5
                  py-3
                  border-b-2 border-gray-200
                  bg-cyan
                  text-left
                  font-semibold
                  text-white
                  uppercase
                  tracking-wider
                "
              >
                phone
              </th>
            </tr>
          </thead>
          <tbody>
              
              <el-skeleton  :loading="loading" animated :count="3">
                <template #template>
                        <td class="px-5 py-5 w-full border-b border-gray-200 bg-white">
                        <el-skeleton-item variant="h3" style="width: 100%"  />
                        </td>
                </template>
                <template #default>
                    <tr v-for="(user, index) in users" :key="index">
              <td class="px-5 py-5 border-b border-gray-200 bg-white">
                <div class="flex">
                  <ProfilePic :isSize="'small'" :name="user.fullname" />
                  <div class="ml-3">
                    <p class="text-gray-900 capitalize whitespace-no-wrap">
                      {{ user.fullname }}
                    </p>
                    <p class="text-gray-600 whitespace-no-wrap">
                      {{ user.email }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ user.phone }}
                </p>
              </td>
            </tr>
                </template>
                </el-skeleton>
          </tbody>
        </table>
      </div>
    </div>
   
  </div>
</template>
