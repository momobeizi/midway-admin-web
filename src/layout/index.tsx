import { Layout } from 'antd';
import MContent from './Content';
import MHeader from './Header';
import MSiderMenu from './SiderMenu';
import { useSettingStore } from '@/store';
import './index.less';

const MLayout = () => {
  const { collapsed } = useSettingStore();
  return (
    <Layout className="m-layout">
      <Layout className="m-layout-left">
        <MSiderMenu />
      </Layout>
      <Layout
        className="m-layout-right"
        style={{ width: `calc(100% - ${!collapsed ? '200px' : '80px'})` }}
      >
        <MHeader />
        <MContent />
      </Layout>
    </Layout>
  );
};

export default MLayout;
