import { RestaurantStateContext } from "../App";
import { useContext } from "react";

const MyPage = () => {
  const context = useContext(RestaurantStateContext);
  const { userList } = context;
  console.log("userinfo", userList);

  return (
    <div className="userinfo">
      <h3>
        name : {userList[0].name}
        <br />
        LV : {userList[0].level}
      </h3>
    </div>
  );
};

export default MyPage;
