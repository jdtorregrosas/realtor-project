import React from "react";
import { useLocation, useNavigate } from "react-router";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getSelectedRouteClasses = (route) => {
    return location.pathname === route
      ? "border-b-2 border-purple-700 font-semibold text-purple-400"
      : "";
  };

  const linkClasses = "p-3 text-sm cursor-pointer";

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <img
          className="h-5 cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <ul className="flex space-x-10">
          <li
            className={`${linkClasses} ${getSelectedRouteClasses("/")}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`${linkClasses} ${getSelectedRouteClasses("/offers")}`}
            onClick={() => navigate("/offers")}
          >
            Offers
          </li>
          {/* <li>
            <a href="/profile">Profile</a>
          </li> */}
          <li
            className={`${linkClasses} ${getSelectedRouteClasses("/sign-in")}`}
            onClick={() => navigate("/sign-in")}
          >
            Sign In
          </li>
        </ul>
      </nav>
    </header>
  );
}
