
import AccountPage from '@/views/AccountPage.vue';
import AdminPanelPage from '@/views/AdminPanelPage.vue';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import LogoutPage from '@/views/LogoutPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpPage,
  }, 
  {
    path: "/admin-panel",
    name: "admin-panel",
    component: AdminPanelPage,
  },
  {
    path: "/admin-panel/:component",
    name: "admin-panel-component",
    component: AdminPanelPage,
  },
  {
    path: "/account",
    name: "account",
    component: AccountPage,
  },
  {
    path: "/account/information",
    name: "account-information",
    component: AccountPage,
  },
  
  {
    path: "/logout",
    name: "logout",
    component: LogoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
