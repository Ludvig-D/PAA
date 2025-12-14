import { useState, useContext } from "react"
import { EventContext } from "../../context/EventContext"
import "./EventForm.css"


function EventForm() {
  const { addEvent } = useContext(EventContext)
  const [name, setName] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    addEvent({ name, start, end })
    setName("")
    setStart("")
    setEnd("")
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Start">Start</label>
        <input required type="datetime-local" value={start} onChange={e => setStart(e.target.value)}/>
      </div>
      <div>
        <label>Slut</label>
        <input required type="datetime-local" value={end} onChange={e => setEnd(e.target.value)}/>
      </div>
      <div>
        <label>Händelse</label>
        <input required value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <button>Lägg till</button>
    </form>
  )
}

export default EventForm
