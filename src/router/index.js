import Vue from "vue";
import Router from "vue-router";
import Home from "views/Home/Home.vue";
import Course from "views/Course/Course.vue";
import Mine from "views/Mine/Mine.vue";
import Author from "views/Author.vue";

Vue.use(Router);

const router = new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: { name: "home" } },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/choice",
      name: "choice",
      component: () => import("../views/Home/home-choice.vue")
    },
    {
      path: "/odds",
      name: "odds",
      component: () => import("../views/Home/home-odds.vue")
    },
    {
      path: "/ware",
      name: "ware",
      component: () => import("../views/Home/home-ware.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/Home/home-search.vue")
    },
    {
      path: "/choiceDetail:id",
      name: "choiceDetail",
      component: () => import("../views/Home/choice-detail.vue")
    },
    {
      path: "/wareDetail:id",
      name: "wareDetail",
      component: () => import("../views/Home/ware-detail.vue")
    },
    {
      path: "/confirmOrder",
      name: "confirmOrder",
      component: () => import("../views/Home/confirm-order.vue")
    },
    {
      path: "/payDetail",
      name: "payDetail",
      component: () => import("../views/Home/pay-detail.vue")
    },
    {
      path: "/addressList",
      name: "addressList",
      component: () => import("../views/Mine/address-list.vue")
    },
    {
      path: "/addressAdd:id",
      name: "addressAdd",
      component: () => import("../views/Mine/address-add.vue")
    },
    {
      path: "/mineExtend:id",
      name: "mineExtend",
      component: () => import("../views/Mine/mine-extend.vue")
    },
    {
      path: "/mineOrder:type",
      name: "mineOrder",
      component: () => import("../views/Mine/mine-order.vue")
    },
    {
      path: "/publicExtend",
      name: "publicExtend",
      component: () => import("../views/Mine/public-extend.vue")
    },
    {
      path: "/cashFinish",
      name: "cashFinish",
      component: () => import("../views/Mine/cash-finish.vue")
    },
    {
      path: "/mineCash",
      name: "mineCash",
      component: () => import("../views/Mine/mine-cash.vue")
    },
    {
      path: "/course",
      name: "course",
      component: Course
    },
    {
      path: "/mine",
      name: "mine",
      component: Mine
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  if (!/micromessenger/i.test(navigator.userAgent)) {
    next()
    return
  }
  if (to.name === 'Author') {
    next()
    return
  }
  let wxUserInfo = localStorage.getItem('wxUserInfo')
  console.log(wxUserInfo)
  if (!wxUserInfo) {
    sessionStorage.setItem('wxRedirectUrl', to.fullPath)
    let appId = "wxca03308fc2a786c1";
    let redirectUrl = encodeURIComponent('http://classroom-h5.tcaizy.cn/#/author');
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  }
  else {
    next()
  }
})


export default router
