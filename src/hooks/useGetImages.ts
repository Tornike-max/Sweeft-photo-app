import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api/data";
import toast from "react-hot-toast";

export const useGetImages = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  if (error) {
    toast.error("Error while getting images");
  }

  return { data, isPending };
};
