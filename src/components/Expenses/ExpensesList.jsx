import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    if (props.onExpenseData === 0) {
        return <h1>No Data For Selected Year</h1>;
    }

    return (
        <div>
            {props.onExpenseData.map(item => (
                <ExpenseItem key={item.id} item={item}/>
            ))}
        </div>
    )
}


export default ExpensesList