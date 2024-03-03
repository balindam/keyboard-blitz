import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import ResultInfo from '../../components/ResultInfo/ResultInfo'

const Home = () => {
  return (
    <div className="_homepage-container">
        <NavBar />
        <div className="_hp-body">
            <ResultInfo />
        </div>
        <Footer />
    </div>
  )
}

export default Home