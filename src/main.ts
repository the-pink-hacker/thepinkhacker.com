import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style/main.scss";
import App from "./App.vue";
import Home from "./components/pages/Home.vue";
import Apollo from "./components/pages/projects/Apollo.vue";

createApp(App)
    .use(createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                component: Home,
            },
            {
                path: "/projects/apollo",
                component: Apollo,
            },
        ],
    }))
    .mount("#app");
