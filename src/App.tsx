import { Suspense, lazy, useEffect } from 'react';
import shallow from 'zustand/shallow';
import {
  useLocation,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';

import {useAuth} from 'lib/auth-provider/context';
import {useProfile} from 'lib/auth-provider/context/hooks';

import { FullPageSpinner } from 'common/components';

const LoginModule = lazy(() => import('./modules/login'));
const MenuModule = lazy(() => import('./modules/menu'));
const MemberModule = lazy(() => import('./modules/member'));
const BankSampahModule = lazy(() => import('./modules/bankSampah'));
const MapModule = lazy(() => import('./modules/maps'));
const DashboardModule = lazy(() => import('./modules/dashboard'));
const FullPageError = lazy(() => import('common/components/full-page-error'));

function App(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const [getAuth] = useAuth(state => [state.getAuth], shallow);

  const {refetch: getProfile} = useProfile();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/menu');
    }
  }, [location, navigate]);


  useEffect(() => {
    const currentUser = getAuth();
    if (currentUser.token) {
      getProfile();
    }
  }, [getAuth, getProfile]);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Routes>
        <Route path="/login/*" element={<LoginModule />} />
        <Route path="/menu/*" element={<MenuModule />} />
        <Route path="/anggota/*" element={<MemberModule />} />
        <Route path="/bank-sampah/*" element={<BankSampahModule />} />
        <Route path="/maps/*" element={<MapModule />} />
        <Route path="/dashboard/*" element={<DashboardModule />} />
        <Route
          path="*"
          element={<FullPageError message="Page not found" errorCode={404} />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
