import { RestaurantStateContext } from "../App";
import { useContext } from "react";

// Components
import MyHeader from "../components/MyHeader";
import SearchBar from "../components/SearchBar";
import Map from "../components/Map";
import CardSection from "../components/CardSection";

const Home = () => {
  const restaurantList = useContext(RestaurantStateContext);

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
      <MyHeader />
      <SearchBar />
      <Map />
      <CardSection
        title="#지역 Top3"
        description="현재 위치를 기반으로 지역 Top3 맛집을 추천해 드려요"
        restaurantList={restaurantList}
      />
      <CardSection
        title="#내 취향 반영 식당"
        description="내 마라 취향에 맞는 식당을 추천해 드려요"
        restaurantList={restaurantList}
      />
    </div>
  );
};

export default Home;
