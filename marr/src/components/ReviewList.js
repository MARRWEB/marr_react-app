import { useState } from "react";
import ReviewItem from "./ReviewItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "모든리뷰" },
  { value: "verybad", name: "1점" },
  { value: "bad", name: "2점" },
  { value: "normal", name: "3점" },
  { value: "good", name: "4점" },
  { value: "verygood", name: "5점" },
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
      <div className="first_col">
        <div className="left_col">
          <h4>내 리뷰 {reviewList.length}개</h4>
        </div>
        <div className="right_col">
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
  );
};

ReviewList.defaultProps = {
  reviewList: [],
};

export default ReviewList;
