import Expenses from "./components/Expenses/Expenses";
import expenses from "./data/ExpenseArray";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

    return (
        <div>
            <NewExpense />
            <Expenses expenses={expenses} />
        </div>
      );
}

export default App;
