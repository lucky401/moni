import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/dashboard';

import Dashboard from './view/Dashboard';

function Modules(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default Modules;