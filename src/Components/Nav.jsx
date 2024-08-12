import { hamburger } from "../assets/icons";
import { headerlogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x pt-4 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a  href="/">
          <img src={headerlogo} alt="Logo" height={50} width={160} />
        </a>

        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburger} alt="hamburgerLogo" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
