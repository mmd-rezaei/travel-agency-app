import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div className="admin-layout">
        <aside>
            <Outlet/>
        </aside>
    </div>
  )
}

export default AdminLayout