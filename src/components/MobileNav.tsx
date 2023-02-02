import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="absolute w-full bg-[#1D1C1E]">
      <nav className="px-5 py-7">
        <ul>
          <Link to="/about">
            <li className="text-white text-2xl tracking-[2px]">OUR COMPANY</li>
          </Link>
          <Link to="/location">
            <li className="text-white text-2xl tracking-[2px]">LOCATIONS</li>
          </Link>
          <Link to="/contact">
            <li className="text-white text-2xl tracking-[2px]">CONTACT</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
