import { Outlet } from 'react-router-dom';
import './index.less';

const MContent = () => {
  return (
    <div className='m-content'>
       <Outlet />
    </div>
  );
};

export default MContent;
