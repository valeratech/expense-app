import ExpenseItem from "./ExpenseItem";
import Card from "../shared/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpensesFilter />
            {props.expenseData.map(item => (
                    <ExpenseItem key={item.id} item={item}/>
                ))}
        </Card>
    )
}

export default Expenses;