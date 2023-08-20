import Expenses from "./components/Expenses/Expenses";
import expenses from "./data/ExpenseArray";

function App() {

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expenses={expenses} />
        </div>
      );
}

export default App;
