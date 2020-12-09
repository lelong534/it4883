import React from 'react';
import { Table, Space, Button, BackTop, Input, Col, Row, Card, DatePicker, Form, Radio, Menu, MenuItem, Dropdown } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
var axios = require('axios');
const { RangePicker } = DatePicker;

class User extends React.Component {
  

  constructor(props) {
    super(props)
    this.state = {
    projectType: 'de_dieu',
    searchText: '',
    searchedColumn: '',
    filteredInfo: null,
    sortedInfo: null,
  };
  }

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
    let { sortedInfo} = this.state;
    sortedInfo = sortedInfo || {};

    const columns = [
      {
        title: 'Id',
        dataIndex: 'entityId',
        key: 'entityId',
        sorter: (a, b) => a.entityId - b.entityId,
        sortOrder: sortedInfo.columnKey === 'entityId' && sortedInfo.order,
      },
      {
        title: 'Tên drone',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Kinh độ',
        dataIndex: 'longitude',
        key: 'longtitude',
        ...this.getColumnSearchProps('longitude'),
      },
      {
        title: 'Vĩ độ',
        dataIndex: 'latitude',
        key: 'latitude',
        ...this.getColumnSearchProps('latitude'),
      },
      {
        title: 'Hành động',
        dataIndex: 'type',
        key: 'type',
        ...this.getColumnSearchProps('type'),
        
      },
      {
        title: 'Region Id',
        dataIndex: 'regionId',
        key: 'regionId',
        ...this.getColumnSearchProps('regionId'),
      },
      {
        title: 'Mô tả',
        dataIndex: 'descripiton',
        key: 'description',
        ...this.getColumnSearchProps('description'),
      },
      {
        title: 'Thời gian',
        dataIndex: 'timestamp',
        key: 'timestamp',
        sorter: (a, b) => a.timestamp - b.name.timstamp,
        sortOrder: sortedInfo.columnKey === 'timstamp' && sortedInfo.order,
      },
      
      {
        title: 'Miền hoạt động',
        dataIndex: 'regionName',
        key: 'regionName',
        ...this.getColumnSearchProps('regionName'),
      },
    ];
    return (
      <>
        <Table columns={columns} dataSource={this.props.data} loading={this.props.loading} onChange={this.handleChange} />
      </>
    );
  }
}

class UserActivity extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      searchedColumn: '',
      filteredInfo: null,
      sortedInfo: null,
    };
  }
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
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};


    const columns = [
      {
        title: 'ID',
        dataIndex: 'entityId',
        key: 'entityId',
        sorter: (a, b) => a.entityId - b.entityId,
        sortOrder: sortedInfo.columnKey === 'entityId' && sortedInfo.order,
      },
      {
        title: 'Tên drone',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Kinh độ',
        dataIndex: 'longitude',
        key: 'longtitude',
        ...this.getColumnSearchProps('longtitude'),
      },
      {
        title: 'Vĩ độ',
        dataIndex: 'latitude',
        key: 'latitude',
        ...this.getColumnSearchProps('latitude'),
      },
      {
        title: 'Hành động',
        dataIndex: 'type',
        key: 'type',
        ...this.getColumnSearchProps('type'),
      },
      {
        title: 'Mô tả',
        dataIndex: 'descripiton',
        key: 'description',
        ...this.getColumnSearchProps('description'),
      },
      {
        title: 'Region Id',
        dataIndex: 'regionId',
        key: 'regionId',
        ...this.getColumnSearchProps('regionId'),
      },
      {
        title: 'Thời gian',
        dataIndex: 'timestamp',
        key: 'timestamp',
        sorter: (a, b) => a.timestamp- b.timestamp,
        sortOrder: sortedInfo.columnKey === 'timestamp' && sortedInfo.order,
      },
     
      {
        title: 'Miền hoạt động',
        dataIndex: 'regionName',
        key: 'regionName',
        ...this.getColumnSearchProps('regionName'),
      },
    ];

    return (
      <>
        <Table columns={columns} dataSource={this.props.data} loading={this.props.loading} onChange={this.handleChange} />
      </>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: 'de_dieu',
      tableShow: '',
      fromDate: '',
      toDate: '',
      logData: null,
      isLoadedLogData: false,
    };
    this.onTableShowChange = this.onTableShowChange.bind(this);
    this.onRangePickerChange = this.onRangePickerChange.bind(this);
    this.setLogData = this.setLogData.bind(this);
  }

  onTableShowChange(tableShow){
    this.setState({tableShow: tableShow});
  }

  setLogData(fromDate, toDate) {
    let url = null;
    if (fromDate && toDate) {
      url = 'https://it4883logging.herokuapp.com/api/drones?minDate=' + fromDate +'&maxDate=' + toDate +'&username=G1&password=123';
    } else {
      url = 'https://it4883logging.herokuapp.com/api/drones?projectType=' + this.state.projectType ;
    }
     
    let config = {
      method: 'get',
      url: url,
      headers: {}
    };

    axios(config)
      .then((response) => {
        let userData = response.data.map((drone, index) => ({
          key: index,
          ...drone
        }));
        userData.forEach((userData) => {
          for(let key in userData) {
            if (userData[key] == null) userData[key] ='';
          }
        });
        this.setState({ logData: userData, isLoadedLogData: true });
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  handleDropdown=(e) =>{
    let project_type = e.key;
    this.setState({
      projectType:project_type
    })
    this.setLogData();
    console.log(e);
  }

  

  onRangePickerChange(dates, dateStrings) {
    this.setState({isLoadedLogData: false });
    let fromDate = "";
    let toDate = "";

    if (dates) {
      fromDate = dates[0].format('YYYY-MM-DDThh:mm:ss');
      toDate = dates[1].format('YYYY-MM-DDThh:mm:ss');
    }

    this.setLogData(fromDate, toDate);
    
  }

  componentDidMount(){
    this.setLogData(null, null);
  }



  render() {

    const menu = (
      <Menu onClick={this.handleDropdown.bind(this)}>
        <Menu.Item key="de_dieu" icon={<UserOutlined />}>
          Đê điều
        </Menu.Item>
        <Menu.Item key="cay_trong" icon={<UserOutlined />}>
          Cây trồng
        </Menu.Item>
        <Menu.Item key="luoi_dien" icon={<UserOutlined />}>
          Lưới điện
        </Menu.Item>
        <Menu.Item key="chay_rung" icon={<UserOutlined />}>
          Cháy rừng
        </Menu.Item>
      </Menu>
    );

    return (
      <>
        <Col style={{ marginRight: '4%', marginTop: 20 }}>
          <Card
            hoverable
            style={{ width: '100', marginLeft: 40 }}
            cover={
              <img
                style={{ height: 400 }}
                alt="example"
                src="https://i.pinimg.com/originals/11/9d/e3/119de34b79d90fc7ee2c175525726741.jpg"
              />
            }
          >
            <h1>
              Chọn thời gian bạn muốn kiểm tra lịch sử hoạt động
            </h1>
            <br />
            <Row>
            <Form rules={[{ required: true, message: 'Bạn chưa chọn thời gian!' }]}>
              <Space direction="vertical" size={12}>
                <RangePicker format='DD/MM/YYYY' onChange={(dates, dateStrings) => this.onRangePickerChange(dates, dateStrings)} />
              </Space >
            </Form>
            <Space></Space>
            <Dropdown overlay={menu}>
              <Button>
                Chọn dịch vụ giám sát <DownOutlined />
              </Button>
            </Dropdown>
            </Row>
            <br/>
            
              <User data={this.state.logData} loading={!this.state.isLoadedLogData}/>          </Card>
        </Col>
      </>
    );
  }
}
function LogDrone() {
  return (
    <>
      <App />
      <BackTop />
    </>
  );
}
export default LogDrone;