const BASE_URL = `https://api.unsplash.com`;
const API_KEY: string = import.meta.env.VITE_UNSPLASH_API_KEY;
export const getImages = async ({
  pageParam = 1,
  perPage,
  searchedVal,
}: {
  pageParam?: number;
  perPage: number;
  searchedVal: string;
}) => {
  try {
    let response;
    if (searchedVal) {
      response = await fetch(
        `${BASE_URL}/search/photos?page=${pageParam}&per_page=${perPage}&order_by=popular&query=${searchedVal}&client_id=${API_KEY}`
      );
    }
    if (searchedVal === "") {
      response = await fetch(
        `${BASE_URL}/photos?page=${pageParam}&per_page=${perPage}&order_by=popular&client_id=${API_KEY}`
      );
    }

    if (response && !response.ok) {
      throw new Error("Api does not give us response");
    }
    const data = await response?.json();

    return data;
  } catch (error) {
    throw new Error("Error while getting images");
  }
};

export const getSingleImage = async (imageId: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/photos/${imageId}?client_id=${API_KEY}`
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

export const getUserImageByUsername = async (username: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/${username}/photos?page=${1}&per_page=${10}&client_id=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Error while getting user photos");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Can't get user images");
  }
};

// export const getSearchedImage = async (query: string) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/search/photos?page=1&per_page=${perPage}&query=${query}`
//     );
//     if (!response.ok) throw new Error("Response error");

//     const data = await response.json();

//     if (!data) throw new Error("No Data");

//     return data;
//   } catch (error) {
//     throw new Error("Error while getting searched image");
//   }
// };
