import { createContext, useState, useRef, useEffect, useContext } from 'react';

import { AuthContext } from './AuthContext.jsx';

export const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const { updateUserData } = useContext(AuthContext);

  const userDataLoaded = useRef(true);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) setEvents(userData.events);
  }, []);
    
  useEffect(() => {
    if (userDataLoaded.current && events.length == 0) {
      userDataLoaded.current = false;
      return;
    }
    updateUserData('events', events);
  }, [events]);
  function addEvent(event) {
    const withId = { ...event, id: crypto.randomUUID() };
    const updated = sortEvents([...events, withId]);
    setEvents(updated);
  }

  function removeEvent(id) {
    setEvents(events.filter((e) => e.id !== id));
  }

  function updateEvent(updatedEvent) {
    const updated = events.map((e) =>
      e.id === updatedEvent.id ? updatedEvent : e
    );
    setEvents(sortEvents(updated));
  }

  function sortEvents(list) {
    return [...list].sort((a, b) => new Date(a.start) - new Date(b.start));
  }
  

  const [homePageEvents, setHomePageEvents] = useState([]);

  useEffect(() => {
    setHomePageEvents([]);

    const now = Date.now();
    const event = [...events];

    const sortedEvents = event.filter((event) => {
      const start = new Date(event.start).getTime();
      return start > now;
    });

    if (sortedEvents.length < 3) {
      for (let i = 0; i < sortedEvents.length; i++) {
        setHomePageEvents((prev) => [...prev, sortedEvents[i]]);
      }
    } else {
      setHomePageEvents([sortedEvents[0], sortedEvents[1], sortedEvents[2]]);
    }
  }, [events]);

  return (
    <EventContext.Provider
      value={{ events, addEvent, removeEvent, updateEvent, homePageEvents }}
    >
      {children}
    </EventContext.Provider>
  );
}
