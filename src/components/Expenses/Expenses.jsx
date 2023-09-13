import ExpenseItem from "./ExpenseItem";
import Card from "../shared/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {

    const [year, setYear] = useState(2019);

    const filteredItems = props.expenseData.filter(item => {
        return item.date.getFullYear().toString() === year;
    })

    function filterYearHandler(year) {
        setYear(year);
        console.log(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onFilterYear={filterYearHandler} />
            {props.expenseData.map(item => (
                    <ExpenseItem key={item.id} item={item}/>
                ))}
        </Card>
    )
}

export default Expenses;