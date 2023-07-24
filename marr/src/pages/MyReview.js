import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { ReviewStateContext } from "../App";
import ReviewList from "../components/ReviewList";

const MyReview = () => {
  const reviewList = useContext(ReviewStateContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    setData(reviewList);
  }, [reviewList]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <MyHeader
        headText={"리뷰 모아보기"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />
      <ReviewList reviewList={data} />
    </div>
  );
};

export default MyReview;
