import React from 'react'

export default function WordListItem(props) {

    const {original, incorrect_count, correct_count} = props.word

    return (
      <li>
        <div>
          <h4>{original}</h4>
        </div>
        <div>
          <span> correct answer count: {correct_count} </span>
          <span> incorrect answer count: {incorrect_count} </span>
        </div>
      </li>
    )
}