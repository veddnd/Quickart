import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-sections">
            <div className="footer-column">
              <h3>Section</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Section</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Section</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="newsletter">
              <h3>Subscribe to our newsletter</h3>
              <p>Monthly digest of what's new and exciting from us.</p>
              <form>
                <input type="email" placeholder="Email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
        .footer {
          background-color:rgb(255, 255, 255);
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-sections {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .footer-column {
          flex: 1;
          margin: 10px;
        }
        .footer-column h3 {
          font-size: 16px;
          color:rgb(0, 0, 0);
          margin-bottom: 15px;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
        }
        .footer-column ul li {
          margin-bottom: 10px;
        }
        .footer-column ul li a {
          text-decoration: none;
          color:rgb(96, 96, 104);
          transition: color 0.3s;
        }
        .footer-column ul li a:hover {
          color: #500066 !important;
        }
        .newsletter {
          flex: 2;
          margin: 10px;
        }
        .newsletter h3 {
          font-size: 16px;
          color: #343a40;
          margin-bottom: 10px;
        }
        .newsletter p {
          font-size: 14px;
          color: #6c757d;
          margin-bottom: 15px;
        }
        .newsletter form {
          display: flex;
          align-items: center;
        }
        .newsletter input[type="email"] {
          padding: 10px;
          border: 1px solidrgb(112, 22, 150);
          border-radius: 4px;
          flex: 1;
          margin-right: 10px;
        }
        .newsletter button {
          padding: 10px 20px;
          border: none;
          background-color:#500066;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }
        .newsletter button:hover {
          background-color:rgb(112, 22, 150);
        }
        .footer-bottom {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .footer-bottom p {
          font-size: 14px;
          color: #6c757d;
        }
        .social-icons a {
          text-decoration: none;
          margin: 0 10px;
          color: #6c757d;
          font-size: 18px;
          transition: color 0.3s;
        }
        .social-icons a:hover {
          color: #007bff;
        }
      `}</style>
    </>
  );
};

export default Footer;
