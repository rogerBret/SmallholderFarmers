import React from 'react'
import {BellFilled, MailOutlined} from "@ant-design/icons";
import Button from 'react-bootstrap/Button';
import '../App.css'
import { Badge, Space, Typography } from 'antd';

const HeaderDb = () => {
  return (
    <div className='HeaderDb'>
      <Typography.Title>Dashboard </Typography.Title>
      <Space>
        <Badge count={10} dot >
            <MailOutlined style={{ fontsize: 10 }}/>
        </Badge>
        <Badge count={20} >
            <BellFilled style={{ fontsize: 24 }}/>
        </Badge>
      </Space>
    </div>
  )
}

export default HeaderDb;