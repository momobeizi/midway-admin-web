import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import { useSettingStore } from '@/store/index';
import './index.less';

const MHeader: React.FC = () => {
  const { collapsed, changeCollapsed } = useSettingStore();

  return (
    <Layout.Header className="m-header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => changeCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 26,
          height: 26,
        }}
      />
    </Layout.Header>
  );
};

export default MHeader;
