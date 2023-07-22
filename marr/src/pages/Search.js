import { RestaurantStateContext } from "../App";
import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import MyHeader from "../components/MyHeader";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";

const Search = () => {
  const location = useLocation();
  const [input, setInput] = useState(location.state);

  useEffect(() => {
    setInput(location.state);
  }, [location.state]);

  const restaurantList = useContext(RestaurantStateContext);
  const searchedList = restaurantList.filter((it) =>
    it.rest_name.toLowerCase().includes(input)
  );

  return (
    <div>
      <MyHeader />
      <SearchBar />
      <SearchList restaurantList={searchedList} />
    </div>
  );
};

export default Search;
