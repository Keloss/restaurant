import About from "./pages/About.js"
import Lk from "./pages/Lk.js"
import Main from './pages/Main.js'
import {MAIN_ROUTE, ABOUT_ROUTE, LK_ROUTE} from "./utils/constants"
export const routers = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: LK_ROUTE,
        Component: Lk
    }
]