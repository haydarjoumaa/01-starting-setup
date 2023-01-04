import "./expenseform.css";
import { useState } from "react";
const Expenseform = (props) => {
  const [newtitle, setTitle] = useState("");
  const [newdate, setDate] = useState("");
  const [newamount, setAmount] = useState("");
  console.log("hi");
  const titlehandler = (event) => {
    setTitle(event.target.value);
  };
  const amounthandler = (event) => {
    setAmount(event.target.value);
  };
  const datehandler = (event) => {
    setDate(event.target.value);
  };
  const formsubmit = (event) => {
    event.preventDefault();

    const dataentered = {
      title: newtitle,
      amount: +newamount,
      date: new Date(newdate),
    };
    props.onSaving(dataentered);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={formsubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newtitle} onChange={titlehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            value={newamount}
            onChange={amounthandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-12-31"
            value={newdate}
            onChange={datehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => props.onCancel()}>
          Exit
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
export default Expenseform;
