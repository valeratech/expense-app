import './ExpenseDate.css';

function ExpenseDate(props) {
    return (
        <div className="expense-date">
            <div className="expense-date__month">{props.date.toLocaleString('default', {month: 'long'})}</div>
            <div className="expense-date__day">{props.date.toLocaleString('default', {day: 'numeric'})}</div>
            <div className="expense-date__year">{props.date.toLocaleString('default', {year: 'numeric'})}</div>
        </div>
    )
}

export default ExpenseDate;