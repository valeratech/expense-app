import React from 'react';
import GraphBar from './GraphBar';
import './Graph.css';

function Graph (props) {

    return (
        <div className='graph'>
            {/*The graphData will be an array of objects that contain "label" and "value" keys. */}
            {/*The values will be a month and the total amount for each month respectively*/}
            {props.graphData.map(item => (
                // The maxValue will represent the total (max value) sum of ALL values filtered for the given Month
                <GraphBar key={label} value={value} maxValue={null} label={label}/>
            ))}
        </div>
    )
}

export default Graph;