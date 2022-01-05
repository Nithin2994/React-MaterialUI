import React from 'react'
import './App.css';
import MenuComponent from './components/MenuComponent';
import Home from './components/home/HomeComponent';
import Footer from './components/footer/Footer';
import LoginComponent from './components/login/LoginComponent';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ForgotLoginComponent from './components/login/ForgotLoginComponent';
import ContactusComponent from './components/contact/ContactusComponent';
import CareersComponent from './components/careers/CareersComponent';
import AboutUsComponent from './components/about/AboutUsComponent';
import AppointmentComponent from './components/appointment/AppointmentComponent';
import SingleAppointmentComponent from './components/appointment/SingleAppointmentComponent';
import BlogCategoryComponent from './components/blog/BlogCategoryComponent';
import BlogSingleComponent from './components/blog/BlogSingleComponent';
import TermsConditionComponent from './components/TermsConditionComponent';

function App() {
  return (
    <React.Fragment>
      <Router >
      <Routes >
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/forgot" element={<ForgotLoginComponent />}></Route>
        <Route path="/contactus" element={<ContactusComponent />}></Route>
        <Route path="/careers" element={<CareersComponent />}></Route>
        <Route path="/about" element={<AboutUsComponent />}></Route>
        <Route path="/appointment" element={<AppointmentComponent />}></Route>
        <Route path="/single-appointment" element={<SingleAppointmentComponent />}></Route>
        <Route path="/blog-category" element={<BlogCategoryComponent />}></Route>
        <Route path="/blog-single" element={<BlogSingleComponent />}></Route>
        <Route path="/termsnconditions" element={<TermsConditionComponent />}></Route>
        <Route path="/" element={<React.Fragment><MenuComponent /><Home /></React.Fragment>}></Route>
      </Routes>
      </Router>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
