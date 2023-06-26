import React, { useState, useEffect, useContext } from "react";
import { StoreDispatchContext, StoreStateContext } from "../App";

import StoreItem from "./StoreItem";

// select option으로 들어갈 list
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const StoreList = () => {
  const storeList = useContext(StoreStateContext);
  const { onRemove } = useContext(StoreDispatchContext);

  const [sortType, setSortType] = useState("latest");
  const [filteredData, setFilteredData] = useState(storeList);

  const getProcessedStoreList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const sortedList = filteredData.sort(compare);
    return sortedList;
  };

  useEffect(() => {
    setFilteredData(storeList);
  }, [storeList]);

  const unlikeStoreById = (id) => {
    const target = storeList.find((item) => item.id === id);

    if (target.isLiked === true) {
      if (window.confirm("찜하기 목록에서 삭제하시겠습니까?")) {
        onRemove(target.id);
      }
    }
  };

  return (
    <div className="StoreList">
      <div className="menu_wrapper">
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
      </div>
      <div className="grid_container">
        {getProcessedStoreList().map((it) => (
          <StoreItem
            key={it.id}
            {...it}
            toggleLiked={() => unlikeStoreById(it.id)}
          />
        ))}
      </div>
    </div>
  );
};

StoreList.defaultProps = {
  storeList: [],
};

export default StoreList;
