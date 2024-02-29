import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ImageType from "../types/types";
import Modal from "./Modal";

export default function Image({ image }: { image: ImageType }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickImage = (id: string) => {
    searchParams.set("imageId", id);
    setSearchParams(searchParams);
    setOpen(true);
  };
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        src={image.urls.regular}
        alt={image.description}
        className="w-full h-64 object-cover"
        loading="lazy" // Lazy loading images
        onClick={() => handleClickImage(image.id)}
      />
      <div className="px-4 py-3">
        <p className="text-gray-700 text-sm">{image.user.name}</p>
        <h2 className="text-gray-900 font-semibold mt-1">
          {image.description}
        </h2>
      </div>
      {/* Memoize the Modal component */}
      {open && (
        <div className="w-full">
          <Modal open={open} onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
