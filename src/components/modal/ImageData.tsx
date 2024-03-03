import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCalendarDays, HiOutlineCamera } from "react-icons/hi2";
import { formatDate } from "../../ui/formatDate";
import ImageType from "../../types/types";
import { formatNumbers } from "../../ui/formatNumbers";

const ImageData = ({ data }: { data: ImageType }) => {
  return (
    <div className="w-full py-4 sm:px-4">
      <div className="w-full flex justify-start items-center sm:flex-row gap-4 sm:gap-8">
        <div className="text-start">
          <p className="text-sm sm:text-lg font-bold text-gray-800">Views</p>
          <p className="text-base sm:text-xl font-bold text-blue-600">
            {formatNumbers(data?.views)}
          </p>
        </div>
        <div className="text-start">
          <p className="text-sm sm:text-lg font-bold text-gray-800">
            Downloads
          </p>
          <p className="text-base sm:text-xl font-bold text-blue-600">
            {formatNumbers(data?.downloads)}
          </p>
        </div>
        <div className="text-start">
          <p className="text-sm sm:text-lg font-bold text-gray-800">Likes</p>
          <p className="text-base sm:text-xl font-bold text-blue-600">
            {formatNumbers(data?.likes)}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">{data?.alt_description}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn className="text-lg text-blue-500" />
          <p className="text-sm text-gray-600">
            {data?.location?.city ||
              data?.location?.name ||
              "No Location Provided"}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <HiOutlineCalendarDays className="text-lg text-blue-500" />
          <p className="text-sm text-gray-600">
            Published {formatDate(data?.created_at)}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <HiOutlineCamera className="text-lg text-blue-500" />
          <p className="text-sm text-gray-600">
            {data?.exif?.name || "No Model Provided"}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {data?.tags?.map((tag: { title: string }) => (
            <span
              key={tag?.title}
              className="inline-block bg-gray-200 hover:bg-gray-300 duration-100 transition-all rounded-full px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm cursor-pointer"
            >
              {tag?.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageData;
