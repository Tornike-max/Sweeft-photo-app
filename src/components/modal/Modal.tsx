import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetSingleImage } from "../../hooks/useGetSingleImage";
import ImageContent from "./ImageContent";
import UserInfo from "./UserInfo";
import ImageData from "./ImageData";

type ModalType = {
  open: boolean;
  onClose: () => void;
};

export default function Modal({ open, onClose }: ModalType) {
  const [height, setHeight] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [imageLoaded, setImageLoaded] = useState(false);

  const { data, isPending } = useGetSingleImage();

  useEffect(() => {
    const updateHeight = () => {
      const viewportHeight = window.innerHeight;
      const maxHeight = 700;
      const newHeight = `${Math.min(viewportHeight, maxHeight)}px`;
      setHeight(newHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = data?.urls?.regular;
  }, [data?.urls?.regular]);

  const handleClose = () => {
    searchParams.delete("imageId");
    setSearchParams(searchParams);
    onClose();
  };

  if (isPending) return null;

  return (
    <div
      className={`fixed inset-0 flex py-2 justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent propagation of click events
        className={`bg-gray-100 rounded-t-xl overflow-y-auto shadow-lg px-4 transition-all ${
          open ? "scale-100 opacity-100 " : "scale-125 opacity-0"
        }`}
        style={{ width: "80%", maxHeight: "100%" }}
      >
        <UserInfo data={data} onClose={onClose} />
        <ImageContent
          data={data}
          imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}
          height={height}
        />
        <ImageData data={data} />
      </div>
    </div>
  );
}
