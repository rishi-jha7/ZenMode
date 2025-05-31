import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Pause, Clock } from "lucide-react";

export default function PomodoroTimer({ className }) {
  const [timer, setTimer] = useState(1500); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(1500);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <Card className={CardContent}>
      <CardContent>
        <h2>⏰ Pomodoro Timer</h2>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          <Clock /> {formatTime(timer)}
        </div>
        <Button
          onClick={toggleTimer}
          className="button"
          style={{ marginRight: "0.5rem" }}
        >
          {isRunning ? <Pause /> : <Play />}
        </Button>
        <Button onClick={resetTimer} className="button">
          Reset
        </Button>
      </CardContent>
    </Card>
  );
}
