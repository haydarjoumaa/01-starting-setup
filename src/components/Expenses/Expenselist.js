import "./expenselist.css";
import Expenseitem from "./Expenseitem";
const Expensefilter = (props) => {
  if (props.newbook.length === 0) {
    return <h2 className="expenses-list__fallback ">Not book Founding</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.newbook.map((item) => {
        return <Expenseitem key={item.id} data={item} />;
      })}
    </ul>
  );
};
export default Expensefilter;
