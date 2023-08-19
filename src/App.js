import ExpenseItem from "./components/ExpenseItem";

function App() {

    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14).toLocaleString('default',
                {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }
            )
        },
        {
            id: 'e2', title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12).toLocaleString('default',
                {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28).toLocaleString('default',
                {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12).toLocaleString('default',
                {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            {expenses.map(item => (
                <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
            ))}
        </div>
      );
}

export default App;
