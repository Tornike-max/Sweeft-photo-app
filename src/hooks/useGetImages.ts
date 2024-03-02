import { useInfiniteQuery } from "@tanstack/react-query";
import { getImages } from "../api/data";
import toast from "react-hot-toast";
import { IMAGES_PER_PAGE } from "../contstants/constants";

export const useGetImages = (searchedVal: string) => {
  const perPage = IMAGES_PER_PAGE;
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["images", perPage, searchedVal],
    queryFn: ({ pageParam }) => getImages({ pageParam, perPage, searchedVal }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < IMAGES_PER_PAGE) {
        return undefined;
      }
      return pages.length + 1;
    },
  });

  if (error) {
    toast.error("Error while getting images");
  }

  return { data, isPending, fetchNextPage, isFetchingNextPage, hasNextPage };
};
