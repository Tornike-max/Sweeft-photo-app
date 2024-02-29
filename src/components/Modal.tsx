import { useGetSingleImage } from "../hooks/useGetSingleImage";
import { HiOutlineCalendarDays, HiOutlineCamera } from "react-icons/hi2";
import { formatDate } from "../ui/formatDate";
import { formatNumbers } from "../ui/formatNumbers";
import { Key } from "react";

type ModalType = {
  open: boolean;
  onClose: () => void;
};

export default function Modal({ open, onClose }: ModalType) {
  const { data, isPending } = useGetSingleImage();

  if (isPending) return <p>Loading...</p>;
  console.log(data);
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex py-2 justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-gray-100 rounded-t-xl overflow-y-auto shadow-lg px-4 py-2 transition-all ${
          open ? "scale-100 opacity-100 " : "scale-125 opacity-0"
        }`}
        style={{ width: "80%", maxHeight: "100%" }}
      >
        <div className="w-full flex justify-start items-center sticky py-2 gap-2 bg-gray-100 ">
          <img
            src={data.user.profile_image.medium}
            alt="user-image"
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          />
          <div className="flex flex-col justify-center items-start text-slate-900 font-semibold text-sm sm:text-md">
            <p className="font-semibold">{data.user.name}</p>
            <p className="text-slate-700">{data.user.location}</p>
          </div>
        </div>

        <img className="w-full h-auto" src={data.urls.full} alt={data.id} />
        <div className="w-full flex justify-start items-center gap-10 pt-2">
          <div className="flex flex-col justify-center items-start">
            <p className="text-slate-700 font-semibold">Views</p>
            <p className="text-slate-900 font-semibold">
              {formatNumbers(data.views)}
            </p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-slate-700 font-semibold">Downloads</p>
            <p className="text-slate-900 font-semibold">
              {formatNumbers(data.downloads)}
            </p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-slate-700 font-semibold">Likes</p>
            <p className="text-slate-900 font-semibold">
              {formatNumbers(data.likes)}
            </p>
          </div>
        </div>

        <div className="w-full py-2">
          <div className="w-full flex justify-center items-start flex-col mt-4 overflow-y-auto max-h-48">
            <div className="flex items-center gap-2">
              <HiOutlineCalendarDays className="text-lg" />
              <p>Published {formatDate(data.created_at)}</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineCamera className="text-lg" />
              <p>{data.exif.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineCalendarDays className="text-lg" />
              <p>Published {formatDate(data.created_at)}</p>
            </div>
          </div>
        </div>

        <div className="w-full py-2">
          <div className="w-full flex justify-center items-center gap-2 flex-wrap">
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
    </div>
  );
}
