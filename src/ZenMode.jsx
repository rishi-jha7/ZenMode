import { useState, useEffect } from "react";
import MusicPlayer from "./components/MusicPlayer";
import Tasks from "./components/Tasks";
import PomodoroTimer from "./components/PomodoroTimer";
import Habits from "./components/Habits";
import CalendarEvents from "./components/CalendarEvents";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

export default function ZenMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <Button onClick={toggleDarkMode} variant="ghost">
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </div>

      <MusicPlayer className="card" />
      <Tasks className="card" />
      <PomodoroTimer className="card" />
      <Habits className="card" />
      <CalendarEvents className="card" />
    </div>
  );
}
