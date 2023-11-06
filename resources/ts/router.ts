import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@app/pages/HomeView.vue'
import CouponList from '@app/pages/CouponList.vue'
import CouponDetails from '@app/pages/CouponDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/coupon-list',
      name: 'couponlist',
      component: CouponList,
      meta: {
        title: 'クーポン一覧',
      }
    },
    {
      path: '/coupon-details/:id',
      name: 'coupon details',
      component: CouponDetails,
      meta: {
        title: 'クーポン詳細',
      }
    }
  ]
})

export default router
