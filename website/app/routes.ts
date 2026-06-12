import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    route("proxy", "routes/proxy.tsx"),
    route("messenger", "routes/messenger.tsx"),
    route("weaver", "routes/weaver.tsx"),

] satisfies RouteConfig;
