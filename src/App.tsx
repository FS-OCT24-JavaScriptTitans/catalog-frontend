import { Outlet } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <>
    <Navigation />
    <main>
      <div className="container">
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);
