
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeNavbar from './HomeComponent/HomeNavbar';
import AdminLogin from './AdminComponent/AdminLogin';
import AdminRegister from './AdminComponent/AdminRegister';
import AdminNavBar from './AdminComponent/AdminNavBar';
import CustomerRegister from './CustomerComponent/CustomerRegister';
import CustomerLogin from './CustomerComponent/CustomerLogin';
import CustomerHome from './CustomerComponent/CustomerHome';
import AddItem from './AdminComponent/AddProduct';
import Menu from './CustomerComponent/Menu';
import Items from './AdminComponent/Items';
import UpdateItem from './AdminComponent/UpdateItem';
import Cart from './CustomerComponent/Cart';
import Orders from './CustomerComponent/OrdersPage';
import AllOrders from './AdminComponent/AllOrders';
import Profile from './AdminComponent/Profile';
import UpdateAdmin from './AdminComponent/UpdateAdmin';

function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeNavbar/>}></Route>
      <Route path='/admin' element={<AdminLogin/>}></Route>
      <Route path='/admin/additem' element={<AddItem/>}></Route>
      <Route path='/admin/items' element={<Items/>}></Route>
      <Route path='/update/item/:id' element={<UpdateItem/>}></Route>
      <Route path='/adminregister' element={<AdminRegister/>}></Route>
      <Route path="/admin/profile/:id" element={<Profile />} />
      <Route path="/update/admin/:id" element={<UpdateAdmin />} />
      <Route path='/adminhome' element={<AdminNavBar />}></Route>
      <Route path='/customer/register' element ={<CustomerRegister/>}></Route>
      <Route path='/customer/home' element ={<CustomerHome/>}></Route>
      <Route path='/menu' element ={<Menu/>}></Route>
      <Route path='/cart' element ={<Cart/>}></Route>
      <Route path='/admin/orders' element ={<AllOrders />}></Route>
      <Route path='/customer/orders' element ={<Orders/>}></Route>
      <Route path='/customer/login' element ={<CustomerLogin/>}></Route>
      <Route path="/admin/profile" element={<Profile />} />


    </Routes>
    </BrowserRouter>


    </>

  );
}

export default App;
