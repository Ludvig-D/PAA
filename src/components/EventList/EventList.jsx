import { useContext } from "react"
import { EventContext } from "../../context/EventContext"
import EventItem from "../EventItem/EventItem"
import style from "./EventList.module.css"

function EventList({ filter }) {
  const { events } = useContext(EventContext)
  const now = Date.now()

  const filtered = events.filter(event => {
    const start = new Date(event.start).getTime()
    if (filter === "upcoming") return start > now
    if (filter === "past") return start < now
    return true
  })

  return (
    <div className={"style.eventlist"}>
      {filtered.map(event => (
        <EventItem key={event.id} event={event}/>
      ))}
    </div>
  )
}

export default EventList
