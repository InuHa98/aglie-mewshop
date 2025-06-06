<script setup>
import { API_ADMIN_PANEL } from '@/constants/routesConstant';
import requestAPI from '@/services/requestApiService';
import useAuthStore from '@/stores/useAuthStore';
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const pageSize = 5;
const currentPage = ref(1);
const maxPage = ref(1);
const lstData = ref(null);

const router = useRouter();
const _DB = inject('_DB');

const msgSuccess = ref(null);
const msgError = ref(null);

const isUpdate = ref(false);

const model = ref({
  id: null,
  name: null
});




const loadPage = (page) => {
  requestAPI
    .get(`${API_ADMIN_PANEL.CATEGORIES}`, {
      params: {
        page: page < 1 ? 1 : page,
        size: pageSize
      }
    })
    .then(({ data: response }) => {
      lstData.value = response.data;
      currentPage.value = response.data.currentPage + 1;
      maxPage.value = response.data.totalPages;
      if (maxPage.value < 1) {
        currentPage.value = 0;
      }
    })
    .catch((error) => {
      msgError.value = error?.response?.data?.message || 'An error occurred, please try again in a few minutes!';
    })
};

const clearMsg = () => {
  msgError.value = null;
  msgSuccess.value = null;
};

const clearForm = () => {
  Object.keys(model.value).forEach(key => {
    model.value[key] = null;
  });
};

const check = () => {
  clearMsg();
  if (!model.value.name) {
    msgError.value = 'Category name cannot be left blank';
    return false;
  }

  return true;
};

const showFormAdd = () => {
  clearForm();
  isUpdate.value = false;
};

const showFormUpdate = (o) => {
  isUpdate.value = true;
  model.value = {...o};
};

const showFormRemove = (o) => {
  model.value = {...o};
};

const handleAdd = () => {
  if(!check()) {
    return;
  }

  requestAPI
    .post(`${API_ADMIN_PANEL.CATEGORIES}`, model.value)
    .then(({ data: response }) => {
      msgSuccess.value = response.message;
      clearForm();
      loadPage(currentPage.value);
    })
    .catch((error) => {
      msgError.value = error?.response?.data?.message || 'Add new failed';
    })

};

const handleUpdate = () => {
  if(!check()) {
    return;
  }

  requestAPI
    .put(`${API_ADMIN_PANEL.CATEGORIES}/${model.value.id}`, model.value)
    .then(({ data: response }) => {
      msgSuccess.value = response.message;
      clearForm();
      loadPage(currentPage.value);
    })
    .catch((error) => {
      msgError.value = error?.response?.data?.message || 'Saved failed';
    })
};

const handleDelete = () => {
  clearMsg();
  requestAPI
    .delete(`${API_ADMIN_PANEL.CATEGORIES}/${model.value.id}`)
    .then(({ data: response }) => {
      msgSuccess.value = response.message;
      loadPage(currentPage.value);
    })
    .catch((error) => {
      msgError.value = error?.response?.data?.message || 'Deleted failed';
    })
  
};

onMounted(() => {
  if(!authStore?.user || authStore?.user.role !== 'ADMIN') {
    return router.push({name: 'home'});
  }

  _DB.value.table('DanhMuc');
  _DB.value.setPageSize(5);
  loadPage(currentPage.value);
});

</script>

<template>
  <div class="card border-0 rounded-3">
    <div class="card-body p-4">
      <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
        <span class="text-primary my-2">Categories Management</span>
        <button class="btn btn-primary rounded-5" data-bs-toggle="modal" data-bs-target="#add-update" @click="showFormAdd()"><i class="fa-solid fa-plus"></i> Add</button>
      </h5>
      <div class="card-text">
        <div class="alert alert-danger my-3" v-show="msgError">{{ msgError }}</div>
        <div class="alert alert-success my-3" v-show="msgSuccess">{{ msgSuccess }}</div>
        <div class="table-responsive">
          <table class="table">
              <thead>
              <tr>
                  <th>#</th>
                  <th class="w-100">Name</th>
                  <th></th>
              </tr>
              </thead>
              <tbody>
                <tr v-if="lstData?.data.length < 1">
                  <td colspan="4" class="text-center">Data empty.</td>
                </tr>
                <template v-else>
                  <tr v-for="o in lstData?.data" :key="o.id">
                      <td class="align-middle">{{ o.orderNumber }}</td>
                      <td class="align-middle">{{ o.name }}</td>
                      <td class="align-middle">
                        <div class="d-flex g-3">
                          <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#add-update" @click="showFormUpdate(o)">
                              <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#remove" @click="showFormRemove(o)">
                              <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                  </tr>
                </template>
              </tbody>
          </table>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center py-4">
        <button class="btn btn-primary rounded-5" :class="{disabled: currentPage <= 1 }" @click="loadPage(currentPage - 1)"><i class="fa-solid fa-chevron-left"></i></button>
        <span class="px-4">Page {{ currentPage }} / {{ maxPage }}</span>
        <button class="btn btn-primary rounded-5" :class="{disabled: currentPage >= maxPage }" @click="loadPage(currentPage + 1)"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>

    <div class="modal fade" id="add-update">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h1 class="modal-title fs-5" v-show="!isUpdate"><i class="fa-solid fa-plus"></i> Add new</h1>
                  <h1 class="modal-title fs-5" v-show="isUpdate"><i class="fa-solid fa-pen"></i> Edit</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name:</label>
                    <input type="text" class="form-control" id="recipient-name" v-model.trim="model.name">
                </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="handleAdd" v-show="!isUpdate">Add Now</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="handleUpdate" v-show="isUpdate">Save</button>
              </div>
          </div>
      </div>
    </div>

    <div class="modal fade" id="remove">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5"><i class="fa-solid fa-trash"></i> Delete</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="post">
                        <div class="mb-3">
                            <label class="col-form-label">Do you really want to delete the selected item?</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="handleDelete">Continue</button>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>
