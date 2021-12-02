import Search from "antd/lib/input/Search";
import { Header } from "antd/lib/layout/layout";

import "./styles.css";

interface ParMaHeaderProps {
  setValueCallback: (value: string) => void;
}

const ParMaHeader = ({ setValueCallback }: ParMaHeaderProps) => {
  return (
    <Header>
      <div className="header-container">
        <h1>ParMaSearch</h1>
        <Search
          placeholder="input search text"
          onSearch={(value) => setValueCallback(value)}
          style={{ width: 300 }}
        />
      </div>
    </Header>
  );
};

export default ParMaHeader;
