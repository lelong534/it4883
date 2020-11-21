import { Table, Input, Button, Space,Modal,DatePicker,Form,Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
const data = [
  {
    key: '1',
    name: 'Drone1',
    address: 'Vùng A',
    tags: ['add', 'edited info'],
  },
  {
    key: '2',
    name: 'Drone2',
   
    address: 'Vùng B',
    tags: ['delete'],
  },
  {
    key: '3',
    name: 'Drone3',

    address: 'Vùng C',
    tags: ['add', 'edited info'],
  },
  {
    key: '4',
    name: 'Drone1',
    address: 'Vùng C',
    tags: ['delete'],
  },
  {
    key: '5',
    name: 'Drone2',
    address: 'Vùng A',
    tags: ['delete'],
  },
  {
    key: '6',
    name: 'Drone2',
    address: 'Vùng C',
    tags: ['delete'],
  },
  {
    key: '7',
    name: 'Drone3',
    address: 'Vùng B',
    tags: ['delete'],
  },
  {
    key: '8',
    name: 'Drone3',
    address: 'Vùng A',
    tags: ['add', 'edited info'],
  },
  {
    key: '9',
    name: 'Drone1',
    address: 'Vùng A',
    tags: ['add', 'edited info'],
  },
  {
    key: '10',
    name: 'Drone2',
   
    address: 'Vùng B',
    tags: ['delete'],
  },
  {
    key: '11',
    name: 'Drone3',

    address: 'Vùng C',
    tags: ['add', 'edited info'],
  },
  {
    key: '12',
    name: 'Drone1',
    address: 'Vùng C',
    tags: ['delete'],
  },
  {
    key: '13',
    name: 'Drone2',
    address: 'Vùng A',
    tags: ['delete'],
  },
  {
    key: '14',
    name: 'Drone2',
    address: 'Vùng C',
    tags: ['delete'],
  },
  {
    key: '15',
    name: 'Drone3',
    address: 'Vùng B',
    tags: ['delete'],
  },
  {
    key: '16',
    name: 'Drone3',
    address: 'Vùng A',
    tags: ['add', 'edited info'],
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
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Miền giám sát',
        dataIndex: 'address',
        key: 'address',
        ...this.getColumnSearchProps('address'),
      },
      {
        title: 'Lịch sử hoạt động',
        key: 'tags',
        dataIndex: 'tags',
        ...this.getColumnSearchProps('tags'),
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'delete') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
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