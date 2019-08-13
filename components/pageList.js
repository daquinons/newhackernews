import React from 'react';
import Layout from '../components/layout';
import ItemsList from '../components/itemsList';

export default class PageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1, data: [], hasMore: true };
  }

  async loadData(page) {
    const res = await this.props.api(page);
    const json = await res.json();
    return json;
  }

  async componentWillMount() {
    const data = await this.loadData(1);
    this.setState({ data: data });
  }

  async loadMore() {
    if (this.state.hasMore) {
      this.setState({ currentPage: this.state.currentPage + 1 });
      this.setState({ hasMore: this.state.currentPage === 30 ? false : true });
      const newData = await this.loadData(this.state.currentPage);
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
