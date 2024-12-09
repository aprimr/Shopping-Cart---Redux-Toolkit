import { useLocation } from "react-router"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { Outlet } from "react-router"

function App() {

  const location = useLocation();

  // Define routes where the NavBar and Footer should be hidden
  const hideNavBarFooterRoutes = ['/login', '/register'];

  // Check if the current route is one of those where the NavBar and Footer should be hidden
  const shouldHideNavBarFooter = hideNavBarFooterRoutes.includes(location.pathname);


  return (
    <>
    {!shouldHideNavBarFooter && <NavBar />}
    <Outlet />
    {!shouldHideNavBarFooter && <Footer/>}
    </>
  )
}

export default App
