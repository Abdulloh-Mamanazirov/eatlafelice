import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";

const Empty = () => {
  return (
    <div className="w-full text-center">
      <span className="fa-solid fa-inbox text-4xl md:text-6xl" />
      <p className="text-3xl tracking-wider">Empty</p>
    </div>
  );
};

const index = () => {
  const ref = useRef<HTMLDialogElement>();
  const [data, setData] = useState(null);
  const [updateData, setUpdateData] = useState(null);

  const fetchData = async () => {
    await axios.get("/abouts").then((res) => setData(res.data?.[0]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmitAbout(e) {
    e.preventDefault();
    const { about1, about2 } = e.target;
    const data = {
      about1: about1.value,
      about2: about2.value,
    };

    // create
    axios
      .post("/abouts", data)
      .then(() => {
        toast.success("About Text added successfully");
        fetchData();
        e.target.reset();
        ref.current.close();
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  }

  async function handleEditAbout(e) {
    e.preventDefault();
    const { about1, about2 } = e.target;
    const data = {
      about1: about1.value,
      about2: about2.value,
    };

    // update
    axios
      .put(`/abouts/${updateData.id}`, data)
      .then(() => {
        toast.success("About Text updated successfully");
        fetchData();
        e.target.reset();
        ref.current.close();
        setUpdateData(null);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="border rounded-xl p-2">
          <h2 className="text-2xl font-medium">About Text 1</h2>
          <hr className="my-3" />
          {data?.about1 ? <p>{data?.about1}</p> : <Empty />}
        </div>
        <div className="border rounded-xl p-2">
          <h2 className="text-2xl font-medium">About Text 2</h2>
          <hr className="my-3" />
          {data?.about2 ? <p>{data?.about2}</p> : <Empty />}
        </div>
      </div>
      <div className="w-full mt-5 flex justify-end">
        <button
          onClick={() => {
            if (data?.id) {
              setUpdateData(data);
              ref.current.showModal();
            } else {
              ref.current.showModal();
            }
          }}
          className="bg-blue-500 text-white px-5 py-1 rounded-md border hover:bg-blue-600 active:border-gray-500"
        >
          <span className="fa-solid fa-edit" /> Edit About texts
        </button>
      </div>

      {/* About texts modal */}
      <dialog
        ref={ref}
        className="w-11/12 md:w-6/12 bg-white border rounded-lg p-3 backdrop:bg-black/40 shadow-md shadow-black/70"
      >
        <div className="flex items-center justify-between pb-2 border-b border-black/30 mb-3">
          <h3 className="text-lg font-medium">Edit About texts</h3>
          <button
            className="size-9 border border-gray-300 rounded-full hover:bg-gray-100"
            onClick={() => ref.current.close()}
          >
            <span className="fa-solid fa-close" />
          </button>
        </div>
        <form onSubmit={updateData ? handleEditAbout : handleSubmitAbout}>
          <div className="flex flex-col gap-2">
            <label htmlFor="about1">About Text 1:</label>
            <textarea
              name="about1"
              id="about1"
              rows={10}
              defaultValue={updateData ? updateData?.about1 : ""}
              className="border border-gray-300 rounded-lg p-1"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="about2">About Text 2:</label>
            <textarea
              name="about2"
              id="about2"
              rows={10}
              defaultValue={updateData ? updateData?.about2 : ""}
              className="border border-gray-300 rounded-lg p-1"
            ></textarea>
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
