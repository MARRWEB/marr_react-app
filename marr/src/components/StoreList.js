import React, { useState, useEffect, useContext } from "react";
import { StoreDispatchContext, RestaurantStateContext } from "../App";

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
  const context = useContext(RestaurantStateContext);
  const { restaurantList, storeList } = context;
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
      <div>
        {storeList.length > 0 ? (
          <div className="grid_container">
            {getProcessedStoreList().map((it) => (
              <StoreItem
                key={it.id}
                {...it}
                toggleLiked={() => unlikeStoreById(it.id)}
              />
            ))}
          </div>
        ) : (
          <div>
            <img
              className="no-item-img"
              src={process.env.PUBLIC_URL + `assets/myPlaces/heart.png`}
              alt="No stores liked"
            />
            <div className="empty-message-big"> 아직 찜한 가게가 없어요 </div>
            <div className="empty-message-small">
              지금 바로 당신의 마라탕 찜 리스트를 만들어보세요 !
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

StoreList.defaultProps = {
  storeList: [],
};

export default StoreList;
