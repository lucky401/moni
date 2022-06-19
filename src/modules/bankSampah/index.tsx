import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/general';

import BankSampah from "./views/bankSampah";

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