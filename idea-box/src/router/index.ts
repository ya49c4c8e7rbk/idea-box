import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Signin from '@/views/Signin.vue';
import Home from '@/views/Home.vue';
import firebase from '@/firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    name: 'signin',
    component: Signin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.path === '/signin') {
    next();
  } else {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {
        store.commit('userState/userInfo', userInfo);
        next();
      } else {
        next({path: '/signin'});
      }
    });
  }
});

export default router;
