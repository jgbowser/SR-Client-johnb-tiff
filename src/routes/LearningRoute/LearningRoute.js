import React, { Component } from 'react'

class LearningRoute extends Component {
  render() {
    return (
      <section>
        <h2>Translate the word:</h2>
        <span>bruja</span>
        <p>Your total score is: </p>
        <form>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
            <input type='text' htmlFor='learn-guess-input' required></input>
            <button type='submit'>Submit</button>
        </form>
        <p>You have answered this word correctly 0 times.</p>
        <p>You have answered this word incorrectly 0 times.</p>
      </section>
    );
  }
}

export default LearningRoute
