import axios from "axios";
import type { IMenuItem, IMenuItemItself } from "../../interfaces";
import { useState, useEffect } from "react";
import { MenuPageBg } from "../../assets";
import { BASE_URL } from "../../constants";

const Empty = () => {
  return (
    <div className="w-full text-center">
      <span className="fa-solid fa-inbox text-4xl md:text-6xl" />
      <p className="text-3xl tracking-wider">Empty</p>
    </div>
  );
};

const MenuCard1 = ({ item }: IMenuItem): React.JSX.Element => {
  return (
    <div className="profile-card rounded-xl shadow-md shadow-black/50 overflow-hidden relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-200 border border-gray-200 group">
      <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
        <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-primary after:top-4 after:group-hover:size-[1%] after:delay-200 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-200 after:transition-all after:duration-200 before:absolute before:h-[6px] before:w-full before:bg-secondary before:bottom-4 before:group-hover:size-[1%] before:delay-200 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-200 before:transition-all before:duration-200">
          <img
            className="size-40 lg:size-36 aspect-square object-cover z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-200 transition-all duration-200"
            id="avatar"
            src={BASE_URL + "/api/images/" + item.url}
          />
          <div className="absolute bg-gray-100 z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-200 transition-all duration-200 delay-300 group-hover:delay-0" />
        </div>
      </div>
      <div className="headings *:text-center">
        <p className="text-xl font-serif font-semibold text-[#434955]">
          {item.name}
        </p>
        <p className="w-fit mx-auto px-5 bg-secondary rounded-md text-white">
          ${Number(item.price).toLocaleString("us-Us")}
        </p>
        <p className="min-h-12 line-clamp-2 px-2 py-1">{item.description}</p>
      </div>
      <div className="w-full group-hover:outline-[15px] outline outline-8 outline-primary group-hover:transition-all group-hover:duration-200 transition-all duration-200" />
    </div>
  );
};

const index = (): React.JSX.Element => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    await axios.get("/menus").then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* header */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src={MenuPageBg}
          alt="la felice menu"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-top"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-serif italic tracking-wide font-bold text-white sm:text-6xl">
              MENU
            </h2>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-4xl text-center">
          Meet our Menu <span className="fa-solid fa-utensils" />
        </h3>
      </div>
      {data?.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
          {data?.map((item: IMenuItemItself) => (
            <MenuCard1 key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default index;
