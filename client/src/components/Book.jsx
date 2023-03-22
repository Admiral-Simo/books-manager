import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../redux/features/apiSlice";
import { setCurrentBook } from "../redux/features/currentBookSlice";

const Book = ({ id, cover, title, desc }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = () => {
    dispatch(setCurrentBook({ id, cover, title, desc }));
    navigate("/update");
  };
  const [deleteBook] = useDeleteBookMutation();
  return (
    <div className="shadow-lg bg-[#222] p-2 rounded-xl overflow-hidden">
      <img src={cover} className="h-96 w-full object-cover" alt="cover" />
      <div className="p-3">
        <h2 className="font-semibold text-3xl leading-7 text-white">{title}</h2>
        <p className="text-lg text-slate-300 leading-6 mt-5">{desc}</p>
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={() => deleteBook({ id })}
            className="py-2 px-5 bg-red-500 font-semibold text-gray-black rounded-md"
          >
            Delete
          </button>
          <button
            onClick={handleUpdate}
            className="py-2 px-5 bg-sky-500 font-semibold text-gray-black rounded-md"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
