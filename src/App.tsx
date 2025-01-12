import { Outlet } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

export const App = () => (
  <>
    <Navigation />
    <main>
      <div className="container">
        <Outlet />
      </div>
    </main>
  </>
);
