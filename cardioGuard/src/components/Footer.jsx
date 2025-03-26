import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-column-title">© CardioGuard</h3>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Integrations</h3>
              <ul className="footer-column-links">
                <li>
                  <a href="/python-sdk">Python SDK</a>
                </li>
                <li>
                  <a href="/js-sdk">JS/TS SDK</a>
                </li>
                <li>
                  <a href="/openai-sdk">Anthropic</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Resources</h3>
              <ul className="footer-column-links">
                <li>
                  <a href="/docs">Documentation</a>
                </li>
                <li>
                  <a href="/interactive-demo">Interactive Demo</a>
                </li>
                <li>
                  <a href="/video-demo">Video Demo (10 min)</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">About</h3>
              <ul className="footer-column-links">
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Legal</h3>
              <ul className="footer-column-links">
                <li>
                  <a href="/security">Security</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2025-2025 CardioGuard Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
