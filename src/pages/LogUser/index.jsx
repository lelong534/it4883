import React from 'react';
import { Table,BackTop} from 'antd';

const data = [
  {
    key: '1',
    name: 'John Brown',
    time: '3',
    role:'Giám sát viên',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    role:'Kỹ thuật viên',
    time:'5',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    role:'Nhân viên quản lý',
    time: '1',
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    role:'Nhân viên chăm sóc cây',
    time: '12',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Red',
    role:'Nhân viên chăm sóc cây',
    time: '2',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '6',
    name: 'Jim Red',
    role:'Nhân viên quản lý',
    time: '2',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '7',
    name: 'Jim Red',
    role:'Nhân viên quản lý',
    time: '12',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '8',
    name: 'Jim Red',
    role:'Nhân viên quản lý',
    time: '9',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '9',
    name: 'Jim Blue',
    role:'Nhân viên quản lý',
    time: '2',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '10',
    name: 'Jim ',
    role:'Nhân viên quản lý',
    time: '10',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '11',
    name: 'Jim ',
    role:'Nhân viên quản lý',
    time: '10',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '12',
    name: 'Jim ',
    role:'Nhân viên quản lý',
    time: '10',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '13',
    name: 'Jim ',
    role:'Nhân viên quản lý',
    time: '10',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '14',
    name: 'Jim ',
    role:'Nhân viên quản lý',
    time: '10',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '15',
    name: 'Jim ',
    role:'Nhân viên quản lý',
    time: '10',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '16',
    name: 'Jim ',
    role:'Nhân viên quản lý',
    time: '10',
    address: 'London No. 2 Lake Park',
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
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Vai trò',
        dataIndex: 'role',
        key: 'role',
        filters: [
          { text: 'Giám sát viên', value: 'Giám sát viên' },
          { text: 'Nhân viên quản lý ', value: 'Nhân viên quản lý' },
          { text: 'Kỹ thuật viên', value: 'Kỹ thuật viên' },
          { text: 'Nhân viên chăm sóc cây trồng', value: 'Nhân viên chăm sóc cây trồng' },
         
        ],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order,
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
        title: 'Địa điểm',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
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
function LogUser(){
    return(
        <>
        <App />
        <BackTop style={{color:'rgba(64, 64, 64, 0.6)'}} />
        </>
    );
}
export default LogUser;