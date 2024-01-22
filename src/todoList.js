import React from 'react';

function TodoList({
  id,
  title,
  content,
  isDone,
  onClickRemove,
  onClickDone,
  onClickCancel,
}) {
  return (
    <div className="component-style">
      <div className="componentTitle">{title}</div>
      <div className="componentContent">{content}</div>
      {isDone ? (
        <div className="doneButtoms">
          <button className="deleteButton" onClick={() => onClickRemove(id)}>
            삭제하기
          </button>
          <button className="cancelButton" onClick={() => onClickCancel(id)}>
            취소
          </button>
        </div>
      ) : (
        <div className="workingButtons">
          <button className="deleteButton" onClick={() => onClickRemove(id)}>
            삭제하기
          </button>
          <button className="doneButton" onClick={() => onClickDone(id)}>
            완료
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
