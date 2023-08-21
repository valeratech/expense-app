import ExpenseForm from "./ExpenseForm";
import Card from "../shared/Card";

function NewExpense() {
    return (
        <Card className="new-expense">
            <ExpenseForm />
        </Card>
    )
}