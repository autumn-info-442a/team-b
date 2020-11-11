import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
} from 'react-vis';

export default function BarGraph(props) {
    let location = props.location;
    const BarSeries = VerticalBarSeries;
    const blueData = [{x: 'Two Weeks Ago', y: location["cnt"] - location["2wd"]}, {x: 'One Week Ago', y: location["cnt"] - location["1wd"]}, {x: 'One Day Ago', y: location["cnt"] - - location["1dd"]}];
    return (
    <div>
        <div>
            Covid Trends Over the Past Two Weeks
        </div>
        <div>
            <XYPlot xType="ordinal" width={300} height={400} xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis/>
            <YAxis width={100} left={-50} hideLine/>
            <BarSeries className="vertical-bar-series-example" data={blueData} />
            </XYPlot>
        </div>
    </div>
    );
}