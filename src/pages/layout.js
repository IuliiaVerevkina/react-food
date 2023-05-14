import { NavLink, Outlet } from "react-router-dom";

import logo from "../resources/img/logo.png";

const Layout = () => {
      return (
            <>
                  <header>
                        <div className="logo">
                              <img src={logo} alt="logo" />
                        </div>
                        <nav className="menu">
                              <NavLink to="/">Home</NavLink>
                        </nav>
                  </header>

                  <main>
                        <Outlet />
                  </main>

                  <footer>
                        <div className="logo">
                              <img src={logo} alt="logo" />
                        </div>
                        <div>
                              © {new Date().getFullYear()} Copyright
                        </div>
                  </footer>
            </>
      );
};
export { Layout };
