import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <main className="transition-all duration-500 ease-in-out">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;