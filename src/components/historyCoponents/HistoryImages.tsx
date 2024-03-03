import { useEffect, useState } from "react";
import ImageType from "../../types/types";
import { Blurhash } from "react-blurhash";

export default function HistoryImages({ image }: { image: ImageType }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = image?.urls?.regular;
  }, [image.urls.regular]);

  return (
    <>
      <div className={`${imageLoaded ? "hidden" : "inline"}`}>
        {!imageLoaded && (
          <Blurhash
            hash={image.blur_hash}
            width={"100%"}
            height={"256px "}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </div>
      {imageLoaded && (
        <div className="flex justify-center items-center flex-col w-full rounded-b-lg bg-slate-200">
          <img
            key={image.id}
            onLoad={() => setImageLoaded(true)}
            src={image?.urls.regular}
            alt={image?.description}
            className={`w-full h-64 object-cover transition-transform duration-300 hover:shadow-lg cursor-pointer hover:scale-105 rounded-t-lg ${
              !imageLoaded ? "hidden" : "inline"
            }`}
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
