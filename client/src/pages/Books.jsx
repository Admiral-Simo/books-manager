import Book from "../components/Book";
import { useGetBooksQuery } from "../redux/features/apiSlice";
import { Link } from "react-router-dom";

const Books = () => {
  const { data: books } = useGetBooksQuery();
  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-5xl pt-10 text-white font-bold mb-5">
          Discover Your Books
        </h1>
        <Link to="/add" className="text-white text-3xl px-10 py-4 rounded-md bg-green-600">Add Book</Link>
      </div>
      <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-screen-xl mx-auto">
        {books?.map((item) => {
          return <Book key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Books;
