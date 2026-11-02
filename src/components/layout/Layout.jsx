import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  return (
    <div app-container>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="foot-content">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
