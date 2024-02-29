const BASE_URL = `https://api.unsplash.com`;

export const getImages = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/photos?page=1&per_page=20&order_by=popular&client_id=${
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
