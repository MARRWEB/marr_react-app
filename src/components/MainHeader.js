import { useNavigate } from "react-router-dom";
import { checkLoginState } from "../utils/auth/checkLoginState";

const MainHeader = () => {
  const navigate = useNavigate();
  let IsLogged = checkLoginState();

  const logOut = () => {
    localStorage.removeItem("userToken");
    IsLogged = false;
    navigate("/");
  };

  return (
    <header>
      <div className="head-logo" onClick={() => navigate("/")}>
        Marr
      </div>
      <ul className="head-menulist">
        <li className="marrShorts" onClick={() => navigate("/shorts")}>
          MarrShorts
        </li>
        <li className="marrRanking" onClick={() => navigate("/ranks")}>
          전국마라랭킹
        </li>
        {IsLogged ? (
          <li className="marrLogout" onClick={() => logOut()}>
            로그아웃
          </li>
        ) : (
          <li className="marrLogin" onClick={() => navigate("/login")}>
            로그인
          </li>
        )}
      </ul>
      {IsLogged ? (
        <img
          src={process.env.PUBLIC_URL + `assets/icon/user_icon.png`}
          onClick={() => navigate("/my-page")}
          alt="user"
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + `assets/icon/user_icon.png`}
          onClick={() => navigate("/login")}
          alt="user"
        />
      )}
    </header>
  );
};

export default MainHeader;
