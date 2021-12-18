import { Divider, Pagination, Skeleton } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Document, SearchType } from "../../models/models";
import DataList from "../DataList";

import "./styles.css";

interface ParMaContentProps {
  data?: Document[];
  numberOfResults: number;
  loading: boolean;
  page: number;
  changePageCallback: (page: number) => void;
  type: SearchType;
}

const emptySpace = "255px";
const emptySpaceForSkeleton = "385px";
const ParMaContent = ({
  data,
  numberOfResults,
  loading,
  page,
  changePageCallback,
}: ParMaContentProps) => {
  return (
    <Content>
      <Divider style={{ background: "black", margin: "0" }} />
      <div className="numberOfResults-container">
        <div style={{ width: emptySpace }}></div>
        <h5>Number of results: {numberOfResults} </h5>
      </div>
      <div className="results-container">
        <div
          style={{ minWidth: loading ? emptySpaceForSkeleton : emptySpace }}
        ></div>
        {loading ? (
          <Skeleton title={false} paragraph={{ rows: 18 }} loading={loading} />
        ) : (
          <div>
            <DataList dataList={data} />
            <Pagination
              total={numberOfResults}
              onChange={changePageCallback}
              defaultCurrent={page}
              style={{ margin: "40px 0" }}
            />
          </div>
        )}
      </div>
    </Content>
  );
};

export default ParMaContent;
