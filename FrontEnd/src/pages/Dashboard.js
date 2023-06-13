import React from 'react'
import '../App.css'
import {Space} from "antd";
import HeaderDb from '../components/HeaderDb';
import SideMenuDb from '../components/SideMenuDb';
import PageContentDb from '../components/PageContentDb';
import FooterDb from '../components/FooterDb';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <HeaderDb />
        <Space>
            <SideMenuDb />
            <PageContentDb />
        </Space>
      {/* <FooterDb /> */}
    </div>
  )
}

export default Dashboard; 