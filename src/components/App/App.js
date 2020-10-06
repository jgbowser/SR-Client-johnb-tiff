import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import LearningRoute from '../../routes/LearningRoute/LearningRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import './App.css'

import LanguageContext from '../../contexts/LanguageContext'

export default class App extends Component {
  state = { 
    hasError: false,
    language: {},
    words: []
   }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  setLanguageAndWords = (data) => {
  //console.log(this.state)
  //console.log(data.language)
      this.setState({
        language: data.language,
        words: data.words
      })
  }

  render() {

    const langContext = {
      language: this.state.language,
      words: this.state.words,
      setLanguageAndWords: this.setLanguageAndWords
    }

    const { hasError } = this.state
    return (
      <LanguageContext.Provider value={langContext}>
        <div className='App'>
          <Header />
          <main>
            {hasError && (
              <p>There was an error! Oh no!</p>
            )}
            <Switch>
              <PrivateRoute
                exact
                path={'/'}
                component={DashboardRoute}
              />
              <PrivateRoute
                path={'/learn'}
                component={LearningRoute}
              />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationRoute}
              />
              <PublicOnlyRoute
                path={'/login'}
                component={LoginRoute}
              />
              <Route
                component={NotFoundRoute}
              />
            </Switch>
          </main>
        </div>
      </LanguageContext.Provider>
    );
  }
}
