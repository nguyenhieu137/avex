import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Project from "./components/Project/Project";
import ProjectDetail from './components/Project-details/ProjectDetail';
import Contact from "./components/Contact/Contact";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product" element={<Home></Home>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path=":name" element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/new-products" element={<Home></Home>}></Route>
        <Route path="/featured-products" element={<Home></Home>}></Route>
        <Route path="/hot-products" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
