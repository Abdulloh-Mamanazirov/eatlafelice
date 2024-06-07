import axios from "axios";
import { useEffect, useState } from "react";
import { About1, About2, About3, PastaIcon, PizzaIcon } from "../../assets";

const index = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    await axios.get("/abouts").then((res) => setData(res.data?.[0]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative">
      <section className="z-10 py-14 lg:py-24 relative about-bg md-lg:h-[80vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center text-white font-bold text-4xl mb-5 md:text-5xl md:leading-normal">
            <span className="font-serif italic">La Felice:</span> A Slice of{" "}
            <span className="bg-gradient-to-r from-primary via-gray-200 to-secondary bg-clip-text text-transparent">
              Italy
            </span>{" "}
            in Your Neighborhood
          </h1>
          <p className="max-w-sm mx-auto text-center text-base italic font-serif font-normal leading-7 text-white mb-9">
            Serving authentic Italian pizza and pasta in the heart of your city.
            Experience Italy on a plate!
          </p>
        </div>
      </section>

      <section className="z-10 py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div>
              <img
                src={About1}
                alt="La Felice Pizza & Pasta"
                className="max-lg:mx-auto rounded-lg"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  {data?.about1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="z-10 py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src={About3}
                  alt="La Felice Pizza & Pasta"
                  className="block lg:hidden mb-9 mx-auto rounded-lg"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Discover La Felice: Your Italian Culinary Journey Begins Here
                </h2>
                <p className="font-normal leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  {data?.about2}
                </p>
              </div>
            </div>
            <div>
              <img
                src={About2}
                alt="La Felice Pizza & Pasta"
                className="hidden lg:block rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* bg icons */}
      <div className="absolute top-[51%] md:top-[55%] -right-28 z-0">
        <img src={PastaIcon} alt="pasta icon" className="w-2/3 -rotate-12" />
      </div>
      <div className="absolute top-[10%] md:top-1/4 -left-28 z-0">
        <img
          src={PizzaIcon}
          alt="pizza icon"
          className="w-2/3 -rotate-12 rotate-animation"
        />
      </div>
    </div>
  );
};

export default index;
