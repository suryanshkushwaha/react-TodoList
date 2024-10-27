import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [save, setSave] = useState("Add");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (save === "Add") {
      const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
      setTodos(newTodos);
      saveToLS(newTodos);
    } else if (editingTodoId) {
      const updatedTodos = todos.map(item =>
        item.id === editingTodoId ? { ...item, todo } : item
      );
      setTodos(updatedTodos);
      setSave("Add");
      setEditingTodoId(null);
      saveToLS(updatedTodos);
    }
    setTodo("");
  };

  const handleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const updatedTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
    saveToLS(updatedTodos);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find(item => item.id === id);
    setTodo(editTodo.todo);
    setEditingTodoId(id);
    setSave("Save");
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="todo-app-container md:w-1/2 mx-auto rounded-xl p-5 bg-violet-100 min-h-[80dvh] mt-5 flex flex-col gap-4 w-3/4">
        <div className="addTodo flex flex-col p-1 space-y-2">
          <h2 className="text-lg font-bold w-full text-black">Add Todo</h2>
          <div className="flex items-center gap-2">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className={`w-[90%] p-2 rounded-md border ${todo.length <= 3 ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-violet-800 hover:bg-violet-950 px-3 py-2 rounded-md text-sm font-bold text-white flex-grow border border-black disabled:border-red-500 h-full"
            >
              {save}
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={showFinished}
              className='mr-2'
              onChange={handleFinished}
            />
            <span>Show Finished</span>
          </div>
        </div>

        <div className="todos flex p-1 flex-col gap-2">
          <h2 className="text-lg font-bold w-full text-black text-left">Your Todos</h2>
          {todos.length === 0 && <div className='m-auto'>No todos to display</div>}
          {todos.map((item) => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex justify-start gap-2 items-center min-h-4">
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.isCompleted}
                />
                <span className={`flex-grow ${item.isCompleted ? "line-through" : ""}`}>{item.todo}</span>
                <div className="button-group flex gap-2 ">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-violet-800 hover:bg-violet-950 px-2 py-1 rounded-md text-sm font-bold text-white my-auto"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-violet-800 hover:bg-violet-950 px-2 py-1 rounded-md text-sm font-bold text-white my-auto"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
