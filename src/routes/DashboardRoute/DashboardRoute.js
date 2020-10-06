import React, { Component } from 'react'
import ApiContext from '../../contexts/UserContext'
import LanguageApiService from '../../services/language-service'
import LanguageContext from '../../contexts/LanguageContext';

class DashboardRoute extends Component {

  static contextType = LanguageContext

  async componentDidMount() {
    try {
      const languageData = await LanguageApiService.getLanguageAndWords()
      await this.context.setLanguageAndWords(languageData)
    } catch(error) {
      //set error
    }
  }
  

  render() {
    
    const { language } = this.context
    return (
      <section>
        <h2>{language.name}</h2>   
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
