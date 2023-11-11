import React from 'react'
import './scss/_footer.scss'

export default function Footer() {
  return (
    <div className='footer-section'>
    <div className='column'>
    <h3 className='title-footer'><b>Follow Me</b></h3>
            <a href='https://github.com/JagdishAneshwar' className='footer-link' id="github">github</a><br/>
            <a href='https://www.linkedin.com/in/jagdish-aneshwar/' className='footer-link' id="github">LinkedIn</a><br/>
            <a href='https://www.linkedin.com/in/jagdish-aneshwar/' className='footer-link' id="github">Medium</a>
    </div>
    <div className='column'>
    <h3 className='title-footer'><b>Policy</b></h3>
            <a href='https://github.com/JagdishAneshwar' className='footer-link' id="github">Data Privacy</a><br/>
            <a href='https://www.linkedin.com/in/jagdish-aneshwar/' className='footer-link' id="github">About Website</a>
    </div>
    <div className='column'>
    <h3 className='title-footer'><b>Contact Info</b></h3>
            <a href='https://github.com/JagdishAneshwar' className='footer-link' id="github">+91 892-839-3524</a><br/>
            <a href='https://www.linkedin.com/in/jagdish-aneshwar/' className='footer-link' id="github">aneshwarjagdish@gmail.com</a>
    </div>
    </div>
    
  )
}
