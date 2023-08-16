import { RestaurantStateContext } from "../App";
import { useEffect, useState, useContext } from "react";

// Components
import MainHeader from "../components/MainHeader";
import SearchBar from "../components/SearchBar";
import Map from "../components/Map";
import CardSection from "../components/CardSection";

const Home = (isLogged) => {
  const context = useContext(RestaurantStateContext);
  const { restaurantList } = context;

  return (
    <div>
      <MainHeader logged={isLogged} />
      <SearchBar />
      <Map />
      <CardSection
        title="#지역 Top3"
        description="현재 위치를 기반으로 지역 Top3 맛집을 추천해 드려요"
        restaurantList={restaurantList.slice(0, 3)}
      />
      {isLogged ? (
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
