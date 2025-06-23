import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default UserLayout;
