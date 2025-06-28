import Bankingcard from './BankingCard';
import { FaBolt, FaPiggyBank, FaMobileAlt, FaChartBar, FaCreditCard, FaWifi } from 'react-icons/fa';
import BalanceImg from '../../assets/current-balance-1.svg'
const cards =[
  {
    icon: <FaBolt />,
    title: 'Instant transactions',
    description:'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
  },
  {
    icon: <FaPiggyBank />,
    title: 'Saving accounts',
    description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile banking',
    description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
  },
  {
    icon: <FaChartBar />,
    title: 'Advanced statistics',
    description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
  },
  {
    icon: <FaCreditCard />,
    title: 'Virtual cards',
    description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
  },
  {
    icon: <FaWifi />,
    title: 'Contactless payments',
    description: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.',
  },
];

const BankingcardComponent = () => {
  return (
    <div className="bankingCardComponents">
      <div className='cardContent'>
      <div className="heading">
      <p>One app.<br />One banking.</p>
      </div>
    <div className="cardComponent">
      {cards.map((card, index) => (
        <Bankingcard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />  

      ))}
    </div>
   </div>


    <div className="image">
      <img src={BalanceImg} alt="" />
    </div>
    </div>
  )
}

export default BankingcardComponent