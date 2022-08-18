import React from 'react'
import '../styles/Header.css'
import {ReactComponent as NotificationBell} from "../Dazzie Icons/NotificationBell.svg"
const Header = () => {
  return (
   <div className="header">
    <div className="leftside">
    <div className="icon">

    </div>
    <h2>Dassie</h2>
    </div>
    <div className="rightside">
   <NotificationBell/>
    <div className="roundicon">

    </div>
    <div className="cashier">
    <h4>Sumanto</h4>
    <p>Cashier</p>
    </div>
    </div>
   </div>
  )
}

export default Header