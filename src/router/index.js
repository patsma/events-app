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
        path: "/event/:id",
        name: "event-show",
        component: EventShow,
        props: true
    },
    {
        path: "/event/create",
        name: "event-create",
        component: EventCreate
    },
    {
        path: "/user/:username",
        name: "user",
        component: User,
        props: true

    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
