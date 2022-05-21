import React from 'react'
import { Link } from 'react-router-dom'
import Triangle from '../images/bg-triangle.svg'

const Play = ({setMyChoice}) => {
  // method ketika kita mengklik salah satu pilihan dan juga menset data apa yang telah kita pilih
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  }

  return (
    <div className='play'>
      <div className="triangle">
        <img src={Triangle} alt="triange" />
      </div>
      <div className="items">
        <Link to="/game">
          <div data-id="paper" onClick={setChoice} className="icon icon--paper"></div>
        </Link>
        <Link to="/game">
          <div data-id="rock" onClick={setChoice} className="icon icon--rock"></div>
        </Link>
        <Link to="/game">
          <div data-id="scissors" onClick={setChoice} className="icon icon--scissors"></div>
        </Link>
      </div>
    </div>
  )
}

export default Play;