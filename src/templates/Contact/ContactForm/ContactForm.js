import React, { useState } from 'react'
import { Form, Input, Checkbox, Select } from 'antd'
import Button from '../../../components/Button/Button'
import { Link } from 'gatsby'

import { StyledFormItem, StyledForm } from './styles'

const ContactForm = () => {
    const [state, setState] = useState({})

    const handleChange = (e, event) => {
        if (event) {
            setState({ ...state, ["areaOfInterest"]: event.value })
        } else {
            setState({ ...state, [e.target.name]: e.target.value })
        }
      
    }
    console.log('state', state)
    const onFinish = () => {
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
          }
          
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...state})
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
        
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    return (
        <StyledForm
            name="contact-form"
            method="post"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
        <input type="hidden" name="form-name" value="contact-form" />
            <StyledFormItem
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!'
                    }
                ]}
            >
                <Input placeholder="full name" name="fullName" onChange={(event) => handleChange(event)} />
            </StyledFormItem>

            <StyledFormItem name="areaOfInterest" >
                <Select placeholder="area of interest" name="areaOfInterest" onSelect={(value, event) => handleChange(value, event)}>
                    <Select.Option value="This Doc Makes House Calls">This Doc Makes House Calls</Select.Option>
                    <Select.Option value="Spirit and Mind">Spirit and Mind</Select.Option>
                    <Select.Option value="By the Numbers">By the Numbers</Select.Option>
                    <Select.Option value="General Inquiry">General Inquiry</Select.Option>
                </Select>
            </StyledFormItem>

            <StyledFormItem name="message" >
                <Input.TextArea placeholder="message" name="message" onChange={(event) => handleChange(event)} />
            </StyledFormItem>

            <StyledFormItem>
               <Button title="Submit" />
            </StyledFormItem>
        </StyledForm>
    )
}

export default ContactForm
