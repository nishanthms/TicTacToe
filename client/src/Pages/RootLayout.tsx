import { Outlet } from "react-router-dom";
import Header from "../Component/Header";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>);
}

export default RootLayout;