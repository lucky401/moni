import {Suspense, lazy, useEffect} from 'react';
import {
  useLocation,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';

import {FullPageSpinner} from 'common/components';

const LoginModule = lazy(() => import('./modules/login'));
const MenuModule = lazy(() => import('./modules/menu'));
const AnggotaModule = lazy(() => import('./modules/anggota'));
const BankSampahModule = lazy(() => import('./modules/bankSampah'));
const FullPageError = lazy(() => import('common/components/full-page-error'));

function App(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/menu');
    }
  }, [location, navigate]);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Routes>
        <Route path="/login/*" element={<LoginModule />} />
        <Route path="/menu/*" element={<MenuModule />} />
        <Route path="/anggota/*" element={<AnggotaModule />} />
        <Route path="/bank-sampah/*" element={<BankSampahModule />} />
        <Route
          path="*"
          element={<FullPageError message="Page not found" errorCode={404} />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
