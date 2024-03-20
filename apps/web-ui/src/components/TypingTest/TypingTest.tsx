import React from 'react'
import TypingTextDisplay from './TypingTextDisplay'
import TypingInput from './TypingInput'

type Props = {}

const TypingTest = (props: Props) => {

  const [typedText, setTypedText] = React.useState('');
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  const textToBeTyped = `Lorem ipsum dolor sit amet, can you do this Sit, ipsa neque. Numquam tenetur in error ipsum quis, voluptatem inventore corporis praesentium harum, autem necessitatibus aut explicabo soluta ut earum nihil vero qui quasi! Officia!
  Eaque aspernatur optio ut nostrum, unde a dignissimos fugiat inventore temporibus harum aut quod dolor enim eligendi explicabo! Corrupti magnam placeat sit obcaecati laudantium quisquam quae amet nostrum quo! Omnis.`

  /*
    CURRENT WORD
    highlight -> for the current word
    highlight-wrong -> for the wrong highlighted word

    PAST WORDS
    correct -> for the correct word
    wrong -> for the wrong word
  */

    const handleInputChange = (text: string) => {
      setTypedText(text)
      const words = textToBeTyped.split(' ')
      const currentWord = words[currentWordIndex]
      if (text.endsWith(' ')) {
        if (text.trim() === currentWord) {
          setCurrentWordIndex(currentWordIndex + 1)
          setTypedText('')
        }
      }
    }

  return (
    <div className="_typing-test-container">
        <TypingTextDisplay textToBeTyped={textToBeTyped} 
          currentWordIndex={currentWordIndex}
          typedText={typedText}
        />
        <TypingInput handleInputChange={handleInputChange} typedText={typedText}/>
    </div>
  )
}

export default TypingTest