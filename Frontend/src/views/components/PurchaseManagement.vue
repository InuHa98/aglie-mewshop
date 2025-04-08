<script setup>
import useAuthStore from '@/stores/useAuthStore';
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const _DB = inject('_DB');
const router = useRouter();

const target = ref({
  id: null,
  status: 0
});

const currentHoaDon = ref(null);

const msgSuccess = ref(null);
const msgError = ref(null);

const lstWaiting = ref(null);
const lstDelevering = ref(null);
const lstDelivered = ref(null);
const lstCancel = ref(null);

const loadData = () => {
  lstWaiting.value = _DB.value.setWhere(o => o.status == 0).orderBy('date', 'DESC').getAll();
  lstDelevering.value = _DB.value.setWhere(o => o.status == 1).orderBy('date', 'DESC').getAll();
  lstDelivered.value = _DB.value.setWhere(o => o.status == 2).orderBy('date', 'DESC').getAll();
  lstCancel.value = _DB.value.setWhere(o => o.status == 3).orderBy('date', 'DESC').getAll();
};

const showModalCancel = (hoaDon, status) => {
  currentHoaDon.value = hoaDon;
  target.value.id = hoaDon?.id;
  target.value.status = status;
}

const clearMsg = () => {
  msgError.value = null;
  msgSuccess.value = null;
};

const handleSubmit = () => {
  clearMsg();

  if (_DB.value.update(target.value)) {
    msgSuccess.value = 'Order status changed successfully';
  } else {
    return msgError.value = 'An error occurred, please try again in a few minutes';
  }

  if (target.value.status == 2) {
    currentHoaDon.value.carts.forEach(o => {
      const prd = _DB.value.getById(o.product.id, 'SanPham');

      if (prd) {
        const data = {id: prd.id, sell: prd.sell + o.quantity, quantity: prd.quantity - o.quantity};
        _DB.value.update(data, 'SanPham');
        prd.quantity = data.quantity;
        prd.sell = data.sell;
      }

    });
  }

  loadData();

}

onMounted(() => {
  if(!authStore?.user || authStore?.user.role !== 'ADMIN') {
    return router.push({name: 'home'});
  }
  _DB.value.table('HoaDon');
  loadData();
});

</script>

<template>
  <div class="card border-0 rounded-3">
    <div class="card-body p-4">
      <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
        <span class="text-primary my-2">Categories Management</span>
      </h5>

        <div class="card-text row g-3">
            <div class="nav flex-nowrap nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link nowrap active" id="da-dat" data-bs-toggle="pill" data-bs-target="#v-da-dat" type="button" role="tab" aria-controls="v-da-dat" aria-selected="true" @click="clearMsg">Waiting ({{ lstWaiting?.length }})</button>
                <button class="nav-link nowrap" id="dang-giao" data-bs-toggle="pill" data-bs-target="#v-dang-giao" type="button" role="tab" aria-controls="v-dang-giao" aria-selected="false" @click="clearMsg">Delivering ({{ lstDelevering?.length }})</button>
                <button class="nav-link nowrap" id="da-giao" data-bs-toggle="pill" data-bs-target="#v-da-giao" type="button" role="tab" aria-controls="v-da-giao" aria-selected="false" @click="clearMsg">Delivered ({{ lstDelivered?.length }})</button>
                <button class="nav-link nowrap" id="da-huy" data-bs-toggle="pill" data-bs-target="#v-da-huy" type="button" role="tab" aria-controls="v-da-huy" aria-selected="false" @click="clearMsg">Canceled ({{ lstCancel?.length }})</button>
            </div>

            <div class="alert alert-danger my-3" v-show="msgError">{{ msgError }}</div>
            <div class="alert alert-success my-3" v-show="msgSuccess">{{ msgSuccess }}</div>

            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-da-dat" role="tabpanel" aria-labelledby="da-dat" tabindex="0">
                  <div class="alert alert-warning" v-if="lstWaiting?.length < 1">There are no orders yet</div>
                  <div class="card mb-3" v-for="o in lstWaiting" :key="o.id">
                      <div class="card-header d-flex justify-content-between">
                          <span>#OD-{{ o.id }}</span>
                          <span>{{ o.date }}</span>
                      </div>
                      <div class="card-body">
                          <div class="card-text">
                              <table class="table table-borderless align-middle">
                                  <tbody>

                                    <tr v-for="o2 in o?.carts" :key="o2.id">
                                        <td class="bg-light">
                                            <img class="img-responsive rounded-2 border-1" width="120px" height="120px" :src="o2?.product?.image" />
                                        </td>
                                        <td class="bg-light">
                                            <p><RouterLink :to="{name: 'product', params: {id: o2?.product?.id}}">{{ o2?.product?.name }}</RouterLink></p>
                                        </td>
                                        <td class="bg-light">x<b>{{ o2?.quantity }}</b></td>
                                        <td class="bg-light">${{ o2?.price * o2?.quantity }}</td>
                                    </tr>

                                  </tbody>
                              </table>
                            </div>
                          <div class="card-title text-secondary">Receiver: {{ o?.fullname }} - {{ o?.phone }}</div>
                          <div class="card-title text-secondary">Address: {{ o?.address }}</div>
                          <div class="d-flex justify-content-end">
                              <span>Total: <b>${{ o?.price }}</b></span>
                          </div>
                          <div class="d-flex justify-content-end mt-3">
                              <button class="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#change-status" @click="showModalCancel(o, 3)">Cancel order</button>
                              <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#change-status" @click="showModalCancel(o, 1)">Marked as delivering</button>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-dang-giao" role="tabpanel" aria-labelledby="dang-giao" tabindex="0">
                  <div class="alert alert-warning" v-if="lstDelevering?.length < 1">There are no orders yet</div>
                  <div class="card mb-3" v-for="o in lstDelevering" :key="o.id">
                      <div class="card-header d-flex justify-content-between">
                          <span>#OD-{{ o.id }}</span>
                          <span>{{ o.date }}</span>
                      </div>
                      <div class="card-body">
                          <div class="card-text">
                              <table class="table table-borderless align-middle">
                                  <tbody>

                                    <tr v-for="o2 in o?.carts" :key="o2.id">
                                        <td class="bg-light">
                                            <img class="img-responsive rounded-2 border-1" width="120px" height="120px" :src="o2?.product?.image" />
                                        </td>
                                        <td class="bg-light">
                                            <p><RouterLink :to="{name: 'product', params: {id: o2?.product?.id}}">{{ o2?.product?.name }}</RouterLink></p>
                                        </td>
                                        <td class="bg-light">x<b>{{ o2?.quantity }}</b></td>
                                        <td class="bg-light">${{ o2?.price * o2?.quantity }}</td>
                                    </tr>

                                  </tbody>
                              </table>
                            </div>
                          <div class="card-title text-secondary">Receiver: {{ o?.fullname }} - {{ o?.phone }}</div>
                          <div class="card-title text-secondary">Address: {{ o?.address }}</div>
                          <div class="d-flex justify-content-end">
                              <span>Total: <b>${{ o?.price }}</b></span>
                          </div>
                          <div class="d-flex justify-content-end mt-3">
                              <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#change-status" @click="showModalCancel(o, 2)">Marked as delivered</button>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-da-giao" role="tabpanel" aria-labelledby="da-giao" tabindex="0">
                  <div class="alert alert-warning" v-if="lstDelivered?.length < 1">There are no orders yet</div>
                  <div class="card mb-3" v-for="o in lstDelivered" :key="o.id">
                      <div class="card-header d-flex justify-content-between">
                          <span>#OD-{{ o.id }}</span>
                          <span>{{ o.date }}</span>
                      </div>
                      <div class="card-body">
                          <div class="card-text">
                              <table class="table table-borderless align-middle">
                                  <tbody>
                                    <tr v-for="o2 in o?.carts" :key="o2.id">
                                        <td class="bg-light">
                                            <img class="img-responsive rounded-2 border-1" width="120px" height="120px" :src="o2?.product?.image" />
                                        </td>
                                        <td class="bg-light">
                                            <p><RouterLink :to="{name: 'product', params: {id: o2?.product?.id}}">{{ o2?.product?.name }}</RouterLink></p>
                                        </td>
                                        <td class="bg-light">x<b>{{ o2?.quantity }}</b></td>
                                        <td class="bg-light">${{ o2?.price * o2?.quantity }}</td>
                                    </tr>
                                  </tbody>
                              </table>
                            </div>
                          <div class="card-title text-secondary">Receiver: {{ o?.fullname }} - {{ o?.phone }}</div>
                          <div class="card-title text-secondary">Address: {{ o?.address }}</div>
                          <div class="d-flex justify-content-end">
                              <span>Total: <b>${{ o?.price }}</b></span>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="v-da-huy" role="tabpanel" aria-labelledby="da-huy" tabindex="0">
                  <div class="alert alert-warning" v-if="lstCancel?.length < 1">There are no orders yet</div>
                  <div class="card mb-3" v-for="o in lstCancel" :key="o.id">
                      <div class="card-header d-flex justify-content-between">
                          <span>#OD-{{ o.id }}</span>
                          <span>{{ o.date }}</span>
                      </div>
                      <div class="card-body">
                          <div class="card-text">
                              <table class="table table-borderless align-middle">
                                  <tbody>

                                    <tr v-for="o2 in o?.carts" :key="o2.id">
                                        <td class="bg-light">
                                            <img class="img-responsive rounded-2 border-1" width="120px" height="120px" :src="o2?.product?.image" />
                                        </td>
                                        <td class="bg-light">
                                            <p><RouterLink :to="{name: 'product', params: {id: o2?.product?.id}}">{{ o2?.product?.name }}</RouterLink></p>
                                        </td>
                                        <td class="bg-light">x<b>{{ o2?.quantity }}</b></td>
                                        <td class="bg-light">${{ o2?.price * o2?.quantity }}</td>
                                    </tr>

                                  </tbody>
                              </table>
                            </div>
                          <div class="card-title text-secondary">Receiver: {{ o?.fullname }} - {{ o?.phone }}</div>
                          <div class="card-title text-secondary">Address: {{ o?.address }}</div>
                          <div class="d-flex justify-content-end">
                              <span>Total: <b>${{ o?.price }}</b></span>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    <div class="modal fade" id="change-status">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h1 class="modal-title fs-5"><i class="fa-solid fa-x"></i> Change status</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form method="post">
                      <div class="mb-3">
                          <label class="col-form-label">Do you really want to change this order status?</label>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="handleSubmit">Continue</button>
              </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>
