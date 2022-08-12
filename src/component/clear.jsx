import "../stylesheets/clear.css";
const Clear = (props) => (
  <div className="btn-clear" onClick={props.reset}>
    {props.children}
  </div>
);

export default Clear;
