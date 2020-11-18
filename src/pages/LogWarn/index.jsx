import React from 'react';
import { Table,BackTop} from 'antd';

const data = [
  {
    key: '1',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '2',
    name: 'Cây bị héo',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '3',
    name: 'Ngập úng',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '4',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 4',
    address: 'Vùng B',
  },
  {
    key: '5',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '6',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '7',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '8',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '9',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '10',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '11',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '12',
    name: 'Sâu bệnh',
    time: '3',
    level:'Mức 1',
    address: 'Vùng A',
  },
  {
    key: '13',
    name: 'Sâu bệnh',
    time: '1',
    level:'Mức 5',
    address: 'Vùng S',
  },
  {
    key: '14',
    name: 'Thiếu nước',
    time: '9',
    level:'Mức 1',
    address: 'Vùng S',
  },
  {
    key: '15',
    name: 'Sâu bệnh',
    time: '6',
    level:'Mức 3',
    address: 'Vùng B',
  },
  {
    key: '16',
    name: 'Cây bị héo',
    time: '4',
    level:'Mức 2',
    address: 'Vùng A',
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

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'time',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Cảnh báo',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Sâu bệnh', value: 'Sâu bệnh' },
          { text: 'Thiếu nước', value: 'Thiếu nước' },
          { text: 'Ngập úng', value: 'Ngập úng' },
          { text: 'Cây bị héo', value: 'Cây bị héo' },
          { text: 'Cây bị đổ', value: 'Cây bị đổ' },
         
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Thời gian (Năm 2020)',
        dataIndex: 'time',
        key: 'time',
        sorter: (a, b) => a.time - b.time,
        sortOrder: sortedInfo.columnKey === 'time' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Mức độ cảnh báo',
        dataIndex: 'level',
        key: 'level',
        
      },
      {
        title: 'Miền xảy ra cảnh báo',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'Vùng A', value: 'Vùng A' },
          { text: 'Vùng B', value: 'Vùng B' },
          { text: 'Vùng C', value: 'Vùng C' },
          { text: 'Vùng S', value: 'Vùng S' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
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
function LogWarn(){
    return(
        <>
        <App />
        <BackTop style={{color:'rgba(64, 64, 64, 0.6)'}} />
        </>
    );
}
export default LogWarn;