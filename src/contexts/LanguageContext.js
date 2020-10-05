import React, { Component } from 'react'
import LanguageApiContext from '../services/language-service'

export default LanguageContext

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    const state = {}
  }
   render() {
    const value = {
        
    }
    return (
      <LanguageContext.Provider value={value}>
      {this.props.children}
      </LanguageContext.Provider>
    )
  }
}