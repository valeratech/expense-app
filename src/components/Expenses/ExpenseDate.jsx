import './ExpenseDate.css';

function ExpenseDate({date}) {
    return (
        <div className="expense-date">
            <div className="expense-date__month">{date.toLocaleString('default', { month: 'long' })}</div>
            <div className="expense-date__day">{date.toLocaleString('default', { day: 'numeric' })}</div>
            <div className="expense-date__year">{date.toLocaleString('default', { year: 'numeric' })}</div>
        </div>
    )
}

export default ExpenseDate;