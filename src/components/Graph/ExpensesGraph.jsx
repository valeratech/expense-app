import Graph from './Graph';

function ExpensesGraph(props) {
    // create an array of labels/values which will be poplulated by iterating props.expenseData in the for loop below
    const graphData = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    props.expenseData.forEach(expense => {

        // Loop through the filtered array (by year) passed down by ExpensesGraph
        // Abstract ANY expense by month using getMonth() returning a numerical representation starting at 0 (January)
        const month = expense.date.getMonth(); // starting at 0 => January => 0

        // Use the number abstracted by getMonth to index graphData object and set the value, incrementing a total
        // This total represents the sum of all amounts and expenses for that given month
        graphData[month].value += expense.amount;
    })

    // Once data is populated into graphData, pass it as a prop value through the Graph component
    return <Graph graphData={graphData} />;
}

export default ExpensesGraph;