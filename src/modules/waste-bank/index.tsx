import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/dashboard';

import WasteBankList from "./views/waste-bank-list";

function Modules(): JSX.Element {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<WasteBankList />} />
        </Routes>
      </Layout>
    );
  }
  
  export default Modules;