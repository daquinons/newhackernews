import React from 'react';
import Layout from '../components/layout';
import ItemsList from '../components/itemsList';
import { getFrontpage } from '../services/api';

export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await getFrontpage();
    const json = await res.json();
    return { stories: json };
  }

  render() {
    return (
      <Layout>
        <ItemsList items={this.props.stories} />
      </Layout>
    );
  }
}
