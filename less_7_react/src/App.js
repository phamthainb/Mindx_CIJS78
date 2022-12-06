import { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    setText(selectedItem ? selectedItem.name : "");
  }, [selectedItem]);

  const fetchList = () => {
    fetch("https://638b55067220b45d228d7abc.mockapi.io/task").then(
      async (res) => {
        setTodoList(await res.json());
      }
    );
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnKeyUp = (e) => {
    if (e.keyCode === 13 && text.trim()) {
      const sendItem = {
        name: text,
        status: true,
      };
      // Create new todo item
      if (!selectedItem) {
        fetch("https://638b55067220b45d228d7abc.mockapi.io/task", {
          method: "POST",
          body: JSON.stringify(sendItem),
        }).then(async (res) => {
          const savedItem = await res.json();
          setTodoList([...todoList, savedItem]);
          setText("");
        });
      } else {
        fetch(
          `https://638b55067220b45d228d7abc.mockapi.io/task/${selectedItem.id}`,
          {
            method: "PUT",
            body: JSON.stringify(sendItem),
          }
        ).then(async (res) => {
          fetchList();
          setSelectedItem(null);
        });
      }
    }
  };

  return (
    <div className="container">
      <input
        value={text}
        className="w-50"
        type="text"
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
      />
      <div className="todo-list">
        {todoList
          .filter((item) => item.status)
          .map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              fetchList={fetchList}
              setSelectedItem={setSelectedItem}
              isUpdate={item.id === selectedItem?.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
