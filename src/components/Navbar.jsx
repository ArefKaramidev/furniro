import { NavLink } from "react-router-dom";
import { links } from "../data/links";
import profile from "../assets/icons/profile.svg";
import serach from "../assets/icons/serach.svg";
import like from "../assets/icons/like.svg";
import cart from "../assets/icons/cart.svg";
import titleLogo from "../assets/icons/title.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-16">
      <img src={titleLogo} alt="" />
      <div>
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={"px-10 font-medium text-lg"}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center justify-evenly gap-x-10">
        <img src={profile} alt="" />
        <img src={serach} alt="" />
        <img src={like} alt="" />
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
