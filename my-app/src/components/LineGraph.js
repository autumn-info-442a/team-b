import React from 'react';
import '../../node_modules/react-vis/dist/style.css';

import {  
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries } 
from 'react-vis';

export default function LineGraph(props) {
    let location = props.location;
    return (
      <XYPlot xType="linear" width={300} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries
          data={[{x: 1, y: location["cnt"] - location["2wd"]}, {x: 2, y: location["cnt"] - location["1wd"]}, {x: 3, y: location["cnt"] - location["1dd"]}, {x: 4, y: 510}]}
        />
        <LineSeries data={null} />
      </XYPlot>
    );
}