import React, { useState } from "react";
import Title from "./component/Title";
import Modal from "./component/Modal";
import "./App.css";
import EventList from "./component/EventList";
import NewNameForm from "./component/NewNameForm";

function App() {
  const [showevents, setshowEvents] = useState(true);
  const [showmodal, setshowModal] = useState(false);
  const [event, setEvents] = useState([]);
  const handleclick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  const addName = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setshowModal(false);
  };
  const handleClose = () => {
    setshowModal(false);
  };
  const handleOpen = () => {
    setshowModal(true);
  };
  const subtitle = "6 member";

  return (
    <div className="App">
      <Title title="my beautifull name" subtitle={subtitle} />
      {showevents && (
        <div>
          <button onClick={() => setshowEvents(false)}>hide</button>
        </div>
      )}
      {!showevents && (
        <div>
          <button onClick={() => setshowEvents(true)}>show</button>
        </div>
      )}
      {showevents && <EventList handleclick={handleclick} event={event} />};
      {/* <Modal >
      <h2>10% off coupen code</h2>
        <p style={{textAlign:"center"}}>use the code minicode</p>
      </Modal> */}
      {showmodal && (
        <Modal isSellModal={true}>
          <NewNameForm addName={addName} />
        </Modal>
      )}
      <button
        onClick={handleOpen}
        style={{ background: "gray", color: "#fff", border: "none" }}
      >
        add new name
      </button>
    </div>
  );
}

export default App;
