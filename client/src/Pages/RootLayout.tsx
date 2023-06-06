import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            Root
            <Outlet />
        </>);
}

export default RootLayout;