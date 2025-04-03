t<script setup>
import { inject, ref } from 'vue';



const msgSuccess = ref(null);
const msgError = ref(null);

const model = ref({
  name: null,
  email: null,
  message: null
});


const handleSubmit = () => {
  msgSuccess.value = null;
  msgError.value = null;
  if (!model.value.name) {
    return msgError.value = 'Full name cannot be left blank';
  }

  if (!model.value.email) {
    return msgError.value = 'Email cannot be left blank';
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(model.value.email)) {
    return msgError.value = 'Invalid email';
  }

  if (!model.value.message) {
    return msgError.value = 'Content cannot be left blank';
  }
  msgSuccess.value = 'Contact sent successfully';
  Object.keys(model.value).forEach(key => {
    model.value[key] = null;
  });
};


</script>

<template>
  <div class="container py-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Contact</li>
      </ol>
    </nav>
    <div class="row my-5">
      <div class="col-md-12 col-lg-6">
        <img class="img-responsive" src="@/assets/images/contact.png" />
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="card border-0 rounded-3">
          <div class="card-body p-4 p-md-5">
            <h1 class="card-title">Contact</h1>
            <h6 class="card-subtitle mb-2 text-body-secondary">Do you have questions that need answering? Contact us now</h6>
            <div class="card-text">
              <div class="alert alert-danger my-3" v-show="msgError">{{ msgError }}</div>
              <div class="alert alert-success my-3" v-show="msgSuccess">{{ msgSuccess }}</div>
              <div class="mt-4">
                <input class="form-control rounded-5" type="text" placeholder="Fullname" v-model.trim="model.name" @keydown.enter="handleSubmit">
              </div>
              <div class="mt-4">
                <input class="form-control rounded-5" type="email" placeholder="Email" v-model.trim="model.email" @keydown.enter="handleSubmit">
              </div>
              <div class="mt-4">
                <textarea class="form-control rounded-4" placeholder="Message" v-model.trim="model.message" rows="5"></textarea>
              </div>
            </div>
            <div class="mt-4 d-flex">
              <button class="btn btn-primary rounded-5 w-100" @click="handleSubmit">SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
  main {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(@/assets/images/bg-login.jpg), #00575C;
    background-size: cover;
    background-position: center 10%;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
  }
</style>
