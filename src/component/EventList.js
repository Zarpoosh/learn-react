import React from 'react'
import styles from './EventList.modules.css'
export default function EventList(props) {
  return (
    <div>
      {
        props.event.map((event, index) => (
            <div className="card" key={event.id}>
              <h2>
                {index + 1}-{event.title}
              </h2>
              <p>{event.genre}-{event.date}</p>
              <button onClick={()=>props.handleclick(event.id)}>Delete</button>
            </div>
          ))
      }
    </div>
    
  )
}
