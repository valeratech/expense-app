import ExpenseItem from "./ExpenseItem";

function Expenses({expenses}) {
    return (
        <>
        {expenses.map(item => (
                <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
            ))}
            </>
    )
}

export default Expenses;