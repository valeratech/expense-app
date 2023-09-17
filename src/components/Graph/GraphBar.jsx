import './GraphBar.css';

function GraphBar(props) {
    // The fillGraphBar variable will be passed as a (style) 'height: percentage' filling a div container for each month
    let fillGraphBar = '0%';

    // If props.value and props.maxValue are equal then 100% of the bar is filled
    // If props.value is 25 and props.maxValue is 100 then 25% of the bar is filled
    if (props.maxValue > 0) {
        fillGraphBar = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='graph-bar'>
            {/*The graph-bar__inner div acts as the container for the actual bar for each month */}
            <div className='graph-bar__inner'>
                <div
                    // The graph-bar__fill div displays and visibly fills the graph-bar__inner container by percentage
                    className='graph-bar__fill'
                    style={{ height: fillGraphBar }}
                ></div>
            </div>
            {/*The label represents the caption for each month that displays under each bar*/}
            <div className='graph-bar__label'>{props.label}</div>
        </div>
    );
};

export default GraphBar;