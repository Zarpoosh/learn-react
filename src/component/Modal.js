import "./Modal.css";
export default function Modal(props) {
  return (
    <div className="modal-backdrop">
      <div
        className="modal "
        style={{ borderColor: props.isSellModal ? "blue" : "red" }}
      >
        {props.children}
      </div>
    </div>
  );
}


