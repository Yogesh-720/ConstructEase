import { useState } from "react";
import { hamburger, closeIcon } from "../assets/icons";
import { headerlogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="padding-x pt-4 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerlogo} alt="Logo" height={50} width={160} />
        </a>

        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={handleMenuToggle}
        >
          <img
            src={menuOpen ? closeIcon : hamburger}
            alt="Menu Icon"
            width={25}
            height={25}
          />
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-light-green flex flex-col justify-center items-center z-50">
          <ul className="text-white text-center space-y-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-xl"
                  onClick={handleMenuToggle}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
