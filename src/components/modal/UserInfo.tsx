import { HiOutlineXMark } from "react-icons/hi2";
import ImageType from "../../types/types";

interface UserInfoProps {
  data: ImageType;
  onClose: () => void;
}

const UserInfo = ({ data, onClose }: UserInfoProps) => {
  return (
    <div className="sticky top-0 w-full flex justify-between items-center py-2 bg-gray-100 ">
      <div className="w-full flex items-center py-2 gap-2">
        <img
          src={data?.user?.profile_image?.medium}
          alt="user-image"
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
        />
        <div className="flex flex-col justify-center items-start text-slate-900 font-semibold text-sm sm:text-md">
          <p className="font-semibold">{data?.user?.name}</p>
          <p className="text-slate-700">
            {data?.user?.location || "No Location Provided"}
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-red-500 hover:bg-red-200 hover:text-red-600 text-2xl rounded-full p-2 duration-150 transition-all"
      >
        <HiOutlineXMark />
      </button>
    </div>
  );
};

export default UserInfo;
