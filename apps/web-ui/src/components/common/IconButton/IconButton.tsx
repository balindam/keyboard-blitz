import React from 'react'

type Props = {
    imgSRC: string
    altText: string
    handleClick: () => void
}

const IconButton = ({imgSRC, altText, handleClick}: Props) => {
  return (
    <div onClick={handleClick}>
        <img src={imgSRC} alt={altText} />
    </div>
  )
}

export default IconButton