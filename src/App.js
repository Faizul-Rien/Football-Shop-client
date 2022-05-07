import { Route, Routes } from 'react-router-dom';
import AddItem from './Components/AddItem/AddItem';
import Blog from './Components/Blogs/Blog';
// import './App.css';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import ManageItem from './Components/ManageItem/ManageItem';
import MyItem from './Components/MyItem/MyItem';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path ="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      <Route path="/manage" element={<ManageInventory></ManageInventory>}></Route>
      <Route path="/manageItem" element={<ManageItem></ManageItem>}></Route>
      <Route path="/myItem" element={<MyItem></MyItem>}></Route>
      <Route path="/add" element={<AddItem></AddItem>}></Route>
      <Route path="/blogs" element={<Blog></Blog>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
