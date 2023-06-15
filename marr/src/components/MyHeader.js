const MyHeader = () => {
  return (
    <header>
      <div className="head_logo">Marr</div>
      <ul className="head_menulist">
        <li className="marrShorts">MarrShorts</li>
        <li className="marrRanking">전국마라랭킹</li>
      </ul>
      <img src={process.env.PUBLIC_URL + `assets/user_logo.png`} />
    </header>
  );
};

export default MyHeader;
