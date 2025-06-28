import './SavingAccount.css'
import frame1 from '../../assets/frame-1.svg';
import frame2 from '../../assets/frame-2.svg';
import frame3 from '../../assets/frame-3.svg';
import frame4 from '../../assets/frame-4.svg';
import frame5 from '../../assets/frame-5.svg';

const frames = [
  { src: frame1, name: "New Laptop", price: "$400" },
  { src: frame2, name: "New Bike", price: "$250" },
  { src: frame3, name: "Holiday Trip", price: "$1,000" },
  { src: frame4, name: "Camera", price: "$550" },
  { src: frame5, name: "More Features", price: "$???" },
];

const SavingAccount = () => {
  return (
    <div className='SavingAccountContainer'>
      <p>Saving Accounts</p>
      <h2>Organize your money the right way</h2>

      <div className="parContent">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>All features →</button> 
      </div>




         <div className="frameImage">
         {frames.map ((frame,index)=>(
          <div className="image-box" key={index}>
          <img src={frame.src} alt={frame.name} />
         <p className="name">{frame.name}</p>
         <p className="price">{frame.price}</p>

          </div>
         ))}
      </div>


    </div>
  )
}

export default SavingAccount