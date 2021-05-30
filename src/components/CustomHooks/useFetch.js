import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ url, method }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios({ url, method })
      .then((res) => {
        setData(res.data.page["content-items"].content);
        setTitle(res.data.page.title);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url, method]);

  return { data, title, error };
};
export default useFetch;
