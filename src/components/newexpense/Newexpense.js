import "./newexpense.css";
import Expenseform from "./Expenseform";
import { useState } from "react";
const Newexpense = (props) => {
  const onSave = (newespense) => {
    const newe = { ...newespense, id: Math.random().toString() };
    props.onAdd(newe);
    setIsshow(false);
  };
  const [isShow, setIsshow] = useState(false);
  const cancelhandler = () => {
    setIsshow(false);
  };
  return (
    <div className="new-expense">
      {!isShow && (
        <button
          onClick={() => {
            setIsshow(true);
          }}
        >
          add new Books
        </button>
      )}
      {isShow && <Expenseform onCancel={cancelhandler} onSaving={onSave} />}
    </div>
  );
};
export default Newexpense;
