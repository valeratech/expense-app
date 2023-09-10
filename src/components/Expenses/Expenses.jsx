import ExpenseItem from "./ExpenseItem";
import Card from "../shared/Card";
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
        {props.expenseData.map(item => (
                <ExpenseItem key={item.id} item={item}/>
            ))}
            </Card>
    )
}

export default Expenses;