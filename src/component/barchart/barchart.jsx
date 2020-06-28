import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import './barchart.css';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = ({ countryrecords/* see data tab */ }) => (
    <div className='bar-chart'>
    <ResponsiveBar
    data={countryrecords}
    keys={[ 'confirmed', 'deaths', 'active' ,'recovered']}
    indexBy="country"
    margin={{ top: 30, right: 130, bottom: 50, left: 130 }}
    padding={0.2}
    layout="horizontal"
    colors={{ scheme: 'category10' }}
    enableGridX={true}
    enableGridY={false}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
        ]}
        fill={[
            {
                match: {
                    id: 'active'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 8,
                tickPadding: 6,
                tickRotation: 44,
                legend: 'Cases',
                legendPosition: 'middle',
                legendOffset: 47
            }}
            axisLeft={{
                tickSize: 7,
                tickPadding: 6,
                tickRotation:-35,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            enableLabe={true}
            labelSkipWidth={24}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                    ]
                }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                enableLabel={false}
                />
                </div>
);

export default BarChart;