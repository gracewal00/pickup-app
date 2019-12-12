import Vue from "nativescript-vue";

import routes from "./routes";

import BackendService from "./services/backend-service";

const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

new Vue({
    render: h => h("frame", [h(backendService.working() ? routes.home : routes.error)])
}).$start();

