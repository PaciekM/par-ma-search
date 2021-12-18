import { useEffect, useState } from "react";
import { API } from "../api/api";
import { Document, SearchType } from "../models/models";

interface useDataProps {
  inputValue?: string;
  page: number;
  typeValue: SearchType;
}

export const useData = ({ inputValue, page, typeValue }: useDataProps) => {
  const [data, setData] = useState<Document[]>();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<string>();
  const [numberOfResults, setNumberOfResults] = useState<number>(0);
  const [api] = useState(new API());
  const [type, setType] = useState<SearchType>(SearchType.TITLE);
  useEffect(() => {
    if (inputValue) setInput(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (typeValue) setType(typeValue);
  }, [typeValue]);

  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      const data = await api.get(page, type, input);
      setLoading(true);
      setData(data.results);
      setNumberOfResults(data.count);
      setLoading(false);
      // ...
    };
    fetchData();
  }, [api, input, page, type]);

  return { data, loading, numberOfResults };
};
