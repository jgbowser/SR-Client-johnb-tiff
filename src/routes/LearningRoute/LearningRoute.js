import React, { Component } from 'react'
import LanguageApiService from '../../services/language-service'
import LearningStyles from './LearningRoute.module.css'

class LearningRoute extends Component {
  state = {
    nextWord: '',
    wordCorrectCount: '',
    wordIncorrectCount: '',
    totalScore: '',
    hasError: null
  }

  setStartWord = (data) => {
    this.setState({ 
      nextWord: data.nextWord, 
      wordCorrectCount: data.wordCorrectCount, 
      wordIncorrectCount: data.wordIncorrectCount, 
      totalScore: data.totalScore
    })
  }

  async componentDidMount() {
    try { let wordData = await LanguageApiService.getStartWord()
      this.setStartWord(wordData)
    }
    catch (error) {
      this.setState({hasError: error})
    }
  }

  render() {

    const { nextWord, wordCorrectCount, wordIncorrectCount, totalScore } = this.state
    return (
      <section>
        <h2>Translate the word:</h2>
        <span className={LearningStyles.word}>{nextWord}</span>
        <p className={LearningStyles.total}>Your total score is: {totalScore}</p>
        <form>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
            <input className={LearningStyles.textBox} type='text' id='learn-guess-input' required></input>
            <button className={LearningStyles.submitBtn} type='submit'>Submit your answer</button>
        </form>
        <div className={LearningStyles.wordScore}>
          <p>You have answered this word correctly {wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
        </div>
      </section>
    );
  }
}

export default LearningRoute
