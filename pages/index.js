import React from 'react';
import Layout from '../components/layout';
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
        <div>
          {this.props.stories.map(story => {
            return <p>{story.title}</p>;
          })}
        </div>
      </Layout>
    );
  }
}
