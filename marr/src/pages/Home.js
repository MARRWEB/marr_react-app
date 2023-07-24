import { RestaurantStateContext } from "../App";
import { useEffect, useState, useContext } from "react";

// Components
import MainHeader from "../components/MainHeader";
import SearchBar from "../components/SearchBar";
import Map from "../components/Map";
import CardSection from "../components/CardSection";

const Home = () => {
  const context = useContext(RestaurantStateContext);
  const { restaurantList, storeList } = context;
  const [is_login, setIsLogin] = useState(false);

  // useEffect(() => {
  //   const cookie = getCookie("쿠키 이름 넣기!");
  //   if (cookie) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // });

  const getLocalTop3RestaurantList = () => {
    const compare = (a, b) => {
      return parseInt(b.rest_rating) - parseInt(a.rest_rating);
    };

    const copyList = JSON.parse(JSON.stringify(restaurantList));
    const sortedList = copyList.sort(compare);
    console.log(sortedList.slice(0, 3));
    return sortedList.slice(0, 3);
  };

  return (
    <div>
      <MainHeader />
      <SearchBar />
      <Map />
      <CardSection
        title="#지역 Top3"
        description="현재 위치를 기반으로 지역 Top3 맛집을 추천해 드려요"
        restaurantList={restaurantList.slice(0, 3)}
      />
      {is_login ? (
        <CardSection
          title="#내 취향 반영 식당"
          description="내 마라 취향에 맞는 식당을 추천해 드려요"
          restaurantList={restaurantList.slice(3, 6)}
        />
      ) : (
        <CardSection
          title="#내 취향 반영 식당"
          description="내 마라 취향에 맞는 식당을 추천해 드려요"
          restaurantList={[]}
          button={<button>로그인 후 이용 가능합니다.</button>}
        />
      )}
    </div>
  );
};

export default Home;
