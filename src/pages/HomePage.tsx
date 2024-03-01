import React, { useEffect } from "react";
import Images from "../components/Images";
import { useGetImages } from "../hooks/useGetImages";
import ImageType from "../types/types";
import Spinner from "../ui/Spinner";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetImages();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending && !data) return <Spinner width={20} height={20} />;

  console.log(data);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-8">
        {data &&
          data.pages.map((page: ImageType[], index: number) => (
            <React.Fragment key={index}>
              {page.map((image: ImageType) => (
                <Images key={image.id} images={image} />
              ))}
            </React.Fragment>
          ))}
      </div>
      <div ref={ref}>
        {isFetchingNextPage && <Spinner width={10} height={10} />}
      </div>
    </div>
  );
}
