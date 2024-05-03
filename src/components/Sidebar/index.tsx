import { Link } from "react-router-dom";
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
    <div className="sidebar-bg h-full w-full">
      <div className="flex items-center justify-normal md-lg:flex-col md-lg:justify-between">
        <div className="md-lg:mt-10">
          <Link to={"/"}>
            <img
              src="https://max-themes.net//demos/albertos/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <ul className="hidden md-lg:block font-patua text-white mt-20 text-2xl">
          {CLIENT_PAGES.map((item) => (
            <LinkComponent key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
