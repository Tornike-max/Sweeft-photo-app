import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ImageType from "../types/types";
import Modal from "./Modal";
import { Blurhash } from "react-blurhash";
import { useGetSingleImage } from "../hooks/useGetSingleImage";
import Spinner from "../ui/Spinner";

export default function Images({ images }: { images: ImageType }) {
  const [open, setOpen] = useState(false);
  const { data, isPending } = useGetSingleImage();

  const [searchParams, setSearchParams] = useSearchParams();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = images.urls.regular;
  }, [images.urls.regular]);

  if (isPending) return <Spinner width={10} height={10} />;

  const handleClickImage = (id: string) => {
    searchParams.set("imageId", id);
    setSearchParams(searchParams);
    setOpen(true);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className={`${imageLoaded ? "hidden" : "inline"}`}>
        {!imageLoaded && (
          <Blurhash
            hash={images.blur_hash}
            width={"100%"}
            height={"256px"}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </div>

      {imageLoaded && (
        <img
          onLoad={() => setImageLoaded(true)}
          src={images.urls.regular}
          alt={images.description}
          className={`w-full h-64 object-cover ${
            !imageLoaded ? "hidden" : "inline"
          }`}
          loading="lazy"
          onClick={() => handleClickImage(images.id)}
        />
      )}

      <div className="px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={images.user.profile_image.medium}
            alt="profile-image"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[2px] border-slate-300"
          />
          <div className="flex flex-col justify-center items-start gap-1">
            <p className="text-gray-900 font-semibold text-sm">
              {images.user.name}
            </p>
            <p className="text-gray-700 text-xs">
              {images.user.location || "No location provided"}
            </p>
          </div>
        </div>

        {/* <h2 className="text-gray-900 font-semibold mt-1">
          {image.description}
        </h2> */}
      </div>
      {open && (
        <div className="w-full">
          <Modal
            data={data}
            src={data.urls.full}
            open={open}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
