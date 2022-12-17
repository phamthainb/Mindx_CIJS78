import { useContext, useEffect, useState } from "react";
import * as APITask from "../apis/task";
import { AppContext } from "../contexts/AppContext";

export default function useTask() {
  const [reload, setReload] = useState(false);

  const [data, setData] = useState([]);
  const { setData: setDataContext } = useContext(AppContext);

  useEffect(() => {
    APITask.get().then((res) => {
      setData(res.data.items);
      setDataContext({ data: res.data.items });
    });
  }, [reload]); //

  const onCreate = async ({ name, status }, callback) => {
    APITask.create({ name, status })
      .then((res) => {
        setReload(!reload); // reload: true -> false
      })
      .finally(() => {
        callback && callback();
      });
  };

  const onUpdate = async (id, { name, status }, callback) => {
    APITask.update(id, { name, status })
      .then((res) => {
        setReload(!reload); // reload: true -> false
      })
      .finally(() => {
        callback && callback();
      });
  };

  const onDelete = async (id, callback) => {
    APITask.remove(id)
      .then((res) => {
        setReload(!reload); // reload: true -> false
      })
      .finally(() => {
        callback && callback();
      });
  };

  return { data, onCreate, onDelete, onUpdate };
}
