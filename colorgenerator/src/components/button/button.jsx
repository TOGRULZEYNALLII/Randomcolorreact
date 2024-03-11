import "../button/button.css";

function App(props) {
  return (
    <>

      <button  className="button">{props.text}</button>
    </>
  );
}

export default App;
