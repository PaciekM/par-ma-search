import { Divider, Skeleton } from "antd";
import { Content } from "antd/lib/layout/layout";

import "./styles.css";

interface ParMaContentProps {
  data?: string[];
  numberOfResults: number;
  loading: boolean;
}

const emptySpace = "255px";
const emptySpaceForSkeleton = "385px";
const ParMaContent = ({
  data,
  numberOfResults,
  loading,
}: ParMaContentProps) => {
  console.log(loading);
  return (
    <Content>
      <Divider style={{ background: "black", margin: "0" }} />
      <div className="numberOfResults-container">
        <div style={{ width: emptySpace }}></div>
        <h5>Number of results: {numberOfResults} </h5>
      </div>
      <div className="results-container">
        <div style={{ width: emptySpaceForSkeleton }}></div>
        <Skeleton title={false} paragraph={{ rows: 12 }} loading={loading} />
      </div>
    </Content>
  );
};

export default ParMaContent;
