import './BanqueeCard.css'
import cardsImage from '../..//assets/cards.png'
const BanqueeCard = () => {
  return (
    <div className='BanqueecardContainer'>
      <p>Account</p>
      <h3>Perfect card for your needs.</h3>
      <p>Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
      <img src={cardsImage} alt="cards" className='shakeImage'/>
      <div className='BanqueecardButtons'>
        <button className='button1'>Open Account</button>
        <button className='button2'>Compare Cards</button>
        </div>
    </div>
  )
}

export default BanqueeCard