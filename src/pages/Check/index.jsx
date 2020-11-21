import React,{useState} from 'react';
import { DatePicker, Select, Space,Table, Tag, BackTop} from 'antd';
import {Button,Collapse} from 'react-bootstrap';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
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
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '5',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
  ];
  
const { Option } = Select;
const { RangePicker } = DatePicker;
function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


function Check() {
    const [open,setOpen] = useState(false);
  return (
      <>
  
      <p>Chọn thời gian muốn kiểm tra</p>
    <Space direction="vertical" size={12}>
    <RangePicker />
    
  </Space>
 
  <p>Chọn miền muốn kiểm tra</p>
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Chọn miền kiểm tra"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Vùng A">Vùng A</Option>
    <Option value="Vùng B">Vùng B</Option>
    <Option value="Vùng C">Vùng C</Option>
  </Select>
  <br/>
  <br/>
  <Button type="primary" onClick={() => setOpen(!open)} >Tra cứu</Button>
  <br/>
  <br/>
  <Collapse  in={open} >
  <Table columns={columns} dataSource={data} />
</Collapse>
   <BackTop />
   </>
  );
}


export default Check;
