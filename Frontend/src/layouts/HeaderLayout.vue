<script setup>
import useAuthStore from '@/stores/useAuthStore';
import { inject } from 'vue';

const authStore = useAuthStore()

const _COUNT_CART = inject('_COUNT_CART');

</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="bg-primary text-center text-white d-none d-md-block">FREE SHIPPING with $20 Purchase</div>
    <div class="container d-none d-md-block">
      <div class="p-2">
      </div>
    </div>
    <nav class="navbar navbar-expand-sm navbar-light bg-white">
      <div class="container flex-nowrap">
          <button class="navbar-toggler me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex align-items-center justify-content-between flex-grow-1">
            <RouterLink :to="{name: 'home'}" class="navbar-brand">
              <svg class="img-responsive" width="163" height="44" viewBox="0 0 163 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="163" height="44" fill="url(#pattern0_13802_1359)"/>
                  <defs>
                  <pattern id="pattern0_13802_1359" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_13802_1359" transform="matrix(0.00217391 0 0 0.00805336 0 -0.00333498)"/>
                  </pattern>
                  <image id="image0_13802_1359" width="460" height="125" xlink:href="data:image/png;base64,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"/>
                  </defs>
              </svg>
            </RouterLink>

            <div class="d-flex align-items-center position-relative">
              <RouterLink class="nav-link" :to="{name: 'login'}" v-if="!authStore?.user">
                <i class="fa-solid fa-user text-primary"></i>
                <span class="ps-2 d-none d-sm-inline-block">Sign In</span>
              </RouterLink>
              <span class="dropdown" v-else>
                <div class="d-flex align-items-center dropdown-toggle" data-bs-toggle="dropdown">
                    <i class="fa-solid fa-user text-primary"></i>
                    <small class="mx-2">Hi, </small>
                    <span>{{ authStore?.user.username }}</span>
                  </div>
                  <ul class="dropdown-menu border-0 shadow-sm">
                    <li v-if="authStore?.user.role === 'ADMIN'">
                      <RouterLink class="dropdown-item text-primary" :to="{name: 'admin-panel'}">Admin Panel</RouterLink>
                    </li>
                    <li><RouterLink class="dropdown-item" :to="{name: 'account'}">Account</RouterLink></li>
                    <li><RouterLink class="dropdown-item" :to="{name: 'logout' }">Logout</RouterLink></li>
                  </ul>
              </span>
              <RouterLink class="btn p-0 border-0 position-relative ms-3" :to="{name: 'cart'}">
                  <i class="fa-solid fa-cart-shopping text-primary"></i>
                  <span class="badge rounded-pill bg-warning">{{ _COUNT_CART }}</span>
              </RouterLink>
            </div>
          </div>


          <div class="offcanvas offcanvas-start d-sm-none" id="offcanvasDarkNavbar">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div class="navbar-nav">
                <RouterLink class="nav-link" aria-current="page" :to="{name: 'categories'}">list products</RouterLink>
                <RouterLink class="nav-link" aria-current="page" :to="{name: 'about-us'}">About Us</RouterLink>
                <RouterLink class="nav-link" aria-current="page" :to="{name: 'contact'}">Contact</RouterLink>
              </div>
            </div>
          </div>

      </div>
    </nav>
    <div class="container d-none d-md-block border-top ">
      <div class="d-flex align-items-center justify-content-around text-uppercase">
        <ul class="nav nav-underline">
          <li class="nav-item">
            <RouterLink class="nav-link px-4" aria-current="page" :to="{name: 'categories'}">List products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link px-4" aria-current="page" :to="{name: 'about-us'}">About Us</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link px-4" aria-current="page" :to="{name: 'contact'}">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
