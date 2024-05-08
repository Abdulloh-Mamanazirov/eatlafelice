import type { IMenuItem } from "../../interfaces";
import React from "react";
import { MenuPageBg } from "../../assets";

const mockData = [
  {
    id: 1,
    image:
      "https://thumbs.dreamstime.com/b/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg",
    title: "Sausage Pizza",
    description: "One of the most delicious pizzas ever cooked!",
    price: 10,
  },
  {
    id: 2,
    image:
      "https://t3.ftcdn.net/jpg/01/49/45/34/360_F_149453469_SzBktO0iOxgNkIZNgWD33nBf9BTufRdy.jpg",
    title: "Cheese Pizza",
    description: "Wanna try cheese pizza? Come and taste it!",
    price: 8.5,
  },
  {
    id: 3,
    image:
      "https://www.allrecipes.com/thmb/Yf8b1aeXsPlq4YR7doCr6JOQndY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6556969-390e7cdca370466fa397595aa76ee63e.jpg",
    title: "Bucatini Pasta",
    description:
      "These long, hollow spaghetti-like tubes (aka perciatelli) are unusual and fun! Try them in casseroles or Asian stir-fries, or tossed with a fresh tomato sauce.",
    price: 5.5,
  },
  {
    id: 4,
    image:
      "https://www.allrecipes.com/thmb/MIUEgFQqjqSd1iCBiekdsyEIqMQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/122627_Bow-Ties-with-Sausage-Tomatoes-and-Cream_Photo-by-Elijah-3b861a830595401da6c617cfd91ac22b.jpg",
    title: "Bow Tie Pasta (Farfalle)",
    description:
      "Use bow tie pasta to dress up any dish that calls for small pasta shapes, such as penne or shells. Also known as farfalle.",
    price: 7,
  },
];

const MenuCard1 = ({ item }: IMenuItem): React.JSX.Element => {
  return (
    <div className="profile-card rounded-xl shadow-md shadow-black/50 overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-200 border border-gray-200 group">
      <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
        <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-primary after:top-4 after:group-hover:size-[1%] after:delay-200 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-200 after:transition-all after:duration-200 before:absolute before:h-[6px] before:w-full before:bg-secondary before:bottom-4 before:group-hover:size-[1%] before:delay-200 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-200 before:transition-all before:duration-200">
          <img
            className="size-40 lg:size-36 aspect-square object-cover z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-200 transition-all duration-200"
            id="avatar"
            src={item.image}
          />
          <div className="absolute bg-gray-100 z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-200 transition-all duration-200 delay-300 group-hover:delay-0" />
        </div>
      </div>
      <div className="headings *:text-center">
        <p className="text-xl font-serif font-semibold text-[#434955]">
          {item.title}
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

const MenuCard2 = ({ item }: IMenuItem): React.JSX.Element => {
  return (
    <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:absolute before:top-0 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden shadow-md shadow-black/40">
      <img
        className="size-40 aspect-square object-cover bg-blue-700 mt-8 rounded-full border-2 border-white z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
        src={item.image}
      />
      <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
        <span className="text-2xl font-semibold">{item.title}</span>
        <p className="min-h-12 line-clamp-2 px-2">{item.description}</p>
      </div>
      <button className="bg-blue-700 px-4 py-1 mb-1 text-slate-50 rounded-md z-10 hover:scale-105 transition-all duration-500 hover:bg-blue-500">
        ${Number(item.price).toLocaleString("us-Us")}
      </button>
    </div>
  );
};

const index = (): React.JSX.Element => {
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-3">
        {mockData.map((item) => (
          <MenuCard1 key={item.id} item={item} />
        ))}
      </div>
      <br />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-3">
        {mockData.map((item) => (
          <MenuCard2 key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default index;
