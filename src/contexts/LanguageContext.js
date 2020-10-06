import React, { Component } from 'react'
import LanguageApiService from '../services/language-service'

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  setLanguageAndWords: () => {},
  //additional functions that need to be passed
})

export default LanguageContext

// export class LanguageProvider extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       language: {},
//       words: [],
//       error: null,
//     }
//   }



//   setLanguageAndWords(data) {
//     console.log(this.state)
//     console.log(data.language)
//         this.setState({
//           language: data.language,
//           words: data.words
//         })
//   }


//    render() {
//     const value = {
//       language: this.state.language,
//       words: this.state.words,
//       error: this.state.error,
//       setLanguageAndWords: this.setLanguageAndWords
//     }

//     return (
//       <LanguageContext.Provider value={value}>
//       {this.props.children}
//       </LanguageContext.Provider>
//     )
//   }
// }