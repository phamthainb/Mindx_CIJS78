import { IoMdAddCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

export default function Search({setText,text, pickItem, onUpdate, onCreate  }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="what needs to be done?"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      {pickItem !== undefined ? (
        <button onClick={onUpdate}>
          <FiEdit />
          update
        </button>
      ) : (
        <button onClick={onCreate}>
          <IoMdAddCircleOutline />
          add
        </button>
      )}
    </div>
  );
}
