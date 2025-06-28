
const HeaderDesktop = () => {
  return (
<div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="logo">banquee.</h1>
     
      <nav>
        <ul className="items">
          <li><a href="#features">Features</a></li>
          <li><a href="#compare" >Compare</a></li>
          <li><a href="#support" >Support</a></li>
           <li><a href="#blog" >Blog</a></li>
        </ul>
      </nav>

      <div className='buttons'>
        <button type='button' className='login-btn'>Login</button>
        <button type='button' className='open-btn'>Open Account</button>
      </div>
       </header>
    </div>
  )
}

export default HeaderDesktop