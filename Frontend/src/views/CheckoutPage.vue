<script setup>
import useAuthStore from '@/stores/useAuthStore';
import { inject, onMounted, ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const router = useRouter();
const _DB = inject('_DB');
const _COUNT_CART = inject('_COUNT_CART');

const msgSuccess = ref(null);
const msgError = ref(null);

const lstData = ref(null);
const itemsTotal = ref(0);
const priceTotal = ref(0);

const getFormattedDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const model = ref({
  userId: authStore?.user?.id,
  carts: [],
  status: 0,
  price: 0,
  fullname: authStore?.user?.fullname,
  phone: authStore?.user?.phone,
  address: null,
  date: getFormattedDate()
});

const loadData = () => {
  lstData.value = _DB.value.orderBy('id', 'DESC').getAll();
  lstData.value.map(o => {
    o.product = {..._DB.value.getById(o.productId, 'SanPham')};
  });
  _COUNT_CART.value = lstData.value.length;
  itemsTotal.value = lstData.value.reduce((a, b) => a += b.quantity, 0);
  priceTotal.value = lstData.value.reduce((a, b) => a += b.price * b.quantity, 0);
  model.value.price = priceTotal.value;
  model.value.carts = lstData.value.map(o => ({
    price: o.price,
    quantity: o.quantity,
    product: o.product
  }));
};

const handleSubmit = () => {
  msgError.value = null;
  msgSuccess.value = null;

  if(!model.value.fullname) {
    return msgError.value = 'Recipient name cannot be left blank';
  }

  if (!/^(03|05|07|08|09)\d{8}$/.test(model.value.phone)) {
    return msgError.value = 'Invalid phone number';
  }

  if(!model.value.address) {
    return msgError.value = 'Recipient address cannot be left blank';
  }


  if (_DB.value.insert(toRaw(model.value), 'HoaDon')) {
    msgSuccess.value = 'Buy successfully';
  } else {
    return msgError.value = 'Buy failed';
  }

  _DB.value.clear('GioHang');
  _COUNT_CART.value = 0;
  router.push({name: 'account-purchase'});

}


onMounted(() => {
  if (!authStore?.user) {
    return router.push({name: 'login'});
  }

  _DB.value.table('GioHang');
  loadData();
});


</script>

<template>
  <div class="container my-3">
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink :to="{name: 'cart'}">Cart</RouterLink></li>
        <li class="breadcrumb-item active">Checkout</li>
      </ol>
    </nav>
    <div class="alert alert-danger my-3" v-show="msgError">{{ msgError }}</div>
    <div class="alert alert-success my-3" v-show="msgSuccess">{{ msgSuccess }}</div>
    <div class="row g-3">
      <div class="col-md-8">
        <div class="card border-0 rounded-3">
          <div class="card-body p-4">
            <div class="card-text">
              <div class="row g-4">
                <div class="col-md-6">
                    <h4>Receiving information</h4>
                    <div class="col-12">
                        <label for="fullname" class="form-label">Fullname</label>
                        <input type="text" class="form-control" id="fullname" v-model.trim="model.fullname">
                    </div>
                    <div class="col-12">
                        <label for="phone" class="form-label">Number phone</label>
                        <input type="text" class="form-control" id="phone" v-model.trim="model.phone">
                    </div>
                    <div class="col-12">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" v-model.trim="model.address">
                    </div>
                </div>
                <div class="col-md-6">
                    <h4>Payment method</h4>
                    <div class="card">
                        <div class="card-body">
                            <span class="card-title">
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" id="flexRadioDefault1" checked>
                                  <label class="form-check-label" for="flexRadioDefault1">
                                    Payment upon delivery
                                  </label>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 rounded-3">
          <div class="card-body p-4">
            <div class="card-text">
              <div class="table-responsive">
                  <table class="table">
                      <thead>
                      <tr>
                          <th></th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                      </tr>
                      </thead>
                      <tbody>
                        <tr v-if="lstData?.length < 1">
                          <td colspan="5" class="text-center">List empty.</td>
                        </tr>
                        <template v-else>
                          <tr v-for="o in lstData" :key="o.id">
                              <td class="align-middle">
                                <img class="img-responsive rounded-2 border-1" width="120px" height="120px" :src="o?.product?.image" />
                              </td>
                              <td class="align-middle">{{ o?.product?.name }}</td>
                              <td class="align-middle">{{ o?.quantity }}</td>
                              <td class="align-middle">{{ o?.price * o?.quantity }}$</td>
                          </tr>
                        </template>
                      </tbody>
                  </table>
                </div>
                <div class="d-flex justify-content-between">
                    <span>Item(s) total</span>
                    <span>${{ priceTotal }}</span>
                </div>
                <div class="d-flex justify-content-between border-bottom py-3">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div class="d-flex justify-content-between py-3 fw-bold">
                    <span>Total ({{ itemsTotal }} items)</span>
                    <span>${{ priceTotal }}</span>
                </div>
            </div>
            <div class="mt-4 d-flex">
              <button class="btn btn-primary rounded-5 w-100" v-if="lstData?.length > 0" @click="handleSubmit">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
