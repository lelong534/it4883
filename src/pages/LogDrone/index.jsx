import React from 'react';
import { Table,BackTop} from 'antd';

const data = [
  {
    key: '1',
    name: 'Drone1',
    region:'Vùng A',
    
  },
  {
    key: '2',
    name: 'Drone2',
    region:'Vùng A',
  },
  {
    key: '3',
    name: 'Drone2',
    region:'Vùng B',
  },
  {
    key: '4',
    name: 'Drone1',
    region:'Vùng C',
  },
  {
    key: '5',
    name: 'Drone2',
    region:'Vùng C',
    
  },
  {
    key: '6',
    name: 'Drone1',
    region:'Vùng S',
    
  },
  {
    key: '7',
    name: 'Drone2',
    region:'Vùng S',
  },
  {
    key: '8',
    name: 'Drone3',
    region:'Vùng A',
   
  },
  {
    key: '9',
    name: 'Drone2',
    region:'Vùng A',
   
  },
  {
    key: '10',
    name: 'Drone3',
    region:'Vùng B',
    
  },
  {
    key: '11',
    name: 'Drone3',
    region:'Vùng C',
  },
  {
    key: '12',
    name: 'Drone2',
    region:'Vùng C',

  },
  {
    key: '13',
    name: 'Drone1',
    region:'Vùng A',
    
  },
  {
    key: '14',
    name: 'Drone1',
    region:'Vùng A',
   
  },
  {
    key: '15',
    name: 'Drone1',
    region:'Vùng A',
  
  },
  {
    key: '16',
    name: 'Drone1',
    region:'Vùng A',
  },
];

class App extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };


  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Tên drone',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Drone1', value: 'Drone1' },
          { text: 'Drone2', value: 'Drone2' },
          { text: 'Drone3', value: 'Drone3' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Miền hoạt động',
        dataIndex: 'region',
        key: 'region',
        filters: [
          { text: 'Vùng A', value: 'Vùng A' },
          { text: 'Vùng B', value: 'Vùng B' },
          { text: 'Vùng C', value: 'Vùng C' },
          { text: 'Vùng S', value: 'Vùng S' },
        ],
        filteredValue: filteredInfo.region || null,
        onFilter: (value, record) => record.region.includes(value),
        sorter: (a, b) => a.region.length - b.region.length,
        sortOrder: sortedInfo.columnKey === 'region' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </>
    );
  }
}
function LogDrone(){
    return(
        <>
        <App />
        <BackTop style={{color:'rgba(64, 64, 64, 0.6)'}} />
        </>
    );
}
export default LogDrone;