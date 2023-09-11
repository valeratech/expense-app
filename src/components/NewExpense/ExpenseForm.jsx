import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function inputChangeHandler(identifier, value) {
        if (identifier === 'title') {
            setTitle(value);
        } else if (identifier === 'amount') {
            setAmount(value);
        } else if (identifier === 'date') {
            setDate(value);
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        const newExpenseItem = {
            title,
            amount,
            date: new Date(date)
        };

        console.log(newExpenseItem);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input type='text' value={title} onChange={(e) => inputChangeHandler('title', e.target.value)}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input type='number' min='0.01' step='0.01'  value={amount} onChange={(e) => inputChangeHandler('amount', e.target.value)}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input type='date'  value={date} onChange={(e) => inputChangeHandler('date', e.target.value)}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;