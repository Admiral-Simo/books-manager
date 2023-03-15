import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../redux/features/apiSlice";

const Add = () => {
  const navigate = useNavigate();
  const [addBook] = useAddBookMutation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    console.log(title, desc, cover);
    if (title && desc && cover) {
      console.log("test 2");
      addBook({ title, desc, cover }).then((resp) => console.log("resp", resp));
      navigate("/");
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link to="/">
          <h1 className="text-5xl pt-10 text-white font-bold mb-5">
            Discover Your Books
          </h1>
        </Link>
      </div>
      <div className="px-2 max-w-screen-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl shadow-lg mt-10 bg-[#222] p-12 rounded-xl overflow-hidden mx-auto flex flex-col gap-10 text-white"
        >
          <h2 className="font-bold text-3xl">Add A book</h2>
          <div className="flex flex-col gap-1">
            <label className="capitalize">title :</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
              className="py-4 px-5 bg-gray-50 text-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="capitalize">desciption :</label>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="desc"
              className="py-4 px-5 bg-gray-50 text-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="capitalize">cover :</label>
            <input
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              type="text"
              placeholder="cover"
              className="py-4 px-5 bg-gray-50 text-black focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-green-600 font-bold text-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
