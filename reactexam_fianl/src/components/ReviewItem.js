import { useNavigate } from "react-router-dom";

const ReviewItem = ({id, level, date, content, score, store, marr_pic, profile_pic}) => {

    const navigate = useNavigate();

    const env= process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const goStore = () =>{
        navigate('/StoreReview')
    }

    return (
    <div className = "ReviewItem" onClick={goStore} >

        <div className="user_info">
            <div className="level">Level {level}</div>
            <div className={["profile_pic", `profile_pic_${profile_pic}`].join(" ")}>
                <img src= {process.env.PUBLIC_URL + `/assets/user${profile_pic}.png`} />
                </div>
            <div className="id">{id}</div>
        </div>

        <div className="content_info">
            <div className="first_content_info">
            <div className="store">{store}</div>
            <div className="date">{strDate}</div>
            </div>
            <div className={["marr_pic", `marr_pic_${marr_pic}`].join(" ")}>
                <img src= {process.env.PUBLIC_URL + `/assets/marr${marr_pic}.png`} />
            </div>
            <div className="content">{content}</div>
        </div>

    </div>);};

export default ReviewItem;
