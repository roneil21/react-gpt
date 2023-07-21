import React from 'react'
import "./footer.css"
import gptLogo from "../../assets/gpt.png"

const Footer = () => {
  return (
    <div className='gpt4__footer section__padding'>
      <div className='gpt4__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt4__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt4__footer-links'>
        <div className='gpt4__footer-links_logo'>
          <img src={gptLogo} alt='logo'/>
        </div>
        <div className='gpt4__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt4__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt4__footer-links_div'>
          <h4>Get in touch</h4>
          <p>ABC 123 City</p>
          <p>+1234564789</p>
          <p>roneilalgara@gmail.com</p>
        </div>
      </div>

      <div className='gpt4__footer-copyright'>
        <p>© 2021 GPT-4. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer