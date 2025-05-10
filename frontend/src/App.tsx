import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home';
import ListPage from '@/pages/list';
import SuperHeroDetails from './pages/superheroDetails';
import NotFoundPage from './pages/notFound';
import CreateSuperhero from './pages/createSuperhero';

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<SuperHeroDetails />} path="/hero" />
      <Route element={<ListPage />} path="/list" />
      <Route element={<CreateSuperhero />} path="/create" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}

export default App;
