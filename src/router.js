import Vue from 'vue';
import Router from 'vue-router';

import store from './store';
import Base from './views/Base.vue';
import AppHeader from './components/AppHeader.vue';
import AppContent from './views/AppContent.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import User from './views/User.vue';
import Fellas from './views/Fellas.vue';
import Fella from './views/Fella.vue';
import Suits from './views/Suits.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { unsafe: true },
      beforeEnter(to, from, next) {
        if (store.state.user) {
          next({ name: 'home' });
        } else {
          next();
        }
      },
    },
    {
      path: '',
      component: Base,
      children: [
        {
          path: '',
          components: {
            header: AppHeader,
            main: AppContent,
          },
          children: [
            {
              path: '/',
              name: 'home',
              component: Home,
            },
            {
              path: '/users',
              name: 'users',
              component: Users,
            },
            {
              path: '/users/:id',
              name: 'user',
              component: User,
              props: true,
            },
            {
              path: '/fellas',
              name: 'fellas',
              component: Fellas,
            },
            {
              path: '/fellas/:id',
              name: 'fella',
              component: Fella,
              props: true,
            },
            {
              path: '/suits',
              name: 'suits',
              component: Suits,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      redirect: {
        name: 'home',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.unsafe || store.state.user) {
    next();
  } else {
    next({ name: 'login' });
  }
});

export default router;
