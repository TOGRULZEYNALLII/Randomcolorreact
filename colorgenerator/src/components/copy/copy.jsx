import "../copy/copy.css";
function Copy(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Copy;
