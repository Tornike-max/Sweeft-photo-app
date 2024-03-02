import axios from "axios";

const BASE_URL = `https://api.unsplash.com`;
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

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
      response = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
          page: pageParam,
          per_page: perPage,
          order_by: "popular",
          query: searchedVal,
          client_id: API_KEY,
        },
      });
    } else {
      response = await axios.get(`${BASE_URL}/photos`, {
        params: {
          page: pageParam,
          per_page: perPage,
          order_by: "popular",
          client_id: API_KEY,
        },
      });
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `Error: ${error.response.status} - ${error.response.data}`
        );
      } else if (error.request) {
        throw new Error("Error: No response received from the server");
      } else {
        throw new Error(`Error: ${error.message}`);
      }
    } else {
      throw new Error(`Error: ${error}`);
    }
  }
};

export const getSingleImage = async (imageId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/${imageId}`, {
      params: {
        client_id: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `Error: ${error.response.status} - ${error.response.data}`
        );
      } else if (error.request) {
        throw new Error("Error: No response received from the server");
      } else {
        throw new Error(`Error: ${error.message}`);
      }
    } else {
      throw new Error(`Error: ${error}`);
    }
  }
};

export const getUserImageByUsername = async (username: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/photos`, {
      params: {
        page: 1,
        per_page: 10,
        client_id: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `Error: ${error.response.status} - ${error.response.data}`
        );
      } else if (error.request) {
        throw new Error("Error: No response received from the server");
      } else {
        throw new Error(`Error: ${error.message}`);
      }
    } else {
      throw new Error(`Error: ${error}`);
    }
  }
};
