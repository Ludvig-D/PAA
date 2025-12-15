import { useState, useContext } from "react"
import { EventContext } from "../../context/EventContext"
import style from "./EventForm.module.css"


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
    <form className= {style.eventform} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="start">Start</label>
        <input
        id="start" 
        required type="datetime-local" value={start} onChange={e => setStart(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="slut" >Slut</label>
        <input 
        id="slut"
        required type="datetime-local" value={end} onChange={e => setEnd(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="event" >Händelse</label>
        <input 
        id="event"
        required value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <button>Lägg till</button>
    </form>
  )
}

export default EventForm
