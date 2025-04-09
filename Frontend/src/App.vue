<script setup>
import { RouterView, useRouter } from 'vue-router'
import HeaderLayout from './layouts/HeaderLayout.vue';
import FooterLayout from './layouts/FooterLayout.vue';
import { computed, provide, ref } from 'vue';
import Database from './databases';
import useAuthStore from './stores/useAuthStore';

const router = useRouter();

const authStore = useAuthStore();

const currentRoute = computed(() => {
    return router.currentRoute.value.name;
});



const _DB = ref(new Database());
const _USER = ref(authStore.user);
const _COUNT_CART = ref(_DB.value.setWhere(o => o.id == _USER?.id).getAll('GioHang').length);

provide('_USER', _USER);
provide('_COUNT_CART', _COUNT_CART);
provide('_DB', _DB);


</script>

<template>
  <HeaderLayout v-if="currentRoute !== 'login' && currentRoute !== 'signup'" />
  <RouterView />
  <FooterLayout v-if="currentRoute !== 'login' && currentRoute !== 'signup'" />
</template>

<style scoped>

</style>
