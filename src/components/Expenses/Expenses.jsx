import ExpenseItem from "./ExpenseItem";
import Card from "../../shared/Card";

function Expenses({expenses}) {
    return (
        <Card className="expenses">
        {expenses.map(item => (
                <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
            ))}
            </Card>
    )
}

export default Expenses;