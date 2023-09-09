import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <div>
      <footer style={{padding:'10px'}}>
            <div className="footer-items">
            <div className="f-items">
                    <h1>&lt; AMT &gt;</h1>
                    <p style={{marginTop: '30px', fontSize: '1.2rem', opacity: '0.5'}}>© Copyright 2023. All Rights Reserved by AMT</p>
                </div>
                <div className="f-items" style={{fontSize:'1.6rem'}}>Our Team
                    <ul>
                        <li style={{fontSize:'1.2rem'}}><i className="fa-solid fa-user"></i> Mansi</li>
                        <li style={{fontSize:'1.2rem'}}><i className="fa-solid fa-user"></i> Tanishq</li>
                    </ul>
                </div>
                <div className="f-items" style={{fontSize:'1.6rem'}}>Connect Us
                    <ul>
                        <li style={{fontSize:'1.2rem'}}><a href="www.linkedin.com/in/mansi-sharma-aaa4b8229" target="_blank">Mansi's LInkedin</a></li>
                        <li style={{fontSize:'1.2rem'}}><a href="www.linkedin.com/in/tanishq-sadija-64b1bb24a" target="_blank">Tanishq's LInkedin</a></li>
                        <li style={{fontSize:'1.2rem'}}><a href="github.com/mansisharma31" target="_blank">Mansi's Github</a></li>
                        <li style={{fontSize:'1.2rem'}}><a href="https://github.com/Tani-ishq" target="_blank">Tanishq's Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
