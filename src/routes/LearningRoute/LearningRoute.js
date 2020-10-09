import React, { Component } from 'react'
import LanguageApiService from '../../services/language-service'
import LearningStyles from './LearningRoute.module.css'
import Feedback from '../../components/Feedback/Feedback'

class LearningRoute extends Component {
  state = {
    nextWord: '',
    previousWord: '',
    answer: '',
    wordCorrectCount: '',
    wordIncorrectCount: '',
    totalScore: '',
    isCorrect: false,
    hasError: null,
    guess: '',
    responseRecieved: false,
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

  async handleSubmit(e) {
    e.preventDefault()
      const res = await LanguageApiService.postGuess(this.state.guess)
      const prevWord = this.state.nextWord
      this.setState({
        responseRecieved: true,
        nextWord: res.nextWord,
        previousWord: prevWord,
        answer: res.answer,
        wordCorrectCount: res.wordCorrectCount,
        wordIncorrectCount: res.wordIncorrectCount,
        totalScore: res.totalScore,
        isCorrect: res.isCorrect,
      })
  }

  updateInput = (value) => {
    this.setState({guess: value})
  }

  nextWord = () => {
    this.setState({
      responseRecieved: false,
      guess: '',
    })
  }
  
  render() {

    const { 
      nextWord, 
      wordCorrectCount, 
      wordIncorrectCount, 
      totalScore, isCorrect, 
      responseRecieved, 
      answer, 
      previousWord, 
      guess  
    } = this.state
    return (
      <section className={LearningStyles.learningPage}>
        {responseRecieved ? <Feedback nextWord={this.nextWord} isCorrect={isCorrect} word={previousWord} answer={answer} totalScore={totalScore} guess={guess} /> : 
        (
        <>
          <h2>Translate the word:</h2>
          <span className={LearningStyles.word}>{nextWord}</span>
          <p className={LearningStyles.total}>Your total score is: {totalScore}</p>
          <form onSubmit={(e)=> this.handleSubmit(e)} className={LearningStyles.guessForm}>
            <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
              <input value={this.state.guess} onChange={(e)=> this.updateInput(e.target.value)} className={LearningStyles.textBox} type='text' id='learn-guess-input' required></input>
              <button className={LearningStyles.submitBtn} type='submit'>Submit your answer</button>
          </form>
          <div className={LearningStyles.wordScore}>
            <p>You have answered this word correctly {wordCorrectCount} times.</p>
            <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
          </div>
        </>
        )
        }
      </section>
    );
  }
}

export default LearningRoute
