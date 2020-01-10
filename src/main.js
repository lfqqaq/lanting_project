import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index";
import "./utils/rem";
import { service } from "./utils/request";
import animate from "animate.css";
import {
  DropdownMenu,
  DropdownItem,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Icon,
  Button,
  Tabbar,
  RadioGroup,
  Radio,
  TabbarItem,
  NavBar,
  ActionSheet,
  Rate,
  Field,
  Switch,
  Area,
  Tab,
  Tabs,
  Cell,
  CellGroup
} from "vant";

Vue.use(DropdownMenu)
  .use(DropdownItem)
  .use(Rate)
  .use(Field)
  .use(Area)
  .use(Switch)
  .use(RadioGroup)
  .use(Radio)
  .use(Search)
  .use(Swipe)
  .use(Lazyload)
  .use(Icon)
  .use(NavBar)
  .use(Button)
  .use(Tabbar)
  .use(Tabs)
  .use(Tab)
  .use(Cell)
  .use(ActionSheet)
  .use(CellGroup)
  .use(TabbarItem)
  .use(SwipeItem);
Vue.config.productionTip = false;
Vue.prototype.$service = service;
Vue.use(animate)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
