import './ExpenseItem.css';

function ExpenseDate({date}) {
    return (
        <>
            <div>{date.toLocaleString('default', { month: 'long' })}</div>
            <div>{date.toLocaleString('default', { day: 'numeric' })}</div>
            <div>{date.toLocaleString('default', { year: 'numeric' })}</div>
        </>
    )
}

export default ExpenseDate;