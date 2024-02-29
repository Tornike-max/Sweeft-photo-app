import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaHistory } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="w-full flex justify-center items-center gap-8 text-stone-100 text-lg lg:text-xl py-4">
      <Link to="/" className={`flex items-center gap-2`}>
        <HiOutlineHomeModern />
        მთავარი
      </Link>
      <Link to="/history" className={`flex items-center gap-2`}>
        <FaHistory />
        ისტორია
      </Link>
    </div>
  );
}
