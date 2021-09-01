/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import VueRouter from 'vue-router'
  const component: DefineComponent<{}, {}, any>
  interface Vue {
    $router: VueRouter
  }
  export default component
}
