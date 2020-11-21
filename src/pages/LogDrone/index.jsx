import { Table, Input, Button, Space,Modal,DatePicker,Form} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
const data = [
  {
    key: '1',
    id:'1',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '2',
    id:'2',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '3',
    id:'3',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '4',
    id:'4',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '5',
    id:'5',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '6',
    id:'6',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '7',
    id:'7',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '8',
    id:'8',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '9',
    id:'9',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '10',
    id:'10',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '11',
    id:'11',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '12',
    id:'12',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '13',
    id:'13',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '14',
    id:'14',
    name: 'Drone1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
];
const { RangePicker } = DatePicker;

class TableDrone extends React.Component {
  
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

  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        ...this.getColumnSearchProps('id'),
      },
      {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        ...this.getColumnSearchProps('type'),
      },
      {
        title: 'Miêu tả',
        key: 'description',
        dataIndex: 'description',
        ...this.getColumnSearchProps('description'),
      },
      {
        title: 'Thời gian',
        key: 'time',
        dataIndex: 'time',
        ...this.getColumnSearchProps('time'),
      },
     
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}
class App extends React.Component{
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
       <div >
          Chọn thời gian bạn muốn kiểm tra lịch sử hoạt động
        </div>
        
        <br/>
        <Form  rules={[{ required: true, message: 'Bạn chưa chọn thời gian!' }]}>
       <Space direction="vertical" size={12}>
    <RangePicker />
    
  </Space >
  </Form>
  <br/>
  <br/>
        <Button type="primary" onClick={this.showModal} htmlType="submit">
          Log
        </Button>
        <Modal
          title="Lịch sử hoạt động của drone"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1000}
        >
          <TableDrone />
        </Modal>
      </>
    );
  }
}
function LogDrone(){
  return(
<App />
  );
  }
  export default LogDrone;