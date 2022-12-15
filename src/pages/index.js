import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';

import ConnectApp from 'components/ConnectFour/App';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Connect Four Homepage</title>
      </Helmet>
      <ConnectApp />
    </Layout>
  );
};

export default IndexPage;
