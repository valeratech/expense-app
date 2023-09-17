import GraphBar from './GraphBar';
import './Graph.css';

function Graph (props) {
    // Map (loop) through all the "values" (amounts) passed down from ExpensesGraph.jsx and store it in a new array "values"
    const values = props.graphData.map(data => data.value);
    // The Math.max method returns the largest of the numbers in the values array
    // The "total" variable (max value) represents the sum of ALL values filtered for the given Month
    // The "total" variable will be used to set the ceiling for each bar. The (total/maxValue) = 100% of the bar
    const total = Math.max(...values);
    console.log(props.graphData)

    return (
        <div className='graph'>
            {/* Map (loop) through the graphData array of objects that contain "label" and "value" keys. */}
            {/* The values for these keys will be a month and the total amount for each month respectively */}
            {props.graphData.map(item => (
                <GraphBar key={item.label} value={item.value} maxValue={total} label={item.label}/>
            ))}
        </div>
    )
}

export default Graph;