import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getSingleImage } from "../api/data";

export const useGetSingleImage = () => {
  const [searchParams] = useSearchParams();
  const imageId = searchParams.get("imageId");
  const { data, isPending, error } = useQuery({
    queryKey: ["images", imageId],
    queryFn: () => getSingleImage(imageId || ""),
  });

  if (error) throw new Error("Error while fetching data");

  return { data, isPending };
};
