import React from "react";
import './index.css';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import Carousel from 'react-elastic-carousel';
import styled from "styled-components";
import ProblemTable from './Table';

const { Title } = Typography;

const { Search } = Input;

const Note = styled.p`
	font-style: italic;
`

const Item = styled.div`
	border: 1px solid #f0f0f0;
	padding: 1.5rem;
	border-radius: 3rem;
	margin: 1rem 0;
	box-shadow:  0 .15rem 0.75rem 0 rgba(58,59,69,.15);
	background-image: linear-gradient(to right, #95a5a6, #bdc3c7);
	outline: none;

	&:hover {
		border: none;
		cursor: pointer;
	}
`

const Amount = styled.div`
`

const Container = styled.div`
	margin-top: 2rem;
`

const AutoProblem = () => {

	return (
		<Container>
			<Row>
				<Col span={18}></Col>
				<Col span={6}>
					<Search placeholder="Nhap tu khoa" enterButton />
				</Col>
			</Row>
			<br/>
			<Title level={3}>Danh sách drone</Title>
			<Carousel itemsToShow={5}>
				<Item>
					<Title>Drone 01</Title>
					<Note>
						<i className="fas fa-circle status-inactive"></i>
						<span> Không hoạt động</span>
					</Note>
					<Amount>Phát hiện 5 sự cố</Amount>
				</Item>
				<Item>
					<Title>Drone 02</Title>
					<Note>
						<i className="fas fa-circle status-inactive"></i>
						<span> Không hoạt động</span>
					</Note>
					<Amount>Phát hiện 10 sự cố</Amount>
				</Item>
				<Item>
					<Title>Drone 03</Title>
					<Note>
						<i className="fas fa-circle status-active"></i>
						<span> Đang hoạt động</span>
					</Note>
					<Amount>Phát hiện 9 sự cố</Amount>
				</Item>
				<Item>
					<Title>Drone 04</Title>
					<Note>
						<i className="fas fa-circle status-active"></i>
						<span> Đang hoạt động</span>
					</Note>		
					<Amount>Phát hiện 8 sự cố</Amount>		
				</Item>
				<Item>
					<Title>Drone 05</Title>
					<Note>
						<i className="fas fa-circle status-active"></i>
						<span> Đang hoạt động</span>
					</Note>
					<Amount>Phát hiện 6 sự cố</Amount>
				</Item>
				<Item>
					<Title>Drone 06</Title>
					<Note>
						<i className="fas fa-circle status-active"></i>
						<span> Đang hoạt động</span>
					</Note>
					<Amount>Phát hiện 5 sự cố</Amount>
				</Item>
			</Carousel>
			<br/>
			<Title level={3}>Danh sách hình ảnh có sự cố </Title>
			<ProblemTable/>
			<br/>
			<Title level={3}>Danh sách video có sự cố </Title>
			<ProblemTable/>
		</Container>
	);
};

export default AutoProblem;
