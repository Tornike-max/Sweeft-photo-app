import { Blurhash } from "react-blurhash";
import ImageType from "../../types/types";
import { useState } from "react";

const ImageContent = ({
  data,
  imageLoaded,
  setImageLoaded,
  height,
}: {
  data: ImageType;
  imageLoaded: boolean;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  height: string;
}) => {
  const [zoomed, setIsZoomed] = useState(false);
  const handleZoomImage = () => {
    setIsZoomed((zoomed) => !zoomed);
  };

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={data ? data.blur_hash : ""}
          width={"100%"}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && (
        <img
          className={`w-full max-h-[calc(${
            zoomed ? "100vh-4.5rem" : "100vh-4rem"
          })] object-contain rounded-t-lg  cursor-${
            zoomed ? "zoom-out" : "zoom-in"
          }`}
          src={data.urls.regular}
          alt={data.id}
          onLoad={() => setImageLoaded(true)}
          onClick={handleZoomImage}
        />
      )}
    </>
  );
};

export default ImageContent;
