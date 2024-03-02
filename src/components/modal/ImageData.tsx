import { Key } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCalendarDays, HiOutlineCamera } from "react-icons/hi2";
import { formatDate } from "../../ui/formatDate";
import ImageType from "../../types/types";

const ImageData = ({ data }: { data: ImageType }) => {
  return (
    <div className="w-full py-2">
      <div className="w-full flex justify-center items-start flex-col mt-4 overflow-y-auto max-h-48">
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn className="text-lg" />
          <p>
            {data.location.city || data.location.name || "No Location Provided"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineCalendarDays className="text-lg" />
          <p>Published {formatDate(data?.created_at)}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineCamera className="text-lg" />
          <p>{data.exif.name || "No Model Provided"}</p>
        </div>
      </div>

      <div className="w-full py-2 pb-8">
        <div className="w-full flex justify-start items-center gap-2 flex-wrap">
          {data.tags.map((tag: { title: string }, i: Key) => (
            <span
              key={i}
              className="inline-block cursor-pointer bg-gray-200 hover:bg-gray-300 duration-100 transition-all rounded-full px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm"
            >
              {tag.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageData;
