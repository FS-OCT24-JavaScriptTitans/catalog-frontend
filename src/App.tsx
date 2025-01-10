import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <nav>Some Navigation</nav>
    <main>
      <div className="container">
        <Outlet />
      </div>
    </main>
  </>
);
