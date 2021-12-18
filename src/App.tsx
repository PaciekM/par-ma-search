import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import ParMaHeader from "./components/ParMaHeader";
import ParMaContent from "./components/ParMaContent";
import { useData } from "./hooks/useData";
import { useState } from "react";
import { SearchType } from "./models/models";

const App = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [page, setPage] = useState(1);
  const [type, setType] = useState<SearchType>(SearchType.TITLE);
  const { data, loading, numberOfResults } = useData({
    inputValue,
    page,
    typeValue: type,
  });
  const setValueCallback = (value: string) => {
    setInputValue(value);
  };
  const changePageCallback = (page: number) => {
    setPage(page);
  };
  return (
    <Layout>
      <ParMaHeader
        setValueCallback={setValueCallback}
        type={type}
        setType={setType}
      />
      <ParMaContent
        data={data}
        loading={loading}
        numberOfResults={numberOfResults}
        changePageCallback={changePageCallback}
        page={page}
        type={type}
      />
      {/* <Footer
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        @ParMaSearch 2021 Maciej Parfieńczyk and Kacper Makar
      </Footer> */}
    </Layout>
  );
};

export default App;
