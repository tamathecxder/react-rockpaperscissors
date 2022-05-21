import React, { useState } from 'react'
import Modal from './Modal'

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> |
          Coded by <a style={{ textDecoration: "none", color: "grey" }} href="https://github.com/deezycxde" target="_blank">Yudistira Eka Pratama</a> |
          Project Repo: <a style={{ textDecoration: "none", color: "lightskyblue" }} href="https://github.com/deezycxde/react-rockpaperscissors" target="_blank">To This Github Repo's</a> 
        </div>
        <button className='rules' onClick={toggle}>Rules</button>
      </footer>
      {
        modal ? <Modal toggle={toggle} /> : null
      }
    </>
  )
}

export default Footer;