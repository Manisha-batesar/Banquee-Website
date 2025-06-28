import  './Notifications.css'
import notificationImage from '../../assets/messages.png'

function Notifications() {
  return (
    <div className='Notificationscontainer'>
      <div className="leftContent">
        <h4 className='notification'>notifivations</h4>
         <h6>Stay notified</h6>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <div className="listContents">
          <div className="listContent"> Malesuada Ipsum</div>
          <div className="listContent"> Vestibulum</div>
          <div className="listContent"> Parturient Lorem</div>
        </div>
        <button className='compareCardBtn'>Compare cards →</button>
      </div>

    <div className="rightContent">
   <img src={notificationImage} alt="" />
    </div>

    </div>
  )
}

export default Notifications