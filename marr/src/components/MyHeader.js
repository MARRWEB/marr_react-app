import { useNavigate } from "react-router-dom";

const MyHeader = () => {
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
        <li className="marrRanking" onClick={() => navigate("/ranking")}>
          전국마라랭킹
        </li>
      </ul>
      <img
        src={process.env.PUBLIC_URL + `assets/icon/user_icon.png`}
        onClick={() => navigate("/my_page")}
      />
    </header>
  );
};

export default MyHeader;
