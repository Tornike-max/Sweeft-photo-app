import { useQuery } from "@tanstack/react-query";
import { getUserImageByUsername } from "../api/data";

export const useGetUserPhotos = (username: string) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["user-images"],
    queryFn: () => getUserImageByUsername(username),
  });

  if (error) {
    throw new Error("Error while getting images");
  }

  return { data, isPending };
};
