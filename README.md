# ✅ iTask - Todo List Application

The Todo List Application is a web-based task management tool that enables users to efficiently create, edit, delete, and mark tasks as completed. Built with React and Vite, this application provides a modern development experience and offers a smooth, responsive interface using Tailwind CSS.

Users can store their tasks in the browser's local storage, ensuring that they are preserved across page refreshes. This application is perfect for enhancing productivity and keeping track of daily tasks.

![Todo App Screenshot](/public/iTask-UI.png)

## 🚀 Features

- **Task Management**
  - Add new todos with validation
  - Edit existing todos
  - Delete unwanted todos
  - Mark tasks as completed
- **Smart Filtering**
  - Toggle visibility of completed tasks
- **Persistent Storage**
  - Local storage integration
  - Data preservation across sessions
- **Responsive Design**
  - Mobile-first approach
  - Clean, intuitive interface

## 🛠️ Technologies Used

- **Frontend Framework**
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces
  - [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- **Styling**
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**
  - [React Icons](https://react-icons.github.io/react-icons/) - Popular icon libraries
- **State Management**
  - React Hooks (useState, useEffect)

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/suryanshkushwaha/react-todolist.git
   cd react-todolist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage Guide

### Basic Operations

1. **Adding a Todo**
   - Type your task in the input field
   - Click "Add" button or press Enter
   - Note: Tasks must be longer than 3 characters

2. **Managing Todos**
   - ✏️ **Edit**: Click the edit icon to modify a task
   - 🗑️ **Delete**: Click the delete icon to remove a task
   - ✅ **Complete**: Click the checkbox to mark as done

3. **Filtering**
   - Use the "Show Finished" checkbox to toggle completed tasks

## 💻 Code Example

Here's a snippet of how to handle todo addition:

```javascript
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
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
