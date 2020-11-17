import React, { useState } from 'react'
import styled from 'styled-components';
import { Typography, Table, Steps, Checkbox, Form, Button } from 'antd'

import { columns } from "./config"

const { Title } = Typography;
const { Step } = Steps;

function FlySetting() {
    const [path, setPath] = useState({});

    let dataSource = [
        { key: 1, rowIndex: 1 },
        { key: 2, rowIndex: 2 },
        { key: 3, rowIndex: 3 },
        { key: 4, rowIndex: 4 },
        { key: 5, rowIndex: 5 },
        { key: 6, rowIndex: 6 },
        { key: 7, rowIndex: 7 },
        { key: 8, rowIndex: 8 }
    ];

    dataSource = dataSource.map(i => ({
        ...i,
        colRow_1_x: <Form.Item name={`$${i.rowIndex}_1`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_2_x: <Form.Item name={`$${i.rowIndex}_2`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_3_x: <Form.Item name={`$${i.rowIndex}_3`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_4_x: <Form.Item name={`$${i.rowIndex}_4`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_5_x: <Form.Item name={`$${i.rowIndex}_5`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_6_x: <Form.Item name={`$${i.rowIndex}_6`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_7_x: <Form.Item name={`$${i.rowIndex}_7`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_8_x: <Form.Item name={`$${i.rowIndex}_8`} valuePropName="checked"><Checkbox /></Form.Item>,
        colRow_9_x: <Form.Item name={`$${i.rowIndex}_9`} valuePropName="checked"><Checkbox /></Form.Item>,
    }))

    const onFinish = (values) => {
        console.log("Success: ", values);
        setPath(values)
    };


    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <TitleCustom level={2}>Thiết lập đường bay</TitleCustom>

            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Table dataSource={dataSource} columns={columns} pagination={false} />

                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
            </Form>

            <StepsCustom progressDot direction="horizontal">
                {Object.entries(path).filter(i => i[1]).map(position => {
                    const [x, y] = position[0].split("$")[1].split("_");
                    return <Step title={`x: ${x} \n y: ${y}`} description={`Tọa độ (x, y) = (${x}, ${y})`} />;
                })}
            </StepsCustom>
        </Container>
    )
}

const Container = styled.div``;

const TitleCustom = styled(Title)`
    margin-left: 20px;
`;

const FormItem = styled(Form.Item)`
    text-align: right;
    margin-top: 15px;
`;

const StepsCustom = styled(Steps)`
    overflowX: "scroll";
    padding: "10px 0";
`;

export default FlySetting;
