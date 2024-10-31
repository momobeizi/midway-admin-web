import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './index.less';

const MSiderMenu: React.FC = () => {
  return (
    <Layout.Sider trigger={null} collapsible>
      <div className="m-layout-left-logo">
        <img src="" alt="" />
        <span>MIDWAY-ADMIN</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default MSiderMenu;
