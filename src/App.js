import "./App.css";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Coupon from "./pages/Coupon";
import Customer from "./pages/Customer";
import Orders from "./pages/Orders";
import Package from "./pages/Package";
import Seettings from "./pages/Seettings";
import User from "./pages/User";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Router>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index  element={<Home />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="customer" element={<Customer />} />
          <Route path="orders" element={<Orders />} />
          <Route path="package" element={<Package />} />
          <Route path="seettings" element={<Seettings />} />
          <Route path="user" element={<User />} />
          </Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
