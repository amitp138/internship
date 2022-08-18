import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import coupon from '../Dazzie Icons/coupon.svg';
import customer from '../Dazzie Icons/customer.svg';
import dashboard from '../Dazzie Icons/dashboard.png';
import  orders from '../Dazzie Icons/orders.svg';
import Package from '../Dazzie Icons/Package.svg';
import Seettings from '../Dazzie Icons/seettings.svg';
import user from '../Dazzie Icons/user.svg';
import '../styles/Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="navigation">
      <nav className='links'>
        <ul>
          <li>
            <Link to='/' id='link'><img src={dashboard} alt="" /></Link>
          </li>
          <li>
          <Link to='/orders' id='link' ><img src={orders} alt="" /></Link>
          </li>
          <li>
          <Link to='/customer'id='link' ><img src={customer} alt="" /></Link>
          </li>
          <li>
          <Link to='/package' id='link'><img src={Package} alt="" /></Link>
          </li>
          <li>
          <Link to='/coupon' id='link'><img src={coupon} alt="" /></Link>
          </li>
          <li>
          <Link to='/user' id='link' ><img src={user} alt="" /></Link>
          </li> 
          <li className='setting'>
          <Link to='/seettings'  id='link'><img src={Seettings} alt="" /></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      </div>
      
    </div>
  )
}

export default Sidebar