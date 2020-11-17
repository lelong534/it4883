import React, { useState } from "react";
import { Row, Col, Card, Button, Input } from 'antd';
import styled from 'styled-components';
import { Image } from 'antd';

const ButtonGroup = styled.div`
	float: right;
`

const Container = styled.div`
	margin-top: 2rem;
`

const WrongItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 2rem;
`
const Icon = styled.i`
	margin-right: 1rem;	
	display: flex;
`

const Left = styled.div`
	display: flex;
	width: 15rem;
	align-items: center;
`

const Description = styled.div`
	color: red;
`

const AutoProbDetail = () => {

	const [isEdit, setIsEdit] = useState(false);
	const [location, setLocation] = useState('01');
	const [droneId, setDroneId] = useState('01');
	const [time, setTime] = useState('20-12-2020');
	const [reason, setReason] = useState('gay do');

	return (
		<Container>
			<Row>
				<Col span={12}>
					<Image src="https://bytuong.com/wp-content/uploads/2019/01/trong-cay-gi-hieu-qua-kinh-te-nhat-hien-nay-bytuong-com.jpg"/>
				</Col>
				<Col span={2}></Col>
				<Col span={10}>
					{ !isEdit &&
						<Card title="Chi tiết" className="{}">
							<WrongItem>
								<Left>
									<Icon className="fas fa-map-marked-alt"></Icon>
									<span>Khu vực: </span>
								</Left>
								<Description>{location}</Description>
							</WrongItem>
							<WrongItem>
								<Left>
									<Icon className="fas fa-space-shuttle"></Icon>
									<span>Mã Drone: </span>
								</Left>
								<Description>{droneId}</Description>
							</WrongItem>
							<WrongItem>
								<Left>
									<Icon className="fas fa-hourglass-start"></Icon>
									<span>Thời gian phát hiện: </span>
								</Left>
								<Description>{time}</Description>
							</WrongItem>
							<WrongItem>
								<Left>
									<Icon className="fas fa-exclamation-triangle"></Icon>
									<span>Nguyên nhân: </span>
								</Left>
								<Description>{reason}</Description>
							</WrongItem>
							<br/>
							<ButtonGroup>
								<Button type="primary" shape="round" style={{ margin: '2rem' }} onClick={() => setIsEdit(true)}>
						        	Sửa
						        </Button>         
						        <Button type="danger" shape="round">
						        	Bỏ đánh dấu
						        </Button>
							</ButtonGroup>
						</Card>
					}
					{ isEdit && 
						<Card title="Chỉnh sửa">
							<WrongItem>
								<Left>
									<Icon className="fas fa-map-marked-alt"></Icon>
									<span>Khu vực: </span>
								</Left>
								<Input value={location} onChange={(e) => setLocation(e.target.value)}/>
							</WrongItem>
							<WrongItem>
								<Left>
									<Icon className="fas fa-space-shuttle"></Icon>
									<span>Mã Drone: </span>
								</Left>
								<Input value={droneId} onChange={(e) => setDroneId(e.target.value)}/>
							</WrongItem>
							<WrongItem>
								<Left>
									<Icon className="fas fa-hourglass-start"></Icon>
									<span>Thời gian phát hiện: </span>
								</Left>
								<Input value={time} onChange={(e) => setTime(e.target.value)}/>
							</WrongItem>
							<WrongItem>
								<Left>
									<Icon className="fas fa-exclamation-triangle"></Icon>
									<span>Nguyên nhân: </span>
								</Left>
								<Input value={reason} onChange={(e) => setReason(e.target.value)}/>
							</WrongItem>
							<br/>
							<ButtonGroup>
								<Button type="submit" shape="round" style={{ marginTop: '2rem' }} onClick={() => setIsEdit(false)}>
						        	Lưu
						        </Button>  
							</ButtonGroup>
						</Card>
					}
				</Col>
			</Row>
		</Container>
	);
};

export default AutoProbDetail;
