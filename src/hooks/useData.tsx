import { useEffect, useState } from "react";
import { API } from "../api/api";

interface useDataProps {
  inputValue?: string;
}

export const useData = ({ inputValue }: useDataProps) => {
  const [data, setData] = useState<string[]>();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<string>();
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [api] = useState(new API());
  console.log(inputValue);
  useEffect(() => {
    if (inputValue) setInput(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (input) {
      const fetchData = async () => {
        // You can await here
        const data = await api.get(input);
        setLoading(true);
        setData(data);
        setNumberOfResults(data.length);
        setLoading(false);
        // ...
      };
      fetchData();
    }
  }, [api, input]);

  return { data, loading, numberOfResults };
};
