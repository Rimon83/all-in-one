import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [calculationList, setCalculationList] = useState(false);
  const [gamesList, setGamesList] = useState(false);

  const handleCalculationList = () => {
    setGamesList(false);
    setCalculationList(!calculationList);
  };

  const handleGamesList = () => {
    setCalculationList(false);
    setGamesList(!gamesList);
  };

  const handleSingleLink = () => {
    setCalculationList(false);
    setGamesList(false);
  };

  //  useEffect(() => {
  //    const element = document.querySelector(".calculation_list");
  //    if (element) {
  //      if (calculationList || gamesList) {
  //        element.classList.add("move_down");
  //        element.classList.remove("move_up");
  //      } else {
  //        element.classList.add("move_up");
  //        element.classList.remove("move_down");
  //      }
  //    }
  //  }, [calculationList]);

  return (
    <>
      <section className="container">
        <div className="image__container">
          <img src="images/logo.png" alt="logo" width={100} />
        </div>
        <nav className="nav">
          <Link className="link" onClick={handleGamesList}>
            Games
            <IoIosArrowDown className={gamesList ? "rotate" : ""} />
          </Link>
          <Link className="link" onClick={handleCalculationList}>
            Calculation
            <IoIosArrowDown className={calculationList ? "rotate" : ""} />
          </Link>
        </nav>
      </section>

      {/* calculation list */}
      <div className={`drop_list ${calculationList ? "move_down" : "move_up"}`}>
        <div className="drop_list_one">
          <Link
            className="link"
            to="calculator"
            onClick={handleSingleLink}
          >
            Calculator
          </Link>
          <Link
            className="link"
            to="life-calculation"
            onClick={handleSingleLink}
          >
            Life Calculation
          </Link>
          <Link
            className="link"
            to="bmi-calculation"
            onClick={handleSingleLink}
          >
            BMI Calculation
          </Link>
          <Link
            className="link"
            to="leap-year-calculation"
            onClick={handleSingleLink}
          >
            Leap Year
          </Link>
          <Link
            className="link"
            to="fibonacci-generator"
            onClick={handleSingleLink}
          >
            Fibonacci Generator
          </Link>

          <Link
            className="link"
            to="to-do-list"
            onClick={handleSingleLink}
          >
            To Do List
          </Link>
          
          <Link className="link">Link 6</Link>
        </div>
        <div className="drop_list_one">
          <Link className="link">Link 7</Link>
          <Link className="link">Link 8</Link>
          <Link className="link">Link 9</Link>
          <Link className="link">Link 10</Link>
          <Link className="link">Link 11</Link>
          <Link className="link">Link 12</Link>
        </div>
        <div className="drop_list_one">
          <Link className="link">Link 13</Link>
          <Link className="link">Link 14</Link>
          <Link className="link">Link 15</Link>
          <Link className="link">Link 16</Link>
          <Link className="link">Link 17</Link>
          <Link className="link">Link 18</Link>
        </div>
      </div>

      {/* games list */}
      <div className={`drop_list ${gamesList ? "move_down" : "move_up"}`}>
        <div className="drop_list_one">
          <Link
            className="link"
            to="Rock-Paper-scissors"
            onClick={handleSingleLink}
          >
            Rock-Paper-scissors
          </Link>
          <Link
            className="link"
            to="dice"
            onClick={handleSingleLink}
          >
            Dice
          </Link>
          <Link
            className="link"
            to="drum-kit"
            onClick={handleSingleLink}
          >
            Drum Music
          </Link>
          <Link className="link" onClick={handleSingleLink}>
            Link 4
          </Link>
          <Link className="link" onClick={handleSingleLink}>
            Link 5
          </Link>
          <Link className="link" onClick={handleSingleLink}>
            Link 6
          </Link>
        </div>
        <div className="drop_list_one">
          <Link className="link">Link 7</Link>
          <Link className="link">Link 8</Link>
          <Link className="link">Link 9</Link>
          <Link className="link">Link 10</Link>
          <Link className="link">Link 11</Link>
          <Link className="link">Link 12</Link>
        </div>
        <div className="drop_list_one">
          <Link className="link">Link 13</Link>
          <Link className="link">Link 14</Link>
          <Link className="link">Link 15</Link>
          <Link className="link">Link 16</Link>
          <Link className="link">Link 17</Link>
          <Link className="link">Link 18</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
