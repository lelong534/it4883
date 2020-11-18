import { Card,Row,Col,BackTop } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
const { Meta } = Card;

const MetaData = ({ history }) => {
  console.log({ history });
  return (

    <>
    <Row>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting"   onClick={() => history.push('/dashboard')}/>,
            <EditOutlined key="edit"  onClick={() => history.push('/dashboard')}/>,
            <EllipsisOutlined key="ellipsis"  onClick={() => history.push('/dashboard')} />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting"   onClick={() => history.push('/dashboard')}/>,
            <EditOutlined key="edit"  onClick={() => history.push('/dashboard')}/>,
            <EllipsisOutlined key="ellipsis"  onClick={() => history.push('/dashboard')} />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
    
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting"   onClick={() => history.push('/dashboard')}/>,
            <EditOutlined key="edit"  onClick={() => history.push('/dashboard')}/>,
            <EllipsisOutlined key="ellipsis"  onClick={() => history.push('/dashboard')} />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginRight:'4%',marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>
        <Col  style={{marginTop:20}}>
            <Card
            hoverable
          style={{ width: 250 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>

    </Row>
  <BackTop />

    </>
  );
}
 export default MetaData;