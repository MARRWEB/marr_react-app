const ScoreItem = ({score_id, score_img, score_discript, onClick, isSelected}) => {
    return (
    <div onClick={() => onClick(score_id)} className={["ScoreItem", isSelected ? `ScoreItem_on_${score_id}` : `ScoreItem_off`].join(" ")}>
        <img src={score_img}/>
        <span>{score_discript}</span>
    </div>
    );
};

export default ScoreItem;