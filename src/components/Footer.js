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
                        <li style={{fontSize:'1.2rem'}}><i className="fa-solid fa-user"></i> Manya</li>
                        <li style={{fontSize:'1.2rem'}}><i className="fa-solid fa-user"></i> Awanti</li>
                        <li style={{fontSize:'1.2rem'}}><i className="fa-solid fa-user"></i> Abhay</li>
                        <li style={{fontSize:'1.2rem'}}><i className="fa-solid fa-user"></i> Mansi</li>
                        <li style={{fontSize:'1.2rem'}}><i className="fa-solid fa-user"></i> Tanishq</li>
                    </ul>
                </div>
                <div className="f-items" style={{fontSize:'1.6rem'}}>Tech Stack
                    <ul>
                        <li style={{fontSize:'1.2rem'}}><a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank">ReactJs</a></li>
                        <li style={{fontSize:'1.2rem'}}><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a></li>
                        <li style={{fontSize:'1.2rem'}}><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
                        <li style={{fontSize:'1.2rem'}}><a href="https://nodejs.org/en" target="_blank">NodeJs</a></li>
                        <li style={{fontSize:'1.2rem'}}><a href="https://expressjs.com/" target="_blank">ExpressJs</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
