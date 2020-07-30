import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../components/EventList";
import EventCreate from "../components/EventCreate";
import EventShow from "../components/EventShow";
import User from "../components/User";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "event-list",
        component: EventList
    },
    {
        path: "/event",
        name: "event-show",
        component: EventShow
    },
    {
        path: "/event/create",
        name: "event-create",
        component: EventCreate
    },
    {
        path: "/user/:username",
        name: "user",
        component: User

    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
