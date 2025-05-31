import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function CalendarEvents({ className }) {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  const addEvent = () => {
    if (newEvent.trim() === "") return;
    setEvents([...events, newEvent]);
    setNewEvent("");
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <Card className={CardContent}>
      <CardContent>
        <h2>📅 Calendar Events</h2>
        <input
          type="text"
          placeholder="Add new event"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <Button
          onClick={addEvent}
          className="button"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          Add Event
        </Button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {events.map((event, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <span>{event}</span>
              <Button
                onClick={() => deleteEvent(i)}
                className="button"
                variant="danger"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
