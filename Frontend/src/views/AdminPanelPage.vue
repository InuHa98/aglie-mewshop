<script setup>
import { inject, onMounted, ref, shallowRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CategoriesManagement from './components/CategoriesManagement.vue';
import ProductsManagement from './components/ProductsManagement.vue';
import PurchaseManagement from './components/PurchaseManagement.vue';
import useAuthStore from '@/stores/useAuthStore';

const authStore = useAuthStore()

const routes = useRoute();
const router = useRouter();

const getComponenet = () => {
  switch(routes.params.component) {
    case 'products-management': return ProductsManagement;
    case 'categories-management': return CategoriesManagement;
    default: return PurchaseManagement;
  }
};

const component = shallowRef(getComponenet());

const setComponent = name => {
  component.value = name;
};

onMounted(() => {
  if(!authStore?.user || authStore?.user.role !== 'ADMIN') {
    return router.push({name: 'home'});
  }
});

</script>

<template>
  <div class="container py-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Admin Panel</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-lg-3 col-md-4">
        <div class="position-relative">
          <h2>Admin Panel</h2>
          <ul class="nav flex-column">
            <!-- <li class="nav-item">
              <RouterLink class="nav-link px-0" :class="{active: component == PurchaseManagement}" :to="{name: 'admin-panel-component', params: {component: 'purchase-management'}}" @click="setComponent(PurchaseManagement)">Purchase Management</RouterLink>
            </li> -->
            <li class="nav-item">
              <RouterLink class="nav-link px-0" :class="{active: component == CategoriesManagement}" :to="{name: 'admin-panel-component', params: {component: 'categories-management'}}" @click="setComponent(CategoriesManagement)">Categories Management</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link px-0" :class="{active: component == ProductsManagement}" :to="{name: 'admin-panel-component', params: {component: 'products-management'}}" @click="setComponent(ProductsManagement)">Products Management</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <component :is="component" />
      </div>
    </div>
  </div>
</template>
