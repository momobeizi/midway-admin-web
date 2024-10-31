import { Layout } from 'antd';
import MContent from './Content';
import MHeader from './Header';
import MSiderMenu from './SiderMenu';
import './index.less';

const MLayout = () => {
  return (
    <Layout className='m-layout'>
      <Layout className="m-layout-left">
        <MSiderMenu />
      </Layout>
      <Layout className="m-layout-right">
        <MHeader />
        <MContent />
      </Layout>
    </Layout>
  );
};

export default MLayout;
