import { useInfiniteQuery } from "@tanstack/react-query";
import { getImages } from "../api/data";
import toast from "react-hot-toast";
import { MAX_IMAGE } from "../contstants/constants";

export const useGetImages = () => {
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: getImages,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < MAX_IMAGE) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });

  if (error) {
    toast.error("Error while getting images");
  }

  return { data, isPending, fetchNextPage, isFetchingNextPage, hasNextPage };
};
