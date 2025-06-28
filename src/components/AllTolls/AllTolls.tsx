import './AllTolls.css';
import logo1 from '../../assets/logo-1.svg';
import logo2 from '../../assets/logo-2.svg';
import logo3 from '../../assets/logo-3.svg';
import logo4 from '../../assets/logo-4.svg';
import logo5 from '../../assets/logo-5.svg';
import logo6 from '../../assets/logo-6.svg';
import logo7 from '../../assets/logo-7.svg';
import logo8 from '../../assets/logo-8.svg';
import logo9 from '../../assets/logo-9.svg';
import logo10 from '../../assets/logo-10.svg';



const AllTolls = () => {
  return (
    <div className="AllTollsContainer">
      <div className="apps">
        <img src={logo1} alt="App-logo"  className='logo'/>
        <img src={logo2} alt="App-logo" className='logo'/>
        <img src={logo3} alt="App-logo" className='logo'/>
        <img src={logo4} alt="App-logo" className='logo'/>
        <img src={logo5} alt="App-logo" className='logo'/>
        <img src={logo6} alt="App-logo" className='logo'/>
        <img src={logo7} alt="App-logo" className='logo'/>
        <img src={logo8} alt="App-logo" className='logo'/>
        <img src={logo9} alt="App-logo" className='logo'/>
        <img src={logo10} alt="App-logo" className='logo'/>
      </div>

      <div className="tolls">
        
        <div className="tollsContent">
          <p>Tolls</p>
           <h3>Seemless integration</h3>
           <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div className="tollsverify">
        <div className="tollContent"> Malesuada Ipsum</div>
          <div className="tollContent"> Vestibulum</div>
          <div className="tollContent"> Parturient Lorem</div>
        </div>
      </div>
    </div>
  )
}

export default AllTolls