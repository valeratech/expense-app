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
            <Expenses expenseData={expenseItems} />
            <NewExpense onUpdateExpenseItems={updateExpenseItems} />
        </div>
      );
}

export default App;
