import React, { Component } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import {Link} from 'react-router-dom'
>>>>>>> 1118d95370ec76157b453559e83da02cbf748926
import LanguageApiService from '../../services/language-service'
import LanguageContext from '../../contexts/LanguageContext'
import WordListItem from '../../components/WordListItem/WordListItem'

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
    const wordList = words.map(word =>  <WordListItem word={word}/> )
    return (
      <section>
        <h2>{language.name}</h2>
        <Link to='/learn'>Start practicing</Link>
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
