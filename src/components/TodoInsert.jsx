import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [todoInput, setTodoInput] = useState("");
  const onChange = useCallback((e) => {
    setTodoInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(todoInput);
      setTodoInput("");
    },
    [onInsert, todoInput]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={todoInput}
        name="todoInput"
      />
      <button>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
