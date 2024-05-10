import type { ILinkItem } from "../../interfaces";
import { Link } from "react-router-dom";
import { Logo, Leaves } from "../../assets";
import { CLIENT_PAGES } from "../../routes";

const LinkComponent = ({ item }: ILinkItem) => {
  return (
    <div className="transition hover:text-primary mb-2">
      <Link to={item.path}>{item.title}</Link>
    </div>
  );
};

const index = () => {
  return (
    <div className="sidebar-bg h-full w-full overflow-hidden">
      <div className="h-full flex flex-col justify-between">
        <div className="mt-10 max-w-full">
          <Link to={"/"}>
            <img src={Logo} alt="company logo" className="w-full" />
          </Link>
        </div>

        <ul className="font-patua text-white mt-20 text-2xl text-center">
          {CLIENT_PAGES.filter((item) => item.show).map((item) => (
            <LinkComponent key={item.id} item={item} />
          ))}
        </ul>

        <div className="max-w-full mt-auto -mb-10">
          <img
            src={Leaves}
            alt="leaves"
            style={{
              transform: "rotate(-10deg)",
            }}
            className="w-2/3 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
