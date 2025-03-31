import "./Card.css";

function Card(props) {
  return (
    <li className="card" key ={props.id}>
      <img
        className="card-image"
        src={props.src}
        alt={props.alt}
      />
      <div className="card-description">
        <h2>{props.descriptionTitle}</h2>
        <p>{props.descriptionText}</p>
      </div>
    </li>
  );
}

export default Card;
