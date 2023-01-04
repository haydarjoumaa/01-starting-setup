import Card from "../UI/Card";
import "./expenses.css";
import ExpensesFilter from "./Expensesfilter";
import { useState } from "react";
import Expenselist from "./Expenselist";
import Expenseschart from "./Expenseschart";
function Expense(props) {
  const [filteryear, setfilteryear] = useState("2020");

  const newbook = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteryear;
  });

  const yearhandler = (yearchoose) => {
    setfilteryear(() => {
      return yearchoose;
    });
  };

  return (
    <Card className="expenses">
      <ExpensesFilter initialyear={filteryear} onChanging={yearhandler} />
      <Expenseschart expenses={newbook} />
      <Expenselist newbook={newbook} />
    </Card>
  );
}
export default Expense;
