import { memo, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ImageType from "../types/types";
import Modal from "./Modal";
import { Blurhash } from "react-blurhash";
import { useGetSingleImage } from "../hooks/useGetSingleImage";

const Images = memo(
  ({ images }: { images: ImageType }) => {
    const { data, isPending } = useGetSingleImage();

    const [open, setOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      const image = new Image();
      image.onload = () => {
        setImageLoaded(true);
      };
      image.src = images.urls.regular;
    }, [images.urls.regular]);

    const handleClickImage = useCallback(
      (e: React.MouseEvent, id: string) => {
        e.preventDefault();

        searchParams.set("imageId", id);
        setSearchParams(searchParams);
        setOpen(true);
      },
      [searchParams, setSearchParams]
    );

    return (
      <div className="rounded-lg overflow-hidden shadow-lg">
        <div className={`${imageLoaded ? "hidden" : "inline"}`}>
          {!imageLoaded && (
            <Blurhash
              hash={images.blur_hash}
              width={"100%"}
              height={"256px "}
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
            className={`w-full h-64 object-cover transition-transform duration-300 hover:shadow-lg cursor-pointer hover:scale-105 ${
              !imageLoaded ? "hidden" : "inline"
            }`}
            loading="lazy"
            onClick={(e) => handleClickImage(e, images.id)}
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
        </div>
        {!isPending && open && (
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
  },
  (prevProps, nextProps) => {
    return prevProps.images.id === nextProps.images.id;
  }
);

export default Images;
