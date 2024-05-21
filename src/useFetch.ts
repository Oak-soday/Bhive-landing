const useFetch = async (url: any) => {
  const fetchImage = async () => {
    try {
      const response = await fetch(`${url}`);
      return response;
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  fetchImage();
};

export default useFetch;
