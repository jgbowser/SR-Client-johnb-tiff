import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LanguageApiService from '../../services/language-service'
import LanguageContext from '../../contexts/LanguageContext'
import WordListItem from '../../components/WordListItem/WordListItem'
import dashStyles from './DashboardRoute.module.css'

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

  render() {

    const { language, words } = this.context
    const wordList = words.map(word => <WordListItem key={word.id} word={word} />)
    return (
      <section className={dashStyles.dashboard}>
        <h2>{language.name}</h2>
        <h3>Words to practice</h3>

        <ul>
          {wordList}
        </ul>

        <p>Total correct answers: {language.total_score}</p>
        <Link to='/learn' className={dashStyles.link}>Start practicing</Link>
      </section>
    );
  }
}

export default DashboardRoute
