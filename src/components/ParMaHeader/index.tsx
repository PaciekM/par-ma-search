import { Radio } from "antd";
import Search from "antd/lib/input/Search";
import { Header } from "antd/lib/layout/layout";
import { SearchType } from "../../models/models";

import "./styles.css";

interface ParMaHeaderProps {
  setValueCallback: (value: string) => void;
  type: SearchType;
  setType: React.Dispatch<React.SetStateAction<SearchType>>;
}
const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const ParMaHeader = ({ setValueCallback, type, setType }: ParMaHeaderProps) => {
  const handleSizeChange = (e: any) => {
    setType(e.target.value);
  };
  const searchArray = Object.values(SearchType);
  return (
    <Header>
      <div className="header-container">
        <h1>ParMaSearch</h1>
        <Search
          placeholder="input search text"
          onSearch={(value) => setValueCallback(value)}
          style={{ width: 300 }}
        />
        <Radio.Group onChange={handleSizeChange} value={type}>
          {searchArray.map((value) => (
            <Radio.Button value={value} key={value}>
              {capitalizeFirstLetter(value)}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </Header>
  );
};

export default ParMaHeader;
