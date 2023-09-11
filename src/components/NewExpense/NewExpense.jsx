import ExpenseForm from "./ExpenseForm";
import Card from "../shared/Card";
import './NewExpense.css';

function NewExpense(props) {
    return (
        <Card className="new-expense">
            <ExpenseForm onUpdateExpenseItems={props.onUpdateExpenseItems} />
        </Card>
    )
}

export default NewExpense;