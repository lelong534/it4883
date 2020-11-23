import { Table, Input, Button, Space,BackTop,DatePicker,Form,Col,Card} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
const data = [
  {
    key: '1',
    id:'1',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
status:'Đang hoạt động'
  },
  {
    key: '2',
    id:'2',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
  status:'Đang hoạt động'
  },
  {
    key: '3',
    id:'3',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
 status:'Ngừng hoạt động'
  },
  {
    key: '4',
    id:'4',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
 status:'Ngừng hoạt động'
  },
  {
    key: '5',
    id:'5',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
  
  },
  {
    key: '6',
    id:'6',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
 
  },
  {
    key: '7',
    id:'7',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
 
  },
  {
    key: '8',
    id:'8',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',

  },
  {
    key: '9',
    id:'9',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
 
  },
  {
    key: '10',
    id:'10',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
 
  },
  {
    key: '11',
    id:'11',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
  
  },
  {
    key: '12',
    id:'12',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020',
  
  },
  {
    key: '13',
    id:'13',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
  {
    key: '14',
    id:'14',
    name: 'Payload1',
  type:'Delete',
  description:'Delete Description',
  time:'21:00 11/19/2020'
  },
];
const { RangePicker } = DatePicker;

class TablePayloadActivity extends React.Component {
  
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
      {
        title: 'Trạng thái',
        key: 'status',
        dataIndex: 'status',
        ...this.getColumnSearchProps('status'),
      }
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}
class TablePayload extends React.Component {
  
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
  constructor(props){
    super(props);
    this.state={visible1:false};
    this.showModal1=this.showModal1.bind(this);
    this.state={visible2:false};
    this.showModal2=this.showModal2.bind(this)
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
          style={{ width: '100',marginLeft:40 }}
          cover={
            <img
            style={{height:400}}
              alt="example"
              src="https://store.hp.com/app/assets/images/uploads/prod/how-to-operate-drone-camera-hero1563465531828438.jpg"
            />
          }
        >
 <h1>
          Chọn thời gian bạn muốn kiểm tra lịch sử sự cố
        </h1>
        
        <br/>
        <Form  rules={[{ required: true, message: 'Bạn chưa chọn thời gian!' }]}>
       <Space direction="vertical" size={12}>
    <RangePicker />
    
  </Space >
  </Form>
  <br/>
  <br/>
        <Button type="primary" onClick={this.showModal1} htmlType="submit">
          Log
        </Button>
        <div
         style={{display:this.state.visible1?"block":"none"}}
        >
          <TablePayload />
        </div>
        <Button type="primary" onClick={this.showModal2} htmlType="submit" style={{marginLeft:20}}>
          Log Activity
        </Button>
        <div
          style={{display:this.state.visible2?"block":"none"}}
        >
          <TablePayloadActivity />
        </div>
      </Card>
      </Col>
      
      </>
    );
  }
}
function LogProblem(){
  return(
    <>
<App />
<BackTop/>
</>
  );
  }
  export default LogProblem;