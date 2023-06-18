import { db } from "../firebase/firebase.config";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-2 mb-4 text-center border">
      <div className="">
        <input className="p-1 mb-2 border border-black outline-none"
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-20 mx-auto border border-black">
        <button>Add Todo</button>
      </div>
    </form>
  );
}
