import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { RestaurantStateContext } from "../App";
import StoreReviewList from "../components/StoreReviewList";
import ReviewItem from "../components/ReviewItem";

const StoreReview = () => {
  const context = useContext(RestaurantStateContext);
  const { reviewList } = context;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [curDate, setCurDate] = useState(new Date());
  const { storeName } = useParams(); // 라우트 파라미터에서 storeName 가져오기

  useEffect(() => {
    // 가게 이름으로 리뷰 필터링
    const filteredReviews = reviewList.filter(
      (review) => review.store === storeName
    );
    setData(filteredReviews);
  }, [reviewList, storeName]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <MyHeader
        headText={storeName + "  " + "리뷰"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />

      <StoreReviewList reviewList={data}></StoreReviewList>
    </div>
  );
};

export default StoreReview;
