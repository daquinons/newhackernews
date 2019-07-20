import React from 'react'
import Link from 'next/link'
import { getFrontpage } from '../services/api';

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await getFrontpage();
    const json = await res.json()
    return { stories: json }
  }

  render () {
    return (
      <div>
        <h1>Hacker News</h1>
        {this.props.stories.map(story => {
          return <p>{story.title}</p>
        })}
      </div>
    )
  }
}
