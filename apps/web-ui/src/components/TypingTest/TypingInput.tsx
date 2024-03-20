import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButtonV2 from '@components/common/IconButton/IconButtonV2'
import { typingTestTimeOptions } from '@constants/constants';

type Props = {
  typedText: string
  handleInputChange: (text: string) => void
}

const TypingInput = ({typedText, handleInputChange}: Props) => {

  const [selectedTimeInSeconds, setSelectedTimeInSeconds] = React.useState(30)

  const handleSelectedTimeChange = (e) => {
    setSelectedTimeInSeconds(parseInt(e.target.value, 10))
  }

  const handleOnRefreshClick = () => {
    console.log('handleOnRefreshClick');
  }

  return (
    <div className="_typing-input-container">
      <div className="_typing-input">
        <input
          type="text"
          placeholder="Start typing here..."
          value={typedText}
          onChange={e => handleInputChange(e.target.value)}
        />
      </div>
      <div className="_typing-input-timer">
        <select value={selectedTimeInSeconds} onChange={handleSelectedTimeChange}>
            {typingTestTimeOptions.map((time, index) => (
              <option key={index} value={time}>{time} seconds</option>
            ))}
          </select>
      </div>
      <div className="_typing-input-refresh">
        <IconButtonV2 onClick={handleOnRefreshClick}>
          <RefreshIcon />
        </IconButtonV2>
      </div>
    </div>
  )
}

export default TypingInput