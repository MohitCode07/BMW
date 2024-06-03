import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <style>
        {`
          .footer {
            background-color: #808080;
            color: #fff; /* Updated to white */
            padding: 48px;
          }
          .footer-container {
            max-width: 1140px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          }
          .grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
            margin-bottom: 32px;
          }
          h2 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 16px;
            color: #fff; /* Updated to white */
          }
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            color: #fff; /* Updated to white */
          }
          li {
            margin-bottom: 8px;
          }
          a {
            color: #fff; /* Updated to white */
            text-decoration: none;
          }
          p {
            font-size: 16px;
            color: #fff; /* Updated to white */
          }
          .flex {
            display: flex;
            align-items: center;
          }
          .footer-space-x-6 > * + * {
            margin-left: 24px;
          }
          .icon {
            color: #fff; /* Updated to white */
          }
        `}
      </style>
      <div className="footer">
        <div className="footer-container">
          <div className="grid">
            <div style={{color:"#fff"}}>
              <h2>Contact</h2>
              <ul style={{color:"#fff"}}>
                <li><a href="#">Find your dealer</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Brand Center</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h2>Experience BMW</h2>
              <ul>
                <li><a href="#">BMW Group</a></li>
                <li><a href="#">BMW Motorrad</a></li>
                <li><a href="#">BMW Excellence Club</a></li>
                <li><a href="#">Charging Network</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2>Legal</h2>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Licensing</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div>
              <h2>Download</h2>
              <ul>
                <li><a href="#">iOS</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">Windows</a></li>
                <li><a href="#">MacOS</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <p>&copy; BMW AG 2024</p>
          <div className="flex footer-space-x-6" style={{ marginLeft: '20px' }}>
            <a href="#"><BsFacebook className="icon" /></a>
            <a href="#"><BsInstagram className="icon" /></a>
            <a href="#"><BsTwitter className="icon" /></a>
            <a href="#"><BsGithub className="icon" /></a>
            <a href="#"><BsDribbble className="icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
