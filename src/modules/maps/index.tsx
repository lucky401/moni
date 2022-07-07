import { Routes, Route } from 'react-router-dom';

import Layout from 'layouts/dashboard';

import Maps from './views/Maps';

function Modules(): JSX.Element {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Maps />} />
            </Routes>
        </Layout>
    );
}

export default Modules;