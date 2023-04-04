import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style/main.scss";
import App from "./App.vue";
import Home from "./components/pages/Home.vue";
import Apollo from "./components/pages/projects/Apollo.vue";
import Classic3D from "./components/pages/projects/Classic3D.vue";
import CommandsPlus from "./components/pages/projects/CommandsPlus.vue";

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
            {
                path: "/projects/classic-3d",
                component: Classic3D,
            },
            {
                path: "/projects/commands-plus",
                component: CommandsPlus,
            },
        ],
    }))
    .mount("#app");
