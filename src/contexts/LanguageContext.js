import React from 'react'


const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  setLanguageAndWords: () => {},
  //additional functions that need to be passed
})

export default LanguageContext
