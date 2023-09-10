import ExpenseItem from "./ExpenseItem";
import Card from "../shared/Card";
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
        {props.expenseData.map(item => (
                <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
            ))}
            </Card>
    )
}

export default Expenses;