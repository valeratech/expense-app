import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../shared/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [year, setYear] = useState('2023');

    const filteredItems = props.expenseData.filter(item => {
        return item.date.getFullYear().toString() === year;
    })

    let expenseItems = <p>No Data For This Year</p>;

    if (filteredItems.length !== 0) {
        expenseItems = filteredItems.map(item => (
            <ExpenseItem key={item.id} item={item}/>
        ));
    }

    function filterYearHandler(year) {
        setYear(year);
        console.log(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onFilterYear={filterYearHandler} />
            {expenseItems}
        </Card>
    )
}

export default Expenses;