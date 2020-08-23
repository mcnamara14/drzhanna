import React from 'react'
import { Form, Input, Checkbox, Select } from 'antd'
import Button from '../../../components/Button/Button'
import { Link } from 'gatsby'

import { StyledFormItem, StyledForm } from './styles'

const ContactForm = () => {
    const onFinish = values => {
        console.log('Success:', values)
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    return (
        <StyledForm
            name="basic"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            method="POST"
            data-netlify="true"
            name="contact-form"
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
                    <Select.Option value="This Doc Makes House Calls">This Doc Makes House Calls</Select.Option>
                    <Select.Option value="Spirit and Mind">Spirit and Mind</Select.Option>
                    <Select.Option value="By the Numbers">By the Numbers</Select.Option>
                    <Select.Option value="General Inquiry">General Inquiry</Select.Option>
                </Select>
            </StyledFormItem>

            <StyledFormItem name="message" >
                <Input.TextArea placeholder="message" />
            </StyledFormItem>

            <StyledFormItem>
               <Button title="Submit" />
            </StyledFormItem>
        </StyledForm>
    )
}

export default ContactForm
