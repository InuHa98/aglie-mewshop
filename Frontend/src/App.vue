<script setup>
import { RouterView, useRouter } from 'vue-router'
import HeaderLayout from './layouts/HeaderLayout.vue';
import FooterLayout from './layouts/FooterLayout.vue';
import { computed, provide, ref } from 'vue';
import Database from './databases';

const router = useRouter();

const currentRoute = computed(() => {
    return router.currentRoute.value.name;
});



const _DB = ref(new Database());
const _COUNT_CART = ref(_DB.value.setWhere(o => o.userId == parseInt(user_id)).getAll('GioHang').length);


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
