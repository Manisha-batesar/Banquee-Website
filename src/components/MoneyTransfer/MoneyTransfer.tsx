import './MoneyTransfer.css';
import moneyimage from '../../assets/money-transactions.png'
const MoneyTransfer = () => {
  return (
    <div className='moneyContainer'>
      <div className="leftContent">
        <h6>Send & receive <br />money instantly</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et.</p>
        <div className="MoneyItems">
            <div className="item"> Instant Transfer</div>
          <div className="item"> Payments worldwide</div>
          <div className="item"> Saving accounts</div>
        </div>
      </div>
      <div className="rightImage">
        <img src={moneyimage} alt="" />
      </div>
    </div>
  )
}

export default MoneyTransfer