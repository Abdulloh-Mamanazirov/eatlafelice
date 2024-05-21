import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../constants";
import type { IMenuItem, IMenuItemItself } from "../../../interfaces";

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

const index = () => {
  const ref = useRef<HTMLDialogElement>();
  const [data, setData] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [imagePreview, setImagePreview] = useState<string>(null);

  const fetchData = async () => {
    await axios.get("/menus").then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmitForm(e) {
    e.preventDefault();
    const { name, description, price, image } = e.target;
    const formData = new FormData();
    formData.append("file", image.files[0]);

    const data = {
      name: name.value,
      url: "string",
      description: description.value,
      price: +price.value,
    };

    await axios
      .post("/images/upload", formData)
      .then(async (res) => {
        if (res?.status === 200) {
          data.url = res.data?.split(
            "Image uploaded successfully. Image URL: "
          )[1];

          await axios
            .post("/menus", data)
            .then((response) => {
              if (response.status === 201) {
                fetchData();
                ref.current.close();
                toast.success("Added successfully");
              }
            })
            .catch(() => {
              toast.error("Something went wrong!");
            });
        }
      })
      .catch((err) => toast.error("Something went wrong!"));
  }

  return (
    <>
      <div className="w-full mb-5 flex justify-end">
        <button
          onClick={() => ref.current.showModal()}
          className="bg-blue-500 text-white px-5 py-1 rounded-md border hover:bg-blue-600 active:border-gray-500"
        >
          <span className="fa-solid fa-plus" /> Add item
        </button>
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

      {/* add menu item */}
      <dialog
        ref={ref}
        className="w-11/12 md:w-6/12 bg-white border rounded-lg p-3 backdrop:bg-black/40 shadow-md shadow-black/70"
      >
        <div className="flex items-center justify-between pb-2 border-b border-black/30 mb-3">
          <h3 className="text-lg font-medium">Add an item</h3>
          <button
            className="size-9 border border-gray-300 rounded-full hover:bg-gray-100"
            onClick={() => ref.current.close()}
          >
            <span className="fa-solid fa-close" />
          </button>
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              id="name"
              type="text"
              required
              className="border border-gray-300 rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              rows={3}
              required
              className="border border-gray-300 rounded-lg p-1"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="price">Price:</label>
            <input
              name="price"
              id="price"
              type="number"
              required
              className="border border-gray-300 rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="image">Image:</label>
            <input
              name="image"
              id="image"
              type="file"
              required
              accept=".jpg, .png, .jpeg, .webp, .svg, .gif"
              className="border border-gray-300 rounded-lg p-1 file:rounded-lg file:border-gray-200"
              onChange={(e) => {
                if (e.target.files[0])
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                else setImagePreview("");
              }}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="uploaded image"
                className="max-w-full max-h-72 object-cover"
              />
            )}
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-1 rounded-md border hover:bg-blue-600 active:border-gray-500"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default index;
