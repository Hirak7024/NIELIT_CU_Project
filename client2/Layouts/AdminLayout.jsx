import { Outlet } from "react-router-dom";
import SideBar from "../Components/AdminSide/SideBar";

export default function AdminLayout() {
  return (
    <div>
      <SideBar/>
      <Outlet/>
    </div>
  )
}
