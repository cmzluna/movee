import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
});

export default async function callApi<T>(query: string, variables: object) {
  try {
    const { data } = await axiosInstance.post<{ data: T }>("", {
      query,
      variables,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return Promise.reject(error.response.data);
    }
  }
}
