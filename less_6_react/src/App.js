import { useEffect, useState } from "react";
import Search from "./Search";
import Content from "./Content";

/**
 * item:
 * {
 *  content: string,
 *  status: done, procesing => bool: true: done, false: processing
 * }
 */

function App() {
  // state
  const [todo, setTodo] = useState([
    // { content: "todo 1", status: true },
    // { content: "todo 2", status: true },
    // { content: "todo 3", status: false },
    // { content: "todo 4", status: true },
    // { content: "todo 5", status: false },
  ]);

  const [text, setText] = useState("");
  const [pickItem, setPickItem] = useState(); // stt của item trong array todo

  // effect
  useEffect(() => {
    // bắt sự kiện update => pickItem !== undefined
    if (pickItem !== undefined) {
      // get item cần update
      const itemUpdate = todo[pickItem];
      setText(itemUpdate?.content); // set lại value của ô input
    } else {
      // xóa nội dung itemUpdate đi
      setText("");
    }
  }, [pickItem, todo]);

  // handler
  const onCreate = () => {
    const todoItem = {
      content: text,
      status: false,
    };
    let todoNew = [...todo];
    todoNew.push(todoItem);
    setTodo(todoNew); // item old, item new};
  };

  const onUpdate = () => {
    const todoItem = {
      content: text,
      status: false,
    };

    let todoNew = [...todo];

    todoNew = todoNew.map((k, i) => {
      if (i === pickItem) {
        return todoItem;
      }
      return k;
    });

    setTodo(todoNew); // item old, item new};
  };

  const onUpdateStatus = (index) => {
    // update lại status của item hiện tại
    // toggle: true -> false, false -> true
    let todoNews = [...todo];
    todoNews = todoNews.map((k, i) => {
      if (i === index) {
        return { content: k.content, status: !k.status };
      }
      return k;
    });
    setTodo(todoNews);
  };

  const onDelete = (index) => {
    // update lại status của item hiện tại
    // toggle: true -> false, false -> true
    let todoNews = [...todo];
    todoNews = todoNews.filter((k, i) => i !== index);
    setTodo(todoNews);

    // clear pick item khi xóa todo
    if (pickItem !== undefined) {
      setPickItem(undefined);
    }
  };

  const onSetPickItem = (checked, index) => {
    if (checked) {
      setPickItem(index); // // stt của item hien tai
    } else {
      setPickItem(undefined);
    }
  };

  return (
    <div className="app">
      {/* // detruct */}
      <Search {...{ setText, text, pickItem, onUpdate, onCreate }} />

      {/* // normal */}
      {/* <Search
        setText={setText}
        text={text}
        pickItem={pickItem}
        onUpdate={onUpdate}
        onCreate={onCreate}
      /> */}

      <Content
        {...{
          todo,
          onSetPickItem,
          pickItem,
          onDelete,
          onUpdateStatus,
        }}
      />
    </div>
  );
}

export default App;
