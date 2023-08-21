import ExpenseForm from "./ExpenseForm";
import Card from "../shared/Card";
import './NewExpense.css';

function NewExpense() {
    return (
        <Card className="new-expense">
            <ExpenseForm />
        </Card>
    )
}

export default NewExpense;