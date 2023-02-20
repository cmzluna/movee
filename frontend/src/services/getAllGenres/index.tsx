import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/genre/movie/list",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
});

export default async function getAllGenres<T>() {
  try {
    const { data } = await axiosInstance.get<{ genres: T[] }>("");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return Promise.reject(error.response.data);
    }
  }
}
