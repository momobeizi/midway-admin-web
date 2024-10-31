import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useSettingStore } from '@/store';
import './index.less';

const MSiderMenu: React.FC = () => {
  const { collapsed } = useSettingStore();
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ backgroundColor: '##2f3447' }}
    >
      <div className="m-layout-left-logo">
        <img src="" alt="" />
        {!collapsed ? <span>MIDWAY-ADMIN</span> : null}
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
