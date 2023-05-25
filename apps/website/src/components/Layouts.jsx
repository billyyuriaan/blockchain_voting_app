import { Outlet } from "react-router-dom"
import Navbars from "./Navbars"

const Layouts = () => {
  return (
    <div>
        <Navbars />
        <Outlet />
    </div>
  )
}

export default Layouts