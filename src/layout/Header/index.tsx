import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import './index.less';

const MHeader: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Header className="m-header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
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
