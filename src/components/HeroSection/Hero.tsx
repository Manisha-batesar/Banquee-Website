import heroImage from '../../assets/hero-image.png'
import './Hero.css';
function Hero() {
  return (
    <div className='heroContainer'>
      <div className="left">
        <h6>Banking <br></br>starts here.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br></br> elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className="features-container">
          <div className="feature-item"> Instant Transfer</div>
          <div className="feature-item"> Payments worldwide</div>
          <div className="feature-item"> Saving accounts</div>
          <div className="feature-item">100% mobile banking</div>
        </div>
        <button className='heroButton'>Open Account</button>
        <button className='heroButton2'>Compare Cards →</button>
      </div>
      <div className="right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero