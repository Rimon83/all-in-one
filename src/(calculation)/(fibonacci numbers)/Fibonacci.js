import React, { useEffect } from 'react'
import "./Fibonacci.css"
import Form from '../../components/(form)/Form';
import interactive from "./main"

const inputs = [
 {
  name: "sequence",
  type: "number",
  title: "Sequence"
 }
]

const Fibonacci = () => {
 useEffect(() => {
   const cleanup = interactive();

   // Cleanup the event listeners
   return () => {
     cleanup();
   };
 }, []);
  return (
    <section className="section_container">
      <h1>Fibonacci Generator</h1>
      <div className="text_container">
        <h3>
          The Fibonacci sequence is a sequence in which each number is the sum
          of the two preceding ones.
        </h3>
      </div>
      <Form inputs={inputs} buttonTitle="Generate" />
      <div className="displayMessage"></div>
    </section>
  );
}

export default Fibonacci