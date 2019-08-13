import React from 'react';
import PageList from '../components/pageList';
import { getNewPage } from '../services/api';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PageList api={getNewPage} />;
  }
}
