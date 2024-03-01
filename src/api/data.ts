import { MAX_IMAGE } from "../contstants/constants";

const BASE_URL = `https://api.unsplash.com`;

export const getImages = async ({ pageParam }: { pageParam: number }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/photos?page=${pageParam}&per_page=${MAX_IMAGE}&order_by=popular&client_id=${
        import.meta.env.VITE_UNSPLASH_API_KEY
      }`
    );
    if (!response.ok) {
      throw new Error("Api does not give us response");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Error while getting images");
  }
};

export const getSingleImage = async (imageId: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/photos/${imageId}?client_id=${
        import.meta.env.VITE_UNSPLASH_API_KEY
      }`
    );
    if (!response.ok) {
      throw new Error("Api does not give us response");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Error while getting image");
  }
};

export const getSearchedImage = async (query: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/photos?page=1&query=${query}`
    );
    if (!response.ok) throw new Error("Response error");

    const data = await response.json();

    if (!data) throw new Error("No Data");

    return data;
  } catch (error) {
    throw new Error("Error while getting searched image");
  }
};
