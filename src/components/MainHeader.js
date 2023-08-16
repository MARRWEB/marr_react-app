import { useNavigate } from "react-router-dom";

const MainHeader = ({ logged }) => {
  const navigate = useNavigate();
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
        {logged ? (
          <li className="marrLogin" onClick={() => navigate("/login")}>
            로그인
          </li>
        ) : (
          <li className="marrLogout" onClick={() => navigate("/")}>
            로그아웃
          </li>
        )}
      </ul>
      {logged ? (
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
