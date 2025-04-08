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

const msgSuccess = ref(null);
const msgError = ref(null);

const lstWaiting = ref(null);
const lstDelevering = ref(null);
const lstDelivered = ref(null);
const lstCancel = ref(null);

const loadData = () => {
  lstWaiting.value = _DB.value.setWhere(o => o.status == 0 && o.userId == authStore?.user?.id).orderBy('date', 'DESC').getAll();
  lstDelevering.value = _DB.value.setWhere(o => o.status == 1 && o.userId == authStore?.user?.id).orderBy('date', 'DESC').getAll();
  lstDelivered.value = _DB.value.setWhere(o => o.status == 2 && o.userId == authStore?.user?.id).orderBy('date', 'DESC').getAll();
  lstCancel.value = _DB.value.setWhere(o => o.status == 3 && o.userId == authStore?.user?.id).orderBy('date', 'DESC').getAll();
};

const showModalCancel = (id, status) => {
  target.value.id = id;
  target.value.status = status;
}

const clearMsg = () => {
  msgError.value = null;
  msgSuccess.value = null;
};

const handleSubmit = () => {
  clearMsg();

  if (_DB.value.update(target.value)) {
    msgSuccess.value = 'Order canceled successfully';
  } else {
    return msgError.value = 'An error occurred, please try again in a few minutes';
  }

  loadData();

}

onMounted(() => {
  if (!authStore?.user) {
    return router.push({name: 'home'});
  }
  _DB.value.table('HoaDon');
  loadData();
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
      <div class="col-md-3">
        <div class="position-relative">
          <h2>{{ _USER?.username  }}</h2>
          <ul class="nav flex-column">
            <li class="nav-item">
              <RouterLink class="nav-link px-0" aria-current="page" :to="{ name: 'account-information'}">Login information</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link px-0 active" :to="{name: 'account-purchase'}">Purchase History</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row g-3">
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
                              <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#cancel" @click="showModalCancel(o?.id, 3)">Cancel order</button>
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
      </div>
    </div>
    <div class="modal fade" id="cancel">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h1 class="modal-title fs-5"><i class="fa-solid fa-x"></i> Cancel order</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form method="post" id="form-cancel">
                      <input type="hidden" name="btnCancel" />
                      <input type="hidden" name="id" value="" id="id-cancel">
                      <div class="mb-3">
                          <label class="col-form-label">Do you really want to cancel this order?</label>
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
</template>
