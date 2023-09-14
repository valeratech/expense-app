import './NewExpense.css';
import Card from "../shared/Card";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

function NewExpense(props) {
    const [hideForm, setHideForm] = useState(true);

    function toggleFormHandler() {
        setHideForm(!hideForm);
    }

    return (
        <Card className="new-expense">
            {hideForm && <button onClick={toggleFormHandler}>Add New Expense</button>}
            {!hideForm && <ExpenseForm onToggleForm={toggleFormHandler} expenseData={props.expenseData} onUpdateExpenseItems={props.onUpdateExpenseItems}/>}
        </Card>
    )
}

export default NewExpense;