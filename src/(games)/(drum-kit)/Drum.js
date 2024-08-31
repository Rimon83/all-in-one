import React, { useEffect } from 'react'
import "./Drum.css"
import interactive from './main'

const Drum = () => {
 useEffect(() => {
  const clean = interactive();

  return () => {
   clean()
  }
 },[])
  return (
    <section className="drum_container">
      <h2 id="drum_title">Drum 🥁 Kit</h2>
      <div className="drum_set">
        <button className="w drum">w</button>
        <button className="a drum">a</button>
        <button className="s drum">s</button>
        <button className="d drum">d</button>
        <button className="j drum">j</button>
        <button className="k drum">k</button>
        <button className="l drum">l</button>
      </div>
    </section>
  );
}

export default Drum