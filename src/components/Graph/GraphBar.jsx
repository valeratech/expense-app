import './GraphBar.css'

function GraphBar(props) {

    return (
        <div className='graph-bar'>
            {/*The graph-bar__inner div acts as the container for the actual bar for each month */}
            <div className='graph-bar__inner'>
                <div
                    // The graph-bar__fill div displays and visibly fills the graph-bar__inner container by percentage
                    className='graph-bar__fill'
                    style={{ height: 100% }}
                ></div>
            </div>
            {/*The label represents the caption for each month that displays under each bar*/}
            <div className='graph-bar__label'>{props.label}</div>
        </div>
    );
};

export default GraphBar;