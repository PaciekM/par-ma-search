import Axios from "axios";

const apiUrl = "url";

export class API {
  async get(inputValue: string): Promise<string[]> {
    Axios.get(apiUrl, {
      params: {
        value: inputValue,
      },
    })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        return ["error"];
      });
    return ["test"];
  }
}
