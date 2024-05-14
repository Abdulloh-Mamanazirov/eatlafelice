import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../../../assets";

const index = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("laFeliceAuthenticationToken");

  useEffect(() => {
    if (token) {
      navigate("/admin/home");
    }
  }, [window.location.pathname]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = e.target;
    const data = {
      username: username.value,
      password: password.value,
    };

    if (data) {
      navigate("/admin/home");
      sessionStorage.setItem(
        "laFeliceAuthenticationToken",
        JSON.stringify(data)
      );
    }
  };

  return (
    <section className="flex justify-center relative">
      <img
        src="https://pagedone.io/asset/uploads/1702362010.png"
        alt="gradient background image"
        className="w-full h-screen object-cover fixed"
      />
      <div className="mx-auto max-w-lg px-6 lg:px-8 absolute pt-10">
        <div className="bg-white rounded-2xl lg:mb-8 mb-5 py-3">
          <img src={LogoIcon} alt="la felice logo" className="mx-auto" />
        </div>
        <div className="rounded-2xl bg-white shadow-xl">
          <form onSubmit={handleLogin} className="lg:p-11 p-7 mx-auto">
            <div className="mb-11">
              <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10">
                Welcome Back
              </h1>
            </div>
            <input
              name="username"
              type="text"
              required
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
            />
            <input
              name="password"
              type="password"
              required
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mt-6 mb-11"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default index;
