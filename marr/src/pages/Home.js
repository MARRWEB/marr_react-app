// Components
import MyHeader from "../components/MyHeader";
import SearchBar from "../components/SearchBar";
import Map from "../components/Map";
import CardSection from "../components/CardSection";
import {
  new_restaurant_list,
  top3_restaurant_list,
} from "../utils/home_restaurants";

const Home = () => {
  return (
    <div>
      <MyHeader />
      <SearchBar />
      <Map />
      <CardSection
        title="#지역 Top3"
        description="현재 위치를 기반으로 지역 Top3 맛집을 추천해 드려요"
        restaurant_list={top3_restaurant_list}
      />
      <CardSection
        title="#내 취향 반영 식당"
        description="내 마라 취향에 맞는 식당을 추천해 드려요"
        restaurant_list={new_restaurant_list}
      />
    </div>
  );
};

export default Home;
