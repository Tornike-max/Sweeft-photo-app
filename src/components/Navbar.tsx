import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaHistory } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="w-full flex justify-center items-center gap-4 sm:gap-8 text-stone-100 text-lg lg:text-xl py-4">
      <Link
        to="/"
        className={`flex items-center gap-2 ${
          pathname === "/" && "bg-indigo-500"
        } hover:bg-indigo-500 py-2 px-3 rounded-lg duration-100 transition-all`}
      >
        <HiOutlineHomeModern />
        მთავარი
      </Link>
      <Link
        to="/history"
        className={`flex items-center gap-2 ${
          pathname === "/history" && "bg-indigo-500"
        } hover:bg-indigo-500 py-2 px-3 rounded-lg duration-100 transition-all`}
      >
        <FaHistory />
        ისტორია
      </Link>
    </div>
  );
}
