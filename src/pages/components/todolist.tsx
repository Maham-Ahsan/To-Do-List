"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addtodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  //add id value:
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //delete function
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-400 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold">To-Do List</h1>
          <p>A simple to-do list app built with Nextjs and Tailwind CSS.</p>
        </div>
      </header>

      <main className="flex flex-grow items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-blue-300 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">
              <input
                className="w-full pl-3 pr-10 py-2 text-sm text-gray-700 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                type="text"
                placeholder="Add a new todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className="ml-3 bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
                onClick={addtodo}
                disabled={inputValue.trim() === ""}
              >
                Add
              </button>
            </div>
          </div>
    
<ul className="space-y-2">
    {todos.map((todo) => (
        <li key={todo.id} className="flex items-center space-x-2">
          <input
            className={`checkbox ${todo.completed? "checked" : ""}`}
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <p
            className={`text-sm ${todo.completed? "line-through text-gray-500" : ""}`}
          >
            {todo.text}
          </p>
          {/* Add a toggle button */}
          <button
            className="bg-teal-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.completed? "Completed" : "Incomplete"}

          </button>
          {/* Add a delete button */}
          <button
            className="bg-lime-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
    ))}
</ul>

        </div>
      </main>
    </div>
  );
};

export default Todolist;
