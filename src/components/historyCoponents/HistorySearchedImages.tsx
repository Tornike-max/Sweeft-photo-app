import React, { useEffect } from "react";
import ImageType, { SearchResultType } from "../../types/types";
import Images from "../Images";
import { useGetImages } from "../../hooks/useGetImages";
import { useInView } from "react-intersection-observer";
import Spinner from "../../ui/Spinner";

export default function HistorySearchedImages({
  serchedVal,
}: {
  serchedVal: string;
}) {
  const { data, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetImages(serchedVal || "");
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) return null;

  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-4">
        {data
          ? data?.pages?.map((page: SearchResultType, index: number) => (
              <React.Fragment key={index}>
                {page?.results?.map((image: ImageType) => (
                  <Images key={image.id} images={image} />
                ))}
              </React.Fragment>
            ))
          : "No Data"}
      </div>
      <div className="w-full flex justify-center items-center pt-8" ref={ref}>
        {isFetchingNextPage && <Spinner width={10} height={10} />}
        {!hasNextPage && (
          <p className="text-red-500 font-semibold text-lg">No More Page!</p>
        )}
      </div>
    </div>
  );
}
