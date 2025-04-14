import "./Pad.css";
export default function Pad(props) {
  // const styles ={
  //     backgroundColor : props.color
  // }  had i left this here. Below i would just need to add style={styles}

  return (
    <button
      style={{ backgroundColor: props.color }}
      key={props.id}
      className={props.on ? "off" : "on"}
    ></button>
  );
}
