import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

// router01
import BoardList1 from '@/components/router01/BoardList.vue';
import FileList1 from '@/components/router01/FileList.vue';
import PictureList1 from '@/components/router01/PictureList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },
    // router01
    {
      path: '/r01/board',
      component: BoardList1,
    },
    {
      path: '/r01/file',
      component: FileList1,
    },
    {
      path: '/r01/picture',
      component: PictureList1,
    },
  ],
});

export default router;
