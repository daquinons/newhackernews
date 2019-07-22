import React from 'react';
import Layout from '../components/layout';
import ItemsList from '../components/itemsList';
import { getFrontpage } from '../services/api';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1, data: this.props.data, hasMore: true };
  }

  static async loadData(page) {
    const res = await getFrontpage(page);
    const json = await res.json();
    return json;
  }

  static async getInitialProps() {
    const data = await Index.loadData(1);
    return { data: data };
  }

  async loadMore() {
    if (this.state.hasMore) {
      this.setState({ currentPage: this.state.currentPage + 1 });
      this.setState({ hasMore: this.state.currentPage === 30 ? false : true })
      const newData = await Index.loadData(this.state.currentPage);
      this.setState({ data: this.state.data.concat(newData) });
    }
  }

  render() {
    return (
      <Layout>
        <ItemsList
          items={this.state.data}
          next={this.loadMore.bind(this)}
          hasMore={this.state.hasMore}
        />
      </Layout>
    );
  }
}
