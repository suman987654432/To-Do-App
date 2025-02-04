import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, myEditSave, toggleComplete } from "./todoSlice";
import "./App.css"; 

const App = () => {
  const [val, setVal] = useState("");
  const [editId, setEditId] = useState(null);
  const Task = useSelector((state) => state.myslice.task);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (editId) {
      dispatch(myEditSave({ id: editId, text: val }));
      setEditId(null);
    } else {
      dispatch(addTask(val));
    }
    setVal("");
  };

  const handleEdit = (task) => {
    setVal(task.text);
    setEditId(task.id);
  };

  let sno = 0;
  const ans = Task.map((task) => {
    sno++;
    return (
      <tr key={task.id}>
        <td>{sno}</td>
        <td className={task.completed ? "line-through" : ""}>{task.text}</td>
        <td>
          <button className="delete-btn" onClick={() => dispatch(removeTask(task.id))}>Delete</button>
        </td>
        <td>
          <button onClick={() => handleEdit(task)}>Edit</button>
        </td>
        <td>
          <button
            className={task.completed ? "incomplete-btn" : "complete-btn"}
            onClick={() => dispatch(toggleComplete(task.id))}
          >
            {task.completed ? "Incomplete" : "Complete"}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1>✅ To-Do App</h1>
      <div className="input-container">
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} placeholder="Enter your task..." />
        <button onClick={handleSave}>{editId ? "Save Task" : "Add Task"}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default App;
