<script setup>
import useAuthStore from '@/stores/useAuthStore';
import { inject, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const router = useRouter();
const _COUNT_CART = inject('_COUNT_CART');

onMounted(() => {
  _COUNT_CART.value = 0;
  localStorage.removeItem("_USER_ID");
  authStore.logout()
  router.push({name: 'home'});
});

</script>

<template>
  <div></div>
</template>
