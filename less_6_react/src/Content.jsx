import ContentItem from "./ContentItem";

export default function Content({
  todo,
  onSetPickItem,
  pickItem,
  onDelete,
  onUpdateStatus,
}) {
  return (
    <div className="content">
      <label>Todo List</label>

      <div className="list">
        {todo.length > 0
          ? todo.map((item, index) => (
              <ContentItem
                {...{
                  onSetPickItem,
                  index,
                  pickItem,
                  item,
                  onDelete,
                  onUpdateStatus,
                }}
              />
            ))
          : "No found any todo here..."}
      </div>
    </div>
  );
}
