import React from "react";
import { Document } from "../../models/models";

import "./styles.css";

interface DataListProps {
  dataList?: Document[];
}

const DataList = ({ dataList }: DataListProps) => {
  return (
    <div className="data-list">
      {dataList?.map((word, index) => (
        <React.Fragment key={index}>
          <p className="title">{word.title}</p>
          <p className="text">{word.text}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DataList;
