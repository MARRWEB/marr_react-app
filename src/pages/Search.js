import { RestaurantStateContext } from "../App";
import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import MainHeader from "../components/MainHeader";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";

const Search = () => {
  const location = useLocation();
  const [input, setInput] = useState(location.state);

  useEffect(() => {
    setInput(location.state);
  }, [location.state]);

  const context = useContext(RestaurantStateContext);
  const { restaurantList, storeList } = context;
  const searchedList = restaurantList.filter((it) =>
    it.rest_name.toLowerCase().includes(input)
  );

  return (
    <div>
      <MainHeader />
      <SearchBar />
      <SearchList restaurantList={searchedList} />
    </div>
  );
};

export default Search;
