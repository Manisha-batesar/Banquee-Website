import './Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="footerlogo">
        <h2>banquee.</h2>
      </div>

      <div className="footerContent">

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Blog</h4>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Crypto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Webflow</h4>
          <ul>
            <li><a href="#">Styleguide</a></li>
            <li><a href="#">Licensing</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer