<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const _DB = inject('_DB');
const routes = useRoute();

const pageSize = 8;
const currentPage = ref(1);
const maxPage = ref(1);

const currentCategory = ref(null);

const filterPrice = ref({
  min: null,
  max: null
});

const lstData = ref(null);
const lstCategories = ref(_DB.value.orderBy('name', 'ASC').getAll('DanhMuc'));

const loadPage = (page) => {

  _DB.value.setWhere((o => {
    if(currentCategory.value && o.categoryId != currentCategory.value?.id) {
      return false;
    }

    const min = parseInt(filterPrice.value.min);
    const max = parseInt(filterPrice.value.max);

    if (typeof min == 'number' && o.price < min) {
      return false;
    }

    if (typeof max == 'number' && o.price > max) {
      return false;
    }

    return true;
  }));

  lstData.value = _DB.value.getPage(page, 'SanPham');
  currentPage.value = lstData.value.currentPage;
  maxPage.value = lstData.value.totalPage;
};

const setCategory = (id) => {
  currentCategory.value = _DB.value.getById(parseInt(id), 'DanhMuc');
  loadPage(currentPage.value);
};

const handleFilter = () => {
  setCategory(currentCategory.value?.id);
};

onMounted(() => {
  _DB.value.table('SanPham');
  _DB.value.setPageSize(pageSize);
  setCategory(routes.params.id);
});

</script>

<template>
  <div class="container my-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">List products</li>
      </ol>
    </nav>
    <div class="row g-3">
      <div class="col-lg-3 col-md-12">
        <div class="position-relative">
          <h4>Filter price</h4>
          <div class="row g-3">
            <div class="col-6 col-lg-12">
              <input type="number" class="form-control" v-model.number.trim="filterPrice.min" placeholder="Min price" />
            </div>
            <div class="col-6 col-lg-12">
              <input type="number" class="form-control" v-model.number.trim="filterPrice.max" placeholder="Max price" />
            </div>
            <div class="mb-3 col-12">
              <button class="btn btn-primary" @click="handleFilter">Filter</button>
            </div>
          </div>

          <h4>Filter category</h4>
          <ul class="nav flex-column">
            <li class="nav-item">
              <RouterLink class="nav-link px-0" :class="{active: !routes.params?.id}" :to="{name: 'categories'}" @click="setCategory(-1)">All categories</RouterLink>
            </li>
            <li class="nav-item" v-for="o in lstCategories" :key="o.id">
              <RouterLink class="nav-link px-0" :class="{active: o.id == currentCategory?.id}" :to="{name: 'category', params: {id: o.id}}" @click="setCategory(o.id)">{{ o.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-9 col-md-12">
        <div class="row g-3">
          <div class="col-6 col-lg-3 col-md-4 d-flex align-items-stretch" v-for="o in lstData?.data" :key="o.id">
            <RouterLink class="card border-0 shadow-sm w-100" :to="{ name: 'product', params: {id: o.id}}">
              <img :src="o.image" class="card-img-top card-img-product" alt="...">
              <div class="card-body d-flex flex-column">
                <h6 class="card-title  flex-grow-1">{{ o.name }}</h6>
                <p class="card-text d-flex justify-content-between align-items-center">
                  <b class="text-primary">{{ o.price }}$</b>
                  <small class="text-secondary">{{ o.sell }} sold</small>
                </p>
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
    </div>
  </div>
</template>
<style>
.card-img-product {
  min-height: 200px;
  max-height: 200px;
}
</style>
