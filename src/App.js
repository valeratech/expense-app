import Expenses from "./components/Expenses/Expenses";
import expenses from "./data/ExpenseArray";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {

    const [expenseItems, setExpenseItems] = useState(expenses);

    function updateExpenseItems(newItem) {
        setExpenseItems(prev => [...prev, newItem]);
        console.log(expenseItems);
    }

    return (
        <div>
            <NewExpense onUpdateExpenseItems={updateExpenseItems} />
            <Expenses expenseData={expenseItems} />
        </div>
      );
}

export default App;
