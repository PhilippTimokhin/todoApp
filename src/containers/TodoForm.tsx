import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };
  return (
    <div className="container">
      <input
        placeholder="Please, enter your note"
        id="text"
        type="text"
        className="validate center"
        ref={ref}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="text">Please, enter your note</label>
    </div>
  );
};

export default TodoForm;
