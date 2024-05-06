import { Link } from "react-router-dom";
import { Logo, Leaves } from "../../assets";
import { CLIENT_PAGES } from "../../routes";

interface ILinkItem {
  item: {
    id: number;
    path: string;
    title: string;
    element: JSX.Element;
    show: boolean;
  };
}

const LinkComponent = ({ item }: ILinkItem) => {
  return (
    <div className="transition hover:text-primary">
      <Link to={item.path}>{item.title}</Link>
    </div>
  );
};

const index = () => {
  return (
    <div className="sidebar-bg h-full w-full overflow-hidden">
      <div className="h-full flex items-center justify-normal md-lg:flex-col md-lg:justify-between">
        <div className="md-lg:mt-10 md-lg:max-w-full">
          <Link to={"/"}>
            <img src={Logo} alt="company logo" className="w-full" />
          </Link>
        </div>

        <ul className="hidden md-lg:block font-patua text-white mt-20 text-2xl">
          {CLIENT_PAGES.map((item) => (
            <LinkComponent key={item.id} item={item} />
          ))}
        </ul>

        <div className="max-w-full mt-auto -mb-10 hidden md-lg:block">
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
