import { Outlet } from "react-router-dom";
import SideBar from "../Components/AdminSide/SideBar";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <SideBar/>
      <Outlet/>
    </div>
  )
}
