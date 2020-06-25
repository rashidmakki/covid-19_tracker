import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import './chart.css';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

    
const LineChart = ({ data,deaths/* see data tab */ }) => (
	<div className='linechart'>
    <ResponsiveLine
        data={[{"id":'Total Case',data:data},
        {"id":'Total Deaths',data:deaths}]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ format:"%Y-%m-%d",precision:"day",type:"time",useUTC:true}}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
        	format:"%b %d",
            orient: 'bottom',
            tickValues:"every 16 days",
            tickSize: 4,
            tickPadding:4,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: -12,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'linear scale',
            legendOffset: 12,
            legendPosition: 'middle'
        }}
        xFormat="time:%Y-%m-%d"
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        enableArea={false}
        areaOpacity={0.6}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}

    />
    </div>
);

export default LineChart;