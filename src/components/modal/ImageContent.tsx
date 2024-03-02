import { Blurhash } from "react-blurhash";
import ImageType from "../../types/types";

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
          className="w-full h-auto rounded-t-lg"
          src={data.urls.regular}
          alt={data.id}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </>
  );
};

export default ImageContent;
