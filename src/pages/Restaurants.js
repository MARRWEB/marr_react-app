import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { RestaurantStateContext } from "../App";

const Restaurants = () => {
  const { id } = useParams();
  const { restaurantList } = useContext(RestaurantStateContext);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (restaurantList.length >= 1) {
      const targetRestaurant = restaurantList.find(
        (it) => parseInt(it.rest_id) === parseInt(id)
      );

      if (targetRestaurant) {
        setData(targetRestaurant);
      } else {
        alert("아직 등록되지 않은 가게입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, restaurantList]);

  if (!data) {
    return <div className="RestaurantPage">로딩중입니다...</div>;
  } else {
    return (
      <div className="RestaurantPage">
        <article>
          <section>
            <div className="restaurant-img">
              <img src={data.rest_img} alt="restaurant"></img>
            </div>
          </section>
          <section className="restaurant-detail">
            <header className="restaurant-title-header">
              <div class="restaurant-title-wrap">
                <span>
                  <h1 className="restaurant-title">{data.rest_name}</h1>
                  <div className="restaurant-rating">{data.rest_rating}</div>
                </span>
              </div>
            </header>
            <div className="restaurant-info-wrap">
              <div className="restaurant-info-card">
                <table className="restaurant-info-table">
                  <tr>
                    <th>주소</th>
                    <td>{data.rest_address}</td>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <td>{data.rest_tel}</td>
                  </tr>
                  <tr>
                    <th>운영 시간</th>
                    <td>{data.rest_oper_time}</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Restaurants;
