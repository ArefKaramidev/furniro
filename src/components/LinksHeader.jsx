import { NavLink } from "react-router-dom";
import { links } from "../data/links";

const HeaderLinks = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-4 justify-center h-full w-full lg:flex-row lg:items-center">
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={"px-10 font-medium text-lg py-2"}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default HeaderLinks;
