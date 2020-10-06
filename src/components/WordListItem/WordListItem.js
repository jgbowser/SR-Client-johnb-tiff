import React from 'react'
import WordListStyles from './WordListItem.module.css'

export default function WordListItem(props) {

    const {original, incorrect_count, correct_count} = props.word

    return (
      <li className={WordListStyles.listItem}>
        <div className={WordListStyles.name}>
          <h4>{original}</h4>
        </div>
        <div className={WordListStyles.count}>
          <span> correct answer count: {correct_count} </span>
          <span> incorrect answer count: {incorrect_count} </span>
        </div>
      </li>
    )
}