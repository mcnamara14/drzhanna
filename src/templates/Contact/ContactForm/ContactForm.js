import React from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd'

import { StyledFormItem } from './styles'

const ContactForm = () => {
    const onFinish = values => {
        console.log('Success:', values)
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            name="basic"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <StyledFormItem
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!'
                    }
                ]}
            >
                <Input placeholder="full name" />
            </StyledFormItem>

            <StyledFormItem>
                <Select placeholder="area of interest">
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </StyledFormItem>

            <StyledFormItem name="message">
                <Input.TextArea placeholder="message" />
            </StyledFormItem>

            <StyledFormItem >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </StyledFormItem>
        </Form>
    )
}

export default ContactForm
