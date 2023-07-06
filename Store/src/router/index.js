import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Postagens.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      
    },

    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Registro.vue')
    },
    {
      path: '/forumpage/:id',
      name: 'forumpage',
    
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ForumPage.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Adminpage.vue'),
      meta: { requiresAdmin: true}
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  

  //COLOCANDO ADMIN
  let isAdmin = localStorage.getItem('da')


  console.log(isAdmin)
  const requiresAdmin = to.matched.some(route => route.meta.requiresAdmin);

  if (requiresAdmin && isAdmin != 'true') {
    next('/')
  } else {
    next();
  }
});

export default router
