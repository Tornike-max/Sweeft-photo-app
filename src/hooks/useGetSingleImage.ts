import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getSingleImage } from "../api/data";

export const useGetSingleImage = () => {
  const [searchParams] = useSearchParams();
  const imageId = searchParams.get("imageId");
  const { data, isPending } = useQuery({
    queryKey: ["image", imageId],
    queryFn: () => getSingleImage(imageId || ""),
  });

  return { data, isPending };
};
