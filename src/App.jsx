import { EventProvider } from "./context/EventContext"
import EventPage from "./pages/Events/EventPage.jsx"

function App() {
  return (
    <EventProvider>
      <EventPage/>
    </EventProvider>
  )
}

export default App
