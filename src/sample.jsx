import React, { useState } from "react";


const App = () => <TodoApp />;

const TodoApp = () => {
  const [messageList, setMessageList] = useState([]);

  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1)
    ]);
  };

  return (
    <div id="app">
      <TodoHeader />
      <TodoForm addTodo={addTodo} /> <br /> {/* Why */}
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      
    </div>
  );
};

const TodoHeader = () => (
  <div id="header">
    <h2>Todo List</h2>
  </div>
);

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div id="form">
      <input
        id="form__input"
        type="text"
        value={input}
        onChange={changeHandler}
      />
      <button id="form__submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};

const TodoList = ({ messageList, deleteTodo }) => (
  <ol id="todolist">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} key={index} />
    ))}
  </ol>
);

const Todo = ({ message, deleteTodo }) => {
  const handleSubmit = (event) => {
    deleteTodo(message);
  };

  return (
    <li id="todo">
      <span id="todo__label">{message + "  "}</span>
      <button id="todo__delete" onClick={handleSubmit}>
        Delete
      </button>
    </li>
  );
};



export default App;
