import { Outlet } from "react-router-dom";
import SideMenu from "../../Components/SideMenu/SideMenu";
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="Landing-Page-Main">
      <SideMenu />
      <div className="Page-Outlet">
      <Outlet />
      </div>
    </div>
  )
}
