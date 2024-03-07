import React from "react";
import "./RNews.css";
import TableDatas from "../Tables/TabelDatas";
export default function RecentNews() {
  return (
    <div className="container display-flex">
      <h6 className="Recent">Recent News</h6>
      <div className="karate-News"></div>
      <div className="News"></div>
      <div>
        <TableDatas/>
      </div>
    </div>
  );
}
