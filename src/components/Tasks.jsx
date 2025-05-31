import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Trash2, CheckCircle } from "lucide-react";

export default function Tasks({ className }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Card className={CardContent}>
      <CardContent>
        <h2>📝 Tasks</h2>
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          //style={{ width: "30%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <Button
          onClick={addTask}
          className="button"
          //style={{ width: "100%", marginBottom: "1rem" }}
        >
          Add Task
        </Button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                onClick={() => toggleTask(index)}
                style={{
                  cursor: "pointer",
                  textDecoration: task.done ? "line-through" : "none",
                  flexGrow: 1,
                }}
              >
                {task.text}
              </div>
              <Button
                onClick={() => deleteTask(index)}
                className="button"
                variant="danger"
                style={{ marginLeft: "0.5rem" }}
              >
                <Trash2 />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
