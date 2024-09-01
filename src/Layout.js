import React from 'react'
import { Route, Routes} from "react-router-dom";
import Navbar from './components/(navbar)/Navbar'
import HomePage from './(home)/HomePage';
import { BMI, Calculator, Fibonacci, LeapYear, Life, ToDoList } from './(calculation)';
import { Dice, Drum, RockPaperScissors } from './(games)';


const Layout = () => {
  return (
    <section>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rock-Paper-scissors" element={<RockPaperScissors/>} />
        <Route path="/life-calculation" element={<Life/>} />
        <Route path="/bmi-calculation" element={<BMI/>} />
        <Route path="/leap-year-calculation" element={<LeapYear/>} />
        <Route path="/fibonacci-generator" element={<Fibonacci/>} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/dice" element={<Dice/>} />
        <Route path="/drum-kit" element={<Drum/>} />
        <Route path="/to-do-list" element={<ToDoList/>} />
      </Routes>
    </section>
  );
}

export default Layout