import React, { useEffect } from 'react'
import "./Life.css"
import Form from '../../components/(form)/Form';
import interactive from "./main.js"

// input array
const inputs = [
  {
    name: "age",
    type: "number",
    title: "Age",
  },
  {
    name: "ageReach",
    type: "number",
    title: "Age Reach",
  },
];
const Life = () => {
 useEffect(() => {
   const cleanup = interactive();

   // Cleanup the event listeners
   return () => {
     cleanup();
   };

 }, [])
  return (
    <section className="section_container">
      <h1>Life Calculation</h1>

      <div className="text_container">
        <h3>
          To begin, Enter your Age and the age that you want to reach to see how
          many days remaining
        </h3>
      </div>
      

      <Form inputs={inputs} buttonTitle="Calculate"/>
      <div className="displayMessage">
      </div>
    </section>
  );
}

export default Life