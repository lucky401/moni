import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/dashboard';

import MemberList from './view/member-list';

function Modules(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MemberList />} />
      </Routes>
    </Layout>
  );
}

export default Modules;