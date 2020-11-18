import React, {Component } from 'react';
import { Line } from '@ant-design/charts';

class Report extends Component {
  render() {
    const data = [
      { month: '1', status: 3 },
      { month: '2', status: 4 },
      { month: '3', status: 3.5 },
      { month: '4', status: 5 },
      { month: '5', status: 4.9 },
      { month: '6', status: 6 },
      { month: '7', status: 7 },
      { month: '8', status: 9 },
	  { month: '9', status: 13 },
	  { month: '10', status: 14 },
      { month: '11', status: 15},
      { month: '12', status: 16 },
    ];
    const config = {
      data,
      height: 400,
      xField: 'month',
      yField: 'status',
      point: {
        size: 5,
        shape: 'diamond',
      },
    };
    return <Line {...config} style={{height:500}} />;
  }
}
export default Report;