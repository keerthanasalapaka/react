import React from "react";
import Table from "../Table/Table";
const Paragraph = (props) => {
  return (
    <div>
      <p>{props.data}</p>
      <Table />
    </div>
  );
};

export default Paragraph;
