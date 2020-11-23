import React from 'react';
import { Table,Space,Button,BackTop,Input,Col,Card} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'John Brown',
    time: '3',
    role:'Giám sát viên',
    address: 'New York No. 1 Lake Park',
    working:'Giám sát vùng A'
  },
  {
    key: '2',
    name: 'Jim Green',
    role:'Kỹ thuật viên',
    time:'5',
    address: 'London No. 1 Lake Park',
    working:'Xử lý sự cố '
  },
  {
    key: '3',
    name: 'Joe Black',
    role:'Nhân viên quản lý',
    time: '1',
    address: 'Sidney No. 1 Lake Park',
    working:'Phân công nhân viên xử lý sự cố'
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

class User extends React.Component {
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

class UserActivity extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

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
      {
        title: 'Công việc đang làm',
        dataIndex: 'working',
        key: 'working',
        ...this.getColumnSearchProps('working'),
      },
    ];
    return (
      <>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </>
    );
  }
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={visible1:false};
    this.showModal1=this.showModal1.bind(this);
    this.state={visible2:false};
    this.showModal2=this.showModal2.bind(this);
  }
 
  showModal1(){
    this.setState(state=>(
      {
        visible1: !state.visible1
      }
    ));
  }
  
  showModal2(){
   this.setState(state=>(
     {
       visible2: !state.visible2
     }
   ));
   };

  render() {
    return (
      <>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: '100',marginLeft:40}}
          cover={
            <img
            style={{height:400}}
              alt="example"
              src="https://i.pinimg.com/originals/11/9d/e3/119de34b79d90fc7ee2c175525726741.jpg"
            />
          }
        >
            <h1>Xem lịch sử hoạt động của User</h1>
        <br/>
        <Button type="primary" onClick={this.showModal1} htmlType="submit">
          Log
        </Button>
        <div
        style={{display:this.state.visible1?"block":"none"}}
         
        >
          <User />
        </div>
        <Button type="primary" onClick={this.showModal2} htmlType="submit" style={{marginLeft:20}}>
          Log Activity
        </Button>
        <div
         
         style={{display:this.state.visible2?"block":"none"}}
         
        >
          <UserActivity />
        </div>
    
        </Card>
        </Col>
 </>
    );
  }
}
function LogUser(){
  return(
    <>
<App />
<BackTop/>
</>
  );
  }
  export default LogUser;