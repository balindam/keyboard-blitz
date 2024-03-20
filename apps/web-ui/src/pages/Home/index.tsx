import React from 'react'
import NavBar from '@components/NavBar/NavBar'
import Footer from '@components/Footer'
import ResultInfo from '@components/ResultInfo/ResultInfo'
import PreviousTestResults from '@components/PreviousTestResults'
import './style.scss'
import TypingTest from '@components/TypingTest/TypingTest'

const Home = () => {
  return (
    <div className="_homepage-container">
        <NavBar />
        <div className="_hp-body">
            <TypingTest />
            <ResultInfo />
            <PreviousTestResults />
        </div>
        <Footer />
    </div>
  )
}

export default Home