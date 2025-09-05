
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="transition-all duration-500 ease-in-out">
        <Outlet />
        
      </main>
      <Footer />
      
    </>
  )
}

export default Layout
