# todoList 컴포넌트

src폴더 안의 todoList 컴포넌트는 입력된 데이터를 바탕으로 제목과 내용, 취소, 완료, 삭제 버튼을 포함하는 todoList를 만들어내는 컴포넌트이다.

<TodoList />에서 가져오고 싶은 값을 입력하여 사용할 수 있다.

예시)

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
