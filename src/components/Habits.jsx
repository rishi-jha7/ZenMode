import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Plus, Trash2 } from "lucide-react";

export default function Habits({ className }) {
  const [habits, setHabits] = useState(
    () => JSON.parse(localStorage.getItem("habits")) || []
  );
  const [newHabit, setNewHabit] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim() === "") return;
    setHabits([...habits, { name: newHabit, streak: 0 }]);
    setNewHabit("");
  };

  const incrementStreak = (index) => {
    const updated = [...habits];
    updated[index].streak++;
    setHabits(updated);
  };

  const deleteHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditText(habits[index].name);
  };

  const saveEdit = (index) => {
    const updated = [...habits];
    updated[index].name = editText.trim() || updated[index].name;
    setHabits(updated);
    setEditingIndex(null);
  };

  return (
    <Card className={CardContent}>
      <CardContent>
        <h2>📈 Habits</h2>
        <input
          type="text"
          placeholder="New habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <Button
          onClick={addHabit}
          className="custom-button"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <Plus /> Add Habit
        </Button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {habits.map((habit, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              {editingIndex === i ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{
                      flexGrow: 1,
                      marginRight: "0.5rem",
                      padding: "0.25rem",
                    }}
                  />
                  <Button
                    onClick={() => saveEdit(i)}
                    className="button"
                    style={{ marginRight: "0.5rem" }}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => setEditingIndex(null)}
                    className="button"
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <span
                    onClick={() => incrementStreak(i)}
                    style={{ cursor: "pointer", flexGrow: 1 }}
                  >
                    {habit.name} — Streak: {habit.streak}
                  </span>
                  <Button
                    onClick={() => startEdit(i)}
                    className="button"
                    style={{ marginRight: "0.5rem" }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteHabit(i)}
                    className="button"
                    variant="danger"
                  >
                    <Trash2 />
                  </Button>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
