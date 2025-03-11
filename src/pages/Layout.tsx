import NavBar from '@/components/components/NavBar/NavBar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default Layout