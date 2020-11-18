import React from 'react';
import { Table,BackTop} from 'antd';

const data = [
  {
    key: '1',
    name: 'Sâu bệnh',
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'1'
  },
  {
    key: '2',
    name: 'Cây bị héo',
    address: 'Vùng A',
    status:'Chưa xử lý',
    time:'2'
  },
  {
    key: '3',
    name: 'Ngập úng',
 
    address: 'Vùng A',
    status:'Đang xử lý',
    time:'3'
  },
  {
    key: '4',
    name: 'Sâu bệnh',
  
    address: 'Vùng B',
    status:'Đã xử lý',
    time:'4'
  },
  {
    key: '5',
    name: 'Sâu bệnh',
  
    address: 'Vùng A',
    status:'Chưa xử lý',
    time:'5'
  },
  {
    key: '6',
    name: 'Sâu bệnh',
   
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'6'
  },
  {
    key: '7',
    name: 'Sâu bệnh',
    
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'8'
  },
  {
    key: '8',
    name: 'Sâu bệnh',
    
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'9'
  },
  {
    key: '9',
    name: 'Sâu bệnh',
   
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'3'
  },
  {
    key: '10',
    name: 'Sâu bệnh',
    
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'8'
  },
  {
    key: '11',
    name: 'Sâu bệnh',
 
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'1'
  },
  {
    key: '12',
    name: 'Sâu bệnh',
  
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'1'
  },
  {
    key: '13',
    name: 'Sâu bệnh',
  
    address: 'Vùng S',
    status:'Đã xử lý',
    time:'1'
  },
  {
    key: '14',
    name: 'Thiếu nước',
   
    address: 'Vùng S',
    status:'Đã xử lý',
    time:'1'
  },
  {
    key: '15',
    name: 'Sâu bệnh',
  
    address: 'Vùng B',
    status:'Đã xử lý',
    time:'1'
  },
  {
    key: '16',
    name: 'Cây bị héo',
    address: 'Vùng A',
    status:'Đã xử lý',
    time:'1'
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
        title: 'Sự cố',
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
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        filters: [
          { text: 'Đã xử lý', value: 'Đã xử lý' },
          { text: 'Chưa xử lý', value: 'Chưa xử lý' },
          { text: 'Đang xử lý', value: 'Đang xử lý' }, 
        ],
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        sorter: (a, b) => a.status.length - b.status.length,
        sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
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
        title: 'Miền giám sát',
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
function LogProblem(){
    return(
        <>
        <App />
        <BackTop style={{color:'rgba(64, 64, 64, 0.6)'}} />
        </>
    );
}
export default LogProblem;