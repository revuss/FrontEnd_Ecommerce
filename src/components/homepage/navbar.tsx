import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { initFlowbite } from "flowbite";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };
  useEffect(() => {
    initFlowbite();
  });

  return (
    <>
      <nav className="navbar">
        <div className="nav_screen">
          <span className="logo_box">
            <span className="logo">Application</span>
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="navbutton"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="menu_list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `link_man ${isActive ? "link_active" : "link_defaul"}`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `link_man ${isActive ? "link_active" : "link_defaul"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/men"
                  className={({ isActive }) =>
                    `link_man ${isActive ? "link_active" : "link_defaul"}`
                  }
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/woman"
                  className={({ isActive }) =>
                    `link_man ${isActive ? "link_active" : "link_defaul"}`
                  }
                >
                  Women
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `link_man ${isActive ? "link_active" : "link_defaul"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    Profile {/* <ChevronDownIcon /> */}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => handleClick("/orders")}>
                      Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem>Wishlist</DropdownMenuItem>
                    <DropdownMenuItem>Cart</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
