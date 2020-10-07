import React, { Component } from 'react'
import LanguageApiService from '../../services/language-service'

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
      console.log(wordData)
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
        <span>{nextWord}</span>
        <p>Your total score is: {totalScore}</p>
        <form>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
            <input type='text' htmlFor='learn-guess-input' required></input>
            <button type='submit'>Submit</button>
        </form>
        <p>You have answered this word correctly {wordCorrectCount} times.</p>
        <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
      </section>
    );
  }
}

export default LearningRoute
