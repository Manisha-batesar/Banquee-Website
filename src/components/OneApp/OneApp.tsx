import './OneApp.css';
import OneAppImage from '../../assets/current-balance-2..svg'
import googleSore from '../../assets/Google Store.svg';
import appleStore from '../../assets/Apple Store.svg';
const OneApp = () => {
  return (
    <div className='OneAppcontainer'>
      <div className="AppContent">
     <h2>One app. </h2>
     <h2> One banking.</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

     <div className="transactionLists">
      <div className="transactionList">Instant transactions</div>
      <div className="transactionList">Payments worldwide</div>
      <div className="transactionList">Saving accounts</div>
      <div className="transactionList">100% mobile banking</div>
     </div>

       <div className="AppStore">
        <img src={googleSore} alt="Google Store" />
        <img src={appleStore} alt="Apple Store" />
       </div>

      </div>
      <div className="AppImage">
  <img src={OneAppImage} alt="" />
      </div>
    </div>
  )
}

export default OneApp