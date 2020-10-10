import React, { useState } from "react";

function ToDoItem(props) {
  const { id, item, onDelete } = props;

  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="list">
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {item}
      </li>
      <div className="comboButton">
        <button className="doneButton " onClick={handleClick}>
          Done
        </button>
        <button className="deleteButton" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
