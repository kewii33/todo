import 'App.css';
import TodoList from 'todoList.js';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  //추가 버튼 클릭
  const clickAddButtonHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]); //불변성 유지
    setTitle('');
    setContent('');
  };

  //삭제 버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((todos) => todos.id !== id);
    setTodos(newTodos);
  };

  //완료 버튼 클릭
  const clickDoneButtonHandler = (id) => {
    const doneTodos = todos.map((todos) =>
      todos.id === id ? { ...todos, isDone: true } : todos
    );

    setTodos(doneTodos);
  };

  //취소 버튼 클릭
  const clickCancelButtonHandler = (id) => {
    const newTodos = todos.map((todos) =>
      todos.id === id ? { ...todos, isDone: false } : todos
    );
    setTodos(newTodos);
  };

  return (
    <div className="app-style">
      <div className="header">
        <div className="title">My Todo List</div>
        <div className="usedToolName">React</div>
      </div>
      <div className="addTodoListForm">
        <form onSubmit={clickAddButtonHandler}>
          <div className="addTodoListFormBox">
            <div className="inputForms">
              <div className="titleTodo">
                제목
                <input
                  className="titleInput"
                  value={title}
                  onChange={(event) => titleChangeHandler(event)}
                ></input>
              </div>
              <div className="contentTodo">
                내용
                <input
                  className="contentInput"
                  value={content}
                  onChange={(event) => contentChangeHandler(event)}
                ></input>
              </div>
            </div>
            <button
              className="addButton"
              type="submit"
              onClick={(event) => clickAddButtonHandler(event)}
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
      <div className="workingTodo">
        <div className="workingTodoTitle">Working..🔥</div>
        <div className="workingTodoContent">
          {todos
            .filter(function (item) {
              return item.isDone === false;
            })
            .map(function (item) {
              return (
                <TodoList
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isDone={item.isDone}
                  onClickRemove={clickRemoveButtonHandler}
                  onClickDone={clickDoneButtonHandler}
                />
              );
            })}
        </div>
      </div>
      <div className="doneTodo">
        <div className="doneTodoTitle">Done..!🎉</div>
        <div className="doneTodoContent">
          {todos
            .filter(function (item) {
              return item.isDone === true;
            })
            .map(function (item) {
              return (
                <TodoList
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isDone={item.isDone}
                  onClickRemove={clickRemoveButtonHandler}
                  onClickCancel={clickCancelButtonHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
