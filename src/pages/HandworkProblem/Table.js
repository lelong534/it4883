import React from 'react';
import { Table } from 'antd';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
  margin-top: 2rem;
`

const dataSource = [
  {
    id: '1',
    location: '01',
    drone: '01',
    time: '20-12-2020',
    reason: 'gãy đổ',
    status: 'chưa xử lí'
  },
  {
    id: '2',
    location: '02',
    drone: '02',
    time: '20-12-2020',
    reason: 'gãy đổ',
    status: 'chưa xử lí'
  },
  {
    id: '3',
    location: '02',
    drone: '03',
    time: '20-12-2020',
    reason: 'sâu bệnh',
    status: 'chưa xử lí'
  },
  {
    id: '2',
    location: '02',
    drone: '04',
    time: '20-12-2020',
    reason: 'gãy đổ',
    status: 'chưa xử lí'
  },
  {
    id: '2',
    location: '02',
    drone: '05',
    time: '20-12-2020',
    reason: 'sâu bệnh',
    status: 'chưa xử lí'
  },
  {
    id: '2',
    location: '02',
    drone: '06',
    time: '20-12-2020',
    reason: 'gãy đổ',
    status: 'chưa xử lí'
  },
];

const columns = [
  {
    title: 'Mã video',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Địa điểm',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Drone',
    dataIndex: 'drone',
    key: 'drone',
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Nguyên nhân',
    dataIndex: 'reason',
    key: 'reason',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
    render: () => <Link to='hand-problem-detail'>Xem chi tiết</Link>
  },
];

const ProblemTable = () => {
  return (
    <Container>
      <Table dataSource={dataSource} columns={columns} />
    </Container>
  );
}

export default ProblemTable;