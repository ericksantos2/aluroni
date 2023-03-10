import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import { lazy, Suspense } from 'react';

const Inicio = lazy(() => import('pages/Inicio'));
const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Sobre = lazy(() => import('pages/Sobre'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
