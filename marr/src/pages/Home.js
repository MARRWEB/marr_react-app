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
        title="#새로 입점한 식당"
        restaurant_list={new_restaurant_list}
      />
      <CardSection title="#지역 Top3" restaurant_list={top3_restaurant_list} />
    </div>
  );
};

export default Home;
