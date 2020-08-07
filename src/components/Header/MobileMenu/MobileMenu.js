import React from 'react'
import { Link } from 'gatsby'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './styles.css'

const MobileMenu = () => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <Link to="/this-doc-makes-house-calls">
                    This Doc Makes House Calls
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <Link to="/spirit-and-mind">Spirit and Mind</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4">
                <Link to="/by-the-numbers">By the Numbers</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="5">
                <Link to="/contact">Contact</Link>
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Menu <DownOutlined />
            </a>
        </Dropdown>
    )
}

export default MobileMenu
