import CardItem from "./CardItem";

const CardSection = ({ title, description, restaurantList, button }) => {
  console.log(button);
  return (
    <div className="CardSection">
      <div className="card-section-wrapper">
        <div className="card-section-title">
          <h1>{title}</h1>
          <span className="card-section-description">{description}</span>
        </div>
        <div className="card-section-slide">
          {button === undefined ? (
            <ul className="card-slide-list">
              {restaurantList.map((it) => (
                <CardItem key={it.rest_id} {...it} />
              ))}
            </ul>
          ) : (
            button
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
