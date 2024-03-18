import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Header/NavigationBar';
import NavigationBar1 from './components/Header/NavigationBar1';
import Header from "./components/Header/Header";
import Home1 from "./components/Header/Home1";
import About from "./pages/Home/components/Testimonials/Testimonials";
import Contactt from "./components/Header/Contactt";
import Login from "./components/Header/CheckoutForm";
import LoginPage from './components/Footer/LoginPage';
import SignupPage from './components/Footer/SignupPage';
import Footer from "./components/Footer/Footer";
import PatientProfile from './components/Footer/PatientProfile';
import Home from "./pages/Home/Home";
import Homee1 from "./pages/Home/Homee1";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';
import Contact from './components/contact/contact';
import PaymentPage from './components/Header/PaymentPage';
function App() {
  return (
    <>
      <NavigationBar/>
      <Header />
      
      <main>
        <Routes>
          <Route path="/Home1" element={<Home />} />
          <Route path="/Testimonials" element={<About />} />
          <Route path="/Contactt" element={<Contactt/>} />
          <Route path="/PatientProfile" element={<PatientProfile/>} />
          <Route path="Homee1" element={<Homee1 />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/PaymentPage"element={<PaymentPage/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <br></br>
      <Connect />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
