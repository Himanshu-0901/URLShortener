import rootRoute from "./rootRoute.js"
import { authRoute } from "./auth.route.js"
import { homePageRoute } from "./homepage.js"
import { dashboardRoute } from "./dashboard.js"



export const routeTree = rootRoute.addChildren([
    authRoute,
    homePageRoute,
    dashboardRoute
])
