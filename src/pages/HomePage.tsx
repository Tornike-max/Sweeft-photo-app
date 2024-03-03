import React, { useEffect } from "react";
import { useGetImages } from "../hooks/useGetImages";
import ImageType, { SearchResultType } from "../types/types";
import Spinner from "../ui/Spinner";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import Images from "../components/Images";
import ErrorData from "../ui/ErrorData";

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const searchedVal = searchParams.get("search") || "";

  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetImages(searchedVal);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isPending && !data)
    return (
      <div className="w-full flex justify-center items-center mt-20">
        <Spinner />
      </div>
    );

  if (searchedVal && data && data.pages[0].total === 0) return <ErrorData />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {searchedVal &&
          data &&
          data?.pages?.map((page: SearchResultType, index: number) => (
            <React.Fragment key={index}>
              {page?.results.map((image: ImageType) => (
                <Images key={image.id} images={image} />
              ))}
            </React.Fragment>
          ))}
        {data &&
          !searchedVal &&
          data?.pages?.map((page: ImageType[], index: number) => (
            <React.Fragment key={index}>
              {page.map((image: ImageType) => (
                <Images key={image.id} images={image} />
              ))}
            </React.Fragment>
          ))}
      </div>

      {data?.pages && (
        <div className="mt-6" ref={ref}>
          {isFetchingNextPage ? (
            <Spinner />
          ) : !hasNextPage ? (
            <p>No More Page!</p>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
