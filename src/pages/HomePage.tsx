import Images from "../components/Images";
import { useGetImages } from "../hooks/useGetImages";
import ImageType from "../types/types";
import Spinner from "../ui/Spinner";

export default function HomePage() {
  const { data, isPending } = useGetImages();

  if (isPending) return <Spinner width={20} height={20} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-8">
        {data.map((image: ImageType) => (
          <Images key={image.id} images={image} />
        ))}
      </div>
    </div>
  );
}
