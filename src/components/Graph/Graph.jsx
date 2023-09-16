import GraphBar from './GraphBar';
import './Graph.css';

function Graph (props) {

    return (
        <div className='graph'>

            {props.graphData.map(item => (
                // The maxValue will represent the total (max value) sum of ALL values filtered for the given Month
                <GraphBar key={label} value={value} maxValue={null} label={label}/>
            ))}
        </div>
    )
}

export default Graph;