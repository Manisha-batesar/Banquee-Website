import './BankingCard.css';
  interface BankingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BankingCard = ({ icon, title, description }: BankingCardProps) => {
  return (
     <div className="bankingCard">
        <div className="icon">
          {icon}
        </div>

        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
     </div>
  )
}

export default BankingCard