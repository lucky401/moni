import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/general';

import Menu from './views/Menu';

function Modules(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </Layout>
  );
}

export default Modules;