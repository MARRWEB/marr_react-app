import SearchItem from "./SearchItem";

const SearchList = ({ restaurantList }) => {
  return (
    <div className="SearchList">
      <div className="search-list-wrapper">
        <ul className="search-list">
          {restaurantList.map((it) => (
            <SearchItem key={it.rest_id} {...it} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchList;
