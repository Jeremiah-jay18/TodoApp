import {AiFillCheckCircle} from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="flex items-center justify-between p-1 mb-4 border border-black ">
      <input 
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="p-1 border outline-none"
        onChange={handleChange}
      />
      <div className="flex gap-3 p-2 border items center">
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <AiFillCheckCircle id="i" size={23} />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <AiFillEdit id="i" size={23} />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete id="i" size={23} />
        </button>
      </div>
    </div>
  );
}
