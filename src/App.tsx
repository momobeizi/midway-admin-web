import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router()} />
    </StrictMode>
  );
};

export default App;
