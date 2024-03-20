import React from 'react'
import './style.scss'

type Props = {
  currentWordIndex: number,
  typedText: string,
  textToBeTyped: string
}

const TypingTextDisplay = ({currentWordIndex, typedText, textToBeTyped}: Props) => {

  const words = textToBeTyped.split(' ')

  const getWordStyle = (index: number) => {
    // if (index < currentWordIndex) {
    //   return 'correct'
    // } else if (index === currentWordIndex) {
    //   return typedText === words[index] ? 'highlight' : 'highlight-wrong'
    // } else {
    //   return 'wrong'
    // }
    if (index === currentWordIndex) {
        if(typedText.length === words[index].length) {
            if(typedText === words[index]) {
                return 'correct'
            } else {
                return 'wrong'
            }
        } else {
            return 'highlight'
        }
    }
  }
  console.log('render')
  

  return (
    <div className="_typing-text-display-container">
      {words.map((word, index) => {
        return (
          <span key={`${index}-${word}`} className={`_typing-text-display-word ${getWordStyle(index)}`}>
            {word}
          </span>
        )
      })}
    </div>
  )
}

export default TypingTextDisplay