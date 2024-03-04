import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import ResultInfo from '../../components/ResultInfo/ResultInfo'
import PreviousTestResults from '../../components/PreviousTestResults'
import './style.scss'

const Home = () => {
  return (
    <div className="_homepage-container">
        <NavBar />
        <div className="_hp-body">
            <ResultInfo />
            <PreviousTestResults />
        </div>
        <Footer />
    </div>
  )
}

export default Home