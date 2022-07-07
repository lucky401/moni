import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/dashboard';

import BankSampah from "./views/BankSampah";

function Modules(): JSX.Element {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<BankSampah />} />
        </Routes>
      </Layout>
    );
  }
  
  export default Modules;