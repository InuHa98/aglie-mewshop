<script setup>
import { inject, onMounted, ref } from 'vue';

const pageSize = 6;
const currentPage = ref(1);
const maxPage = ref(1);

const _DB = inject('_DB');
const lstData = ref(null);

const loadPage = (page) => {
  lstData.value = _DB.value.getPage(page);
  currentPage.value = lstData.value.currentPage;
  maxPage.value = lstData.value.totalPage;
};

onMounted(() => {
  _DB.value.table('TinTuc');
  _DB.value.setPageSize(pageSize);
  loadPage(1);
});

</script>

<template>
  <div class="container my-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">News</li>
      </ol>
    </nav>
    <div class="row g-3">
      <div class="col-md-6 col-lg-4 d-flex align-items-stretch" v-for="o in lstData?.data" :key="o.id">
        <RouterLink class="card border-0 shadow-sm position-relative" :to="{ name: 'news-detail', params: {id: o.id}}">
          <span class="card-time">
            <b>{{ o.time }}</b>
          </span>
          <img :src="o.image" class="card-img-top card-img-news" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ o.title }}</h5>
            <p class="card-text">{{ o.content }}.</p>
          </div>
        </RouterLink>
      </div>
      <div class="col-12">
        <div class="d-flex align-items-center justify-content-center py-4">
          <button class="btn btn-primary rounded-5" @click="loadPage(currentPage - 1)"><i class="fa-solid fa-chevron-left"></i></button>
          <span class="px-4">Page {{ currentPage }} / {{ maxPage }}</span>
          <button class="btn btn-primary rounded-5" @click="loadPage(currentPage + 1)"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
