import "./listItems.css";

function ListItems() {
  return (
    <>
      <div class="list-item">
        <img src={props.image} 
        alt={alt} />
    <div>
        <h3>{props.titre}</h3>
        <p>{props.p}</p>
        </div>
        </div>
    </>
  );
}

export default ListItems;
