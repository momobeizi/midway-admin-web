import { HashRouter } from 'react-router-dom';
import Router from '../../router';
import './index.less';

const MContent = () => {
  return (
    <div className='m-content'>
      <HashRouter>
        <Router />
      </HashRouter>
    </div>
  );
};

export default MContent;
