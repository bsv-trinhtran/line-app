import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CouponList from '@/views/CouponList.vue'
import CouponDetails from '@/views/CouponDetails.vue'

const router = createRouter({
  history: createWebHistory(),
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
