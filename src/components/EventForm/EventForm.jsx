import { useState, useContext } from "react"
import { EventContext } from "../../context/EventContext"

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Start</label>
        <input type="datetime-local" value={start} onChange={e => setStart(e.target.value)}/>
      </div>
      <div>
        <label>Slut</label>
        <input type="datetime-local" value={end} onChange={e => setEnd(e.target.value)}/>
      </div>
      <div>
        <label>Händelse</label>
        <input value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <button>Lägg till</button>
    </form>
  )
}

export default EventForm
