import AboutUsPage from '@/views/AboutUsPage.vue';
import AccountPage from '@/views/AccountPage.vue';
import AdminPanelPage from '@/views/AdminPanelPage.vue';
import CartPage from '@/views/CartPage.vue';
import CategoriesPage from '@/views/CategoriesPage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import LogoutPage from '@/views/LogoutPage.vue';
import NewsDetailPage from '@/views/NewsDetailPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import PurchasePage from '@/views/PurchasePage.vue';
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
    path: "/news",
    name: "news",
    component: NewsPage,
  },
  {
    path: "/news/:id",
    name: "news-detail",
    component: NewsDetailPage,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUsPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
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
    path: "/account/purchase",
    name: "account-purchase",
    component: PurchasePage,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutPage,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesPage,
  },
  {
    path: "/category/:id",
    name: "category",
    component: CategoriesPage,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductPage,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutPage,
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
