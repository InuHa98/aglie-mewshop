<script setup>
import { API_AUTHENTICATION } from '@/constants/routesConstant';
import requestAPI from '@/services/requestApiService';
import useAuthStore from '@/stores/useAuthStore';
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const _DB = inject('_DB');
const router = useRouter();

const msgSuccess = ref(null);
const msgError = ref(null);

const model = ref({
  id: authStore?.user.id,
  fullname: authStore?.user?.fullname,
  phone: authStore?.user?.phone,
  currentPassword: null,
  newPassword: null,
  confirmNewPassword: null,
});


const handleSubmit = () => {
  msgSuccess.value = null;
  msgError.value = null;

  requestAPI
    .put(`${API_AUTHENTICATION.INFOMATION}`, model.value)
    .then(({ data: response }) => {
      msgSuccess.value = 'Saved successfully';
      authStore.updateUser(response.data)
      model.value.currentPassword = null;
      model.value.newPassword = null;
      model.value.confirmNewPassword = null;
    })
    .catch((error) => {
      msgError.value = error?.response?.data?.message || 'An error occurred, please try again in a few minutes!';
    })

};

onMounted(() => {
  if (!authStore?.user) {
    return router.push({name: 'home'});
  }
  _DB.value.table('TaiKhoan');
});

</script>

<template>
  <div class="container py-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Account</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-lg-2 col-md-3">
        <div class="position-relative">
          <h2>{{ authStore?.user?.username  }}</h2>
          <ul class="nav flex-column">
            <li class="nav-item">
              <RouterLink class="nav-link px-0 active" aria-current="page" :to="{ name: 'account-information'}">Login information</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink>Purchase History</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-10 col-md-9">
        <div class="card border-0 rounded-3">
          <div class="card-body p-4">
            <h5 class="card-title text-primary">Login information</h5>
            <div class="card-text">
              <div class="alert alert-danger my-3" v-show="msgError">{{ msgError }}</div>
              <div class="alert alert-success my-3" v-show="msgSuccess">{{ msgSuccess }}</div>
              <div class="mt-4">
                <input class="form-control rounded-5" type="text" placeholder="Fullname" v-model.trim="model.fullname" @keydown.enter="handleSubmit">
              </div>
              <div class="mt-4">
                <input class="form-control rounded-5" type="text" placeholder="Number phone" v-model.trim="model.phone" @keydown.enter="handleSubmit">
              </div>
              <h5 class="card-title text-primary mt-3">Change password</h5>
              <div class="mt-4">
                <input class="form-control rounded-5" type="password" placeholder="Current password" v-model.trim="model.currentPassword" @keydown.enter="handleSubmit">
              </div>
              <div class="mt-4">
                <input class="form-control rounded-5" type="password" placeholder="New password" v-model.trim="model.newPassword" @keydown.enter="handleSubmit">
              </div>
              <div class="mt-4">
                <input class="form-control rounded-5" type="password" placeholder="Re-entered new password" v-model.trim="model.confirmNewPassword" @keydown.enter="handleSubmit">
              </div>
            </div>
            <div class="mt-4 d-flex justify-content-end">
              <button class="btn btn-primary rounded-5" @click="handleSubmit">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
