import React, { Component } from 'react'
import LanguageApiService from '../../services/language-service'
import LanguageContext from '../../contexts/LanguageContext';

class DashboardRoute extends Component {

  static contextType = LanguageContext

  async componentDidMount() {
    try {
      const languageData = await LanguageApiService.getLanguageAndWords()
      this.context.setLanguageAndWords(languageData)
    } catch (error) {
      console.log(error)
    }
  }

  renderWordsList = (words) => {
    return words.map(word => 
       (
      <li key={word.id} className='word-to-study'>
              {word.translation} || {word.correct_count} || {word.incorrect_count}
            </li>
    ))
  }

  render() {
    
    const { language, words } = this.context
    const wordList = this.renderWordsList(words)
    return (
      <section>
        <h2>{language.name}</h2>
        <h3>Start Practicing</h3>
        <button>Start</button>
        <h3>Words to practice</h3>
        
        <ul>
         {wordList}
        </ul>
      
        <p>Total correct answers: {language.total_score}</p>
      </section>
    );
  }
}

export default DashboardRoute
