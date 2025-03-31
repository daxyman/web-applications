import "./CardList.css";
import Card from "./Card";

function CardList(props) {
  return (
    <>
    <ul className="card-list">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          cardImage={card.cardImage}
          alt={card.alt}
          descriptionTitle={card.descriptionTitle}
          descriptionText={card.descriptionText}
        />
      ))}
    </ul>
    </>
  );
}

export default CardList;
