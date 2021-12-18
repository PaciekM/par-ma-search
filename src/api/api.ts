import Axios from "axios";
import { Document, SearchType } from "../models/models";

const apiUrl = "http://127.0.0.1:8000/search/";

interface ResponseData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Document[];
}

const initialResponseData = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export class API {
  async get(
    page: number,
    type: SearchType,
    inputValue?: string
  ): Promise<ResponseData> {
    return Axios.get(apiUrl, {
      params: {
        value: inputValue,
        page,
        type,
      },
    })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        return initialResponseData;
      });
  }
}
