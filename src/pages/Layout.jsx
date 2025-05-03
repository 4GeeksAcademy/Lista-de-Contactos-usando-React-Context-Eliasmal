import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import {UserCreate} from "../components/UserCreate"


export const Layout = () => {
    return (
        <ScrollToTop>
                <Outlet />
                <UserCreate />
        </ScrollToTop>
    )
}