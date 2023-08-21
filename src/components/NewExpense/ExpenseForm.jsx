import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function inputChangeHandler(identifier, value) {
        if (identifier === 'title') {
            console.log(value);
        } else if (identifier === 'amount') {
            console.log(value);
        } else if (identifier === 'date') {
            console.log(value);
        }
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={(e) => inputChangeHandler('title', e.target.value)}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={(e) => inputChangeHandler('amount', e.target.value)}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={(e) => inputChangeHandler('date', e.target.value)}/>
                </div>
            </div>
            <div clasName='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;