import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";

export default function MainPage() {
    return <>
        <NavBar />
        <Outlet />
    </>
}