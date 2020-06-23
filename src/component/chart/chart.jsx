import React from 'react';
import {VictoryChart,VictoryTheme,VictoryLine,VictoryContainer} from 'victory';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

 
 
const LineChart = ({data}) => (
   <VictoryChart
  theme={VictoryTheme.material}
  height={200} width={300}
  containerComponent={<VictoryContainer responsive={true}/>}
>
{ console.log(data)}
  <VictoryLine
   
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={data}
    animate={{
    	duration: 2000,
    	onLoad: { duration: 1000 }
    }}
   
  />
</VictoryChart>
);

export default LineChart;