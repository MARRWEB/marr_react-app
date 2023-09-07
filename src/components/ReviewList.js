import { useState } from "react";
import ReviewItem from "./ReviewItem";
import { sortOptionList, filterOptionList } from "../utils/options";

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

const ReviewList = ({ reviewList }) => {
  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");

  const getProcessedReviewList = () => {
    const filterCallBack = (item) => {
      if (filter === "verybad") {
        return parseInt(item.score) == 1;
      }
      if (filter === "bad") {
        return parseInt(item.score) == 2;
      }
      if (filter === "normal") {
        return parseInt(item.score) == 3;
      }
      if (filter === "good") {
        return parseInt(item.score) == 4;
      } else {
        return parseInt(item.score) == 5;
      }
    };
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(reviewList));
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="ReviewList">
      <div className="ReviewBack">
        <div className="first_col">
          <div className="left_col">
            <h4>내 리뷰 {reviewList.length}개</h4>

            <ControlMenu
              value={sortType}
              onChange={setSortType}
              optionList={sortOptionList}
            />
            <ControlMenu
              value={filter}
              onChange={setFilter}
              optionList={filterOptionList}
            />
          </div>
        </div>

        <div className="second_col">
          {getProcessedReviewList().map((it) => (
            <ReviewItem key={it.id} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
};

ReviewList.defaultProps = {
  reviewList: [],
};

export default ReviewList;
