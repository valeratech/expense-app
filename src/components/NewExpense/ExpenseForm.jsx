import './ExpenseForm.css';
import {useState} from "react";

function ExpenseForm(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const [hideFrom, setHideForm] = useState(true);

    function inputChangeHandler(idenitifier, value) {
        switch (idenitifier) {
            case 'title':
                console.log(value);
                setTitle(value);
                break;
            case 'amount':
                console.log(value);
                setAmount(value);
                break;
            case 'date':
                console.log(value);
                setDate(value.toLocaleString());
                break;
        }
    }

    function submitHandler(e) {
        e.preventDefault();

        const newExpense = {
            id: Math.random().toString(),
            title,
            amount,
            date: new Date(date),
        }

        props.onUpdateExpenseItems(newExpense);

        setTitle('');
        setAmount('');
        setDate('');

        props.onToggleForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input onChange={(e)=> inputChangeHandler('title', e.target.value)} type='text' value={title} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input onChange={(e)=> inputChangeHandler('amount', e.target.value)} type='number' min='0.01' step='0.01' value={amount}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input onChange={(e)=> inputChangeHandler('date', e.target.value)} type='date' min="2019-01-01" max="2023-12-31" value={date}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onToggleForm} type='button'>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;