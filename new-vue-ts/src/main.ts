import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import Page1 from './Page1.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
    children: [
      {
        path: "/page1",
        name: "page1",
        component: Page1,
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h: any) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
    router
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
