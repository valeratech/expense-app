import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../shared/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import {useState} from "react";

function Expenses(props) {
    const [year, setYear] = useState('2023');

    const filteredItems = props.expenseData.filter(item => {
        return item.date.getFullYear().toString() === year;
    })

    function filterYearHandler(year) {
        setYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onFilterYear={filterYearHandler} />
            <ExpensesList onExpenseData={filteredItems}/>
        </Card>
    )
}

export default Expenses;