import { useState, useEffect } from "react";

const useCallApi = (api, dataPath) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    api()
      .then((res) => {
        // access dataPath properties over results query
        const results = dataPath
          .split(".")
          .reduce((acc, key) => acc?.[key], res);

        if (results) setData(results);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, data };
};

export default useCallApi;
