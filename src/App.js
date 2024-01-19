import React from 'react';
import 'App.css';

const App = () => {
  return (
    <div className="app-style">
      <div className="memoBox">
        <div className="title">할 일 목록</div>
        <div className="todoList">
          <div className="todoItem">
            <label>
              <input type="checkbox" className="todoCheck"></input>
            </label>
            나는 투두야
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
