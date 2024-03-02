import { useSearchParams } from "react-router-dom";
import { useGetImages } from "../../hooks/useGetImages";
import { useInView } from "react-intersection-observer";
// import Spinner from "../../ui/Spinner";
import React, { useEffect, useState } from "react";
import ImageType, { SearchResultType } from "../../types/types";
import Spinner from "../../ui/Spinner";
import HistoryImages from "./HistoryImages";

export default function HistorySearchedImages() {
  const [searchParams] = useSearchParams();
  const { ref, inView } = useInView();
  const [imageLoaded, setImageLoaded] = useState(false);

  const serchedVal = searchParams.get("search");
  const { data, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetImages(serchedVal || "");

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  //   useEffect(() => {
  //     const image = new Image();
  //     image.onload = () => {
  //       setImageLoaded(true);
  //     };
  //     image.src = images.urls.regular;
  //   }, [data?.urls?.regular]);
  if (isPending) return null;

  console.log(data);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-8">
        {data
          ? data.pages.map((page: SearchResultType, index: number) => (
              <React.Fragment key={index}>
                {page?.results?.map((image: ImageType) => (
                  <HistoryImages key={image.id} image={image} />
                ))}
              </React.Fragment>
            ))
          : "No Data"}
      </div>
      {data && (
        <div className="mt-4" ref={ref}>
          {isFetchingNextPage ? (
            <Spinner width={10} height={10} />
          ) : !isFetchingNextPage ? (
            <p>No More Page!</p>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
