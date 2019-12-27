import Vue from "nativescript-vue";
//import BackendService from "./services/backend-service";
import Home from "./components/Home"

//const backendService = new BackendService();
//Vue.prototype.$backendService = backendService;



new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }

    // render: h => h("frame", [h(backendService.getEvents() ? routes.home : routes.error)])
    // render: routes.home;
}).$start();

