<script setup>
import { inject, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const routes = useRoute();
const router = useRouter();

const _DB = inject('_DB');
const data = _DB.value.table('TinTuc').getById(parseInt(routes.params.id));

onMounted(() => {
  if (!data) {
    return router.push({name: 'news'});
  }
});

</script>

<template>
  <div class="container my-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item" aria-current="page"><RouterLink :to="{name: 'news'}">News</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ data?.title }}</li>
      </ol>
    </nav>
    <div class="row g-3">
      <div class="col-md-12">
        <div class="card border-0 shadow-sm position-relative">
          <img :src="data?.image" class="card-img-top" alt="...">
          <div class="card-body p-5">
            <h5 class="card-title">{{ data?.title }}</h5>
            <p class="card-text">{{ data?.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
