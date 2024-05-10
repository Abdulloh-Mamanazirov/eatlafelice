import { useNavigate } from "react-router-dom";
import { PizzaIcon } from "../../assets";

const index = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-950 to-sky-900">
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center text-white">
          <div className="flex items-center gap-1">
            <span className="text-9xl font-patua">4</span>
            <img
              src={PizzaIcon}
              alt="pizza icon"
              className="size-32 transition duration-500 hover:rotate-180"
            />
            <span className="text-9xl font-patua">4</span>
          </div>
          <p className="font-serif italic">Page not found</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-5 px-10 py-2 border rounded-md transition hover:backdrop-blur-lg hover:shadow-sm hover:shadow-white"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
