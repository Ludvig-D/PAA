import { useContext, useState } from "react"
import { EventContext } from "../../context/EventContext"
import "./EventItem.css"

function EventItem({ event }) {
  const { removeEvent, updateEvent } = useContext(EventContext)
  const [editing, setEditing] = useState(false)

  const [name, setName] = useState(event.name)
  const [start, setStart] = useState(event.start)
  const [end, setEnd] = useState(event.end)

  function save() {
    updateEvent({ ...event, name, start, end })
    setEditing(false)
  }

  if (editing) {
    return (
      <div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <input type="datetime-local" value={start} onChange={e => setStart(e.target.value)}/>
        <input type="datetime-local" value={end} onChange={e => setEnd(e.target.value)}/>
        <button onClick={save}>Spara</button>
      </div>
    )
  }

  return (
    <div className={`event-item ${event.end < Date.now() ? "grey" : ""}`}>
      <div className="event-item-info">
<div>{event.name}</div>
      <div>Start {event.start}</div>
      <div>Slut {event.end}</div>
      <button onClick={() => setEditing(true)}>Redigera</button>
      <button onClick={() => removeEvent(event.id)}>Ta bort</button>
      </div>
      
    </div>
  )
}

export default EventItem
