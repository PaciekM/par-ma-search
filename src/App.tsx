import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import ParMaHeader from "./components/ParMaHeader";
import ParMaContent from "./components/ParMaContent";
import { useData } from "./hooks/useData";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState<string>();
  const { data, loading, numberOfResults } = useData({ inputValue });
  const setValueCallback = (value: string) => {
    setInputValue(value);
  };
  return (
    <Layout>
      <ParMaHeader setValueCallback={setValueCallback} />
      <ParMaContent
        data={data}
        loading={loading}
        numberOfResults={numberOfResults}
      />
      <Footer
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        @ParMaSearch 2021 Maciej Parfieńczyk and Kacper Makar
      </Footer>
    </Layout>
  );
};

export default App;
