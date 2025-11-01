import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import nuestraTierraLogo from "../../assets/images/logo/logo.svg";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavbarDesktop({ navigationItems, handleMobileMenu }) {
  const location = useLocation();
  const [hasBackground, setHasBackground] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // cambiar fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setHasBackground(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  return (
    <nav
      aria-label="Global"
      className={`flex items-center justify-between px-6 py-1 lg:px-8 animate-fade-down animate-duration-[2500ms] animate-delay-[250ms]
        ${  hasBackground
            ? 
            "bg-white/40 shadow-md backdrop-blur-sm"
            :
             "bg-white/70"
        }`}
    >
      {/* Logo */}
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">NuestraTierraLogoCo</span>
          <img
            alt="Logo"
            src={nuestraTierraLogo}
            className="h-16 relative top-0"
          />
        </Link>
      </div>

      {/* Botón Mobile */}
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={handleMobileMenu}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-10" />
        </button>
      </div>

      {/* Menu Desktop */}
      <div className="hidden lg:flex items-center lg:gap-x-12" ref={dropdownRef}>
        {navigationItems.map((item) =>
         (
            <Link
              key={item.name}
              to={item.to}
              className={`text-sm/6 font-semibold cursor-pointer ${
                location.pathname === item.to
                  ? "text-[#2d63aa]"
                  : "text-[#032579] hover:text-[#2d63aa]"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
