import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //args is used for passing parameters/arguments to api . rest operator ... is used to allow this function to take zero or more arguments . with this rest operator we get all the arguments and then put them in a single array
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args); //args is used for passing parameters/arguments to api. now we can spread the array by calling api function. spread args
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setData(response?.data);
  };

  return { data, error, loading, request };
};
