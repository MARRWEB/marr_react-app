import { useNavigate } from "react-router-dom";

/*
const MyHeader = ({headText, leftChild, rightChild}) => {
    return <header>
        <div className="head_btn_left">
            {leftChild}
        </div>
        <div className="head_text">
            {headText}
        </div>
        <div className="head_btn_right">
            {rightChild}
        </div>
    </header>
}
*/

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
        <li className="marrRanking" onClick={() => navigate("/ranks")}>
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