import EventForm from "../../components/EventForm/EventForm"
import EventList from "../../components/EventList/EventList"
import FilterControls from "../../components/EventFilter/FilterControls"
import { useState } from "react"

function EventPage() {
  const [filter, setFilter] = useState("all")

  return (
    <div>
      <EventForm/>
      <FilterControls filter={filter} setFilter={setFilter}/>
      <EventList filter={filter}/>
    </div>
  )
}

export default EventPage
