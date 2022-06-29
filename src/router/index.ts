import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 自定义属性类型检测
type RouterConfig = RouteRecordRaw & {
  hidden?: Boolean; // hidden属性非必填，值是布尔类型
  abc: String; //abc必填，值是字符串类型
};

const routes: Array<RouterConfig> = [
  {
    path: "/home",
    name: "Home",
    hidden: true,
    abc: "12",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    abc: "13",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
