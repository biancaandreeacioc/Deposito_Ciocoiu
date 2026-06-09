import { Hello } from "../components/Hello";
import { HelloAbout } from "../components/HelloAbout";
import { Outlet } from "react-router-dom";

export function About() {
    return (
    <>
        <Hello></Hello>
        <Outlet></Outlet>
        <HelloAbout></HelloAbout>
    </>
    )
}