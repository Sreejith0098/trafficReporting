import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import AdminDashboard from '../pages/admindashboard/AdminDashboard';
import AdminLogin from '../pages/adminlogin/AdminLogin';
import UserDashboard from '../pages/userdashboard/UserDashboard';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Help from '../pages/help/Help';
import Privacy from '../pages/privacy/Privacy';
import Layout from '../components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
