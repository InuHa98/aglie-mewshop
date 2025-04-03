<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const lstDataNews = ref(null);
const lstDataSells = ref(null);

const _DB = inject('_DB');


const loadTop = () => {
  const lstAll = _DB.value.getAll();

  lstDataNews.value = lstAll.sort((a, b) => {
    return b.id - a.id;
  });
  lstDataNews.value = lstDataNews.value.slice(0, 8);

  lstDataSells.value = lstAll.sort((a, b) => {
    return b.sell - a.sell;
  });
  lstDataSells.value = lstDataSells.value.slice(0, 8);

};

onMounted(() => {
  _DB.value.table('SanPham');
  _DB.value.setPageSize(8);
  loadTop();
});

</script>

<template>
  <div class="container py-3">
    <RouterLink :to="{name: 'categories'}">
      <img class="img-responsive rounded" src="@/assets/images/banner.png">
    </RouterLink>

    <h2 class="text-primary text-center py-3">NEW PRODUCTS</h2>

    <div class="row g-3">
      <div class="col-lg-3 col-md-6 col-6 d-flex align-content-stretch" v-for="o in lstDataNews" :key="o.id">
        <RouterLink class="card border-0 shadow-sm w-100" :to="{name: 'product', params: {id: o.id}}">
          <img :src="o.image" class="card-img-top card-img-product">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title  flex-grow-1">{{ o.name }}</h6>
            <p class="card-text d-flex justify-content-between align-items-center">
              <b class="text-primary">{{ o.price }}$</b>
              <small class="text-secondary">{{ o.sell }} sold</small>
            </p>
          </div>
        </RouterLink>
      </div>
    </div>

    <h2 class="text-primary text-center py-3 text-uppercase">top best selling</h2>

    <div class="row g-3">
      <div class="col-lg-3 col-md-6 col-6 d-flex align-content-stretch" v-for="o in lstDataSells" :key="o.id">
        <RouterLink class="card border-0 shadow-sm w-100" :to="{name: 'product', params: {id: o.id}}">
          <img :src="o.image" class="card-img-top card-img-product">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title  flex-grow-1">{{ o.name }}</h6>
            <p class="card-text d-flex justify-content-between align-items-center">
              <b class="text-primary">{{ o.price }}$</b>
              <small class="text-secondary">{{ o.sell }} sold</small>
            </p>
          </div>
        </RouterLink>
      </div>
    </div>

  </div>
</template>
