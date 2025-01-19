import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import PrivateComponent from './components/PrivateComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product Listing Company</h1>}></Route>
            <Route path="/add" element={<AddProduct />}></Route>
            <Route path="/update" element={<h1>Update Product Details</h1>}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
            <Route path="/profile" element={<h1>Company Profile</h1>}></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
