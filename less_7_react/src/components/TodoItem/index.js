import React from "react";
import "./style.css";

function TodoItem(props) {
  const { item, fetchList, setSelectedItem, isUpdate } = props;

  const handleOnDelete = () => {
    fetch(`https://638b55067220b45d228d7abc.mockapi.io/task/${item.id}`, {
      method: "DELETE",
    }).then(async (res) => {
      fetchList();
    });
  };

  const handleOnUpdate = () => {
    setSelectedItem(item);
  };

  return (
    <div className={isUpdate ? "todo-container bg-orange" : "todo-container"}>
      <p>{item?.name}</p>
      <div className="todo-actions">
        <span onClick={handleOnUpdate}>Update</span>
        <span onClick={handleOnDelete}>Delete</span>
      </div>
    </div>
  );
}

export default TodoItem;
