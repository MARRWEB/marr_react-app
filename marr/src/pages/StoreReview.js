import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { ReviewStateContext } from "../App";
import StoreReviewList from "../components/StoreReviewList";

const StoreReview = () => {
  const storereviewList = useContext(ReviewStateContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    setData(storereviewList);
  }, [storereviewList]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <MyHeader
        headText={"리뷰"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />
      <StoreReviewList storereviewList={data} />
    </div>
  );
};

export default StoreReview;
