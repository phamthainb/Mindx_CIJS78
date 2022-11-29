import { IoMdDoneAll } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRunning } from "react-icons/fa";

export default function ContentItem({
  onSetPickItem,
  index,
  pickItem,
  item,
  onDelete,
  onUpdateStatus,
}) {
  return (
    <div className="item">
      <div className="item_value">
        <input
          type="checkbox"
          name="item_picked"
          className="item_checkbox"
          onClick={(e) => onSetPickItem(e.target.checked, index)}
          checked={pickItem === index}
        />
        <div className="item_value">
          <div className="item_icon">
            {item?.status ? <IoMdDoneAll /> : <FaRunning />}
          </div>
          <p className="item_text">{item?.content}</p>
        </div>
      </div>
      <div className="item_handle">
        <button className="item_delete" onClick={() => onDelete(index)}>
          <RiDeleteBin6Line /> delete
        </button>
        <button className="item_delete" onClick={() => onUpdateStatus(index)}>
          <IoMdDoneAll /> {item?.status ? "Processing" : "Done"}
        </button>
      </div>
    </div>
  );
}
