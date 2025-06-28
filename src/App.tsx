import './App.css'
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import BankingCardComponent from './components/BankingCard/BankingcardComponent';
import MoneyTransfer from './components/MoneyTransfer/MoneyTransfer';
import SavingAccount from './components/SavingAccount/SavingAccount';
import Notifications from './components/Notifications/Notifications';
import AllTolls from './components/AllTolls/AllTolls';
import BanqueeCard from './components/BanqueeCard/BanqueeCard';
import Testimonials from './components/Testimonials/Testimonials';
import OneApp from './components/OneApp/OneApp';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
   <Header />
   < Hero  />
   <BankingCardComponent />
   <MoneyTransfer />
   <SavingAccount />
    <Notifications />
      <AllTolls />
    <BanqueeCard />
    <Testimonials />
    <OneApp />
    <Blog />
    <Footer />
   </>
  )
}

export default App
