import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Basics from './pages/Basics';
import Branches from './pages/Branches';
import Collaboration from './pages/Collaboration';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basics" element={<Basics />} />
          <Route path="branches" element={<Branches />} />
          <Route path="collaboration" element={<Collaboration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
