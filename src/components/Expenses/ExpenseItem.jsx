import './ExpenseItem.css';
import './ExpenseDate';
import Card from "../shared/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.item.date} />
            <div className="expense-item__description">
                <h2>{props.item.title}</h2>
                <div className="expense-item__price">${props.item.amount.toFixed(2)}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;