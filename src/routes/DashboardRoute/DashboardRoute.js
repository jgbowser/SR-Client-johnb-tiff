import React, { Component } from 'react'
import ApiContext from '../../contexts/UserContext'

class DashboardRoute extends Component {
  static contextType = ApiContext;

  render() {
    const { user={}, error=null } = this.context
    return (
      <section>
        <h2>Spanish</h2>
        <h3>Start Practicing</h3>
        <button>Start</button>
        <h4>Words to practice...</h4>
          <ul>
            <li>bruja</li>
            <li>bruja</li>
            <li>bruja</li>
            <li>bruja</li>
            <li>bruja</li>
            <li>bruja</li>
            <li>bruja</li>
            <li>bruja</li>
          </ul>
          <h4>Word || Correct Answer Count || Incorrect Answer Count</h4>
            <ul>
            <li>bruja || 1 || 0</li>
            <li>bruja || 1 || 0</li>
            <li>bruja || 1 || 0</li>
            <li>bruja || 1 || 0</li>
            <li>bruja || 1 || 0</li>
            <li>bruja || 1 || 0</li>
            <li>bruja || 1 || 0</li>
            <li>bruja || 1 || 0</li>
            </ul>
          <h4>Total Correct</h4>
            <p>8</p>
      </section>
    );
  }
}

export default DashboardRoute
