import React, { useEffect } from 'react'
import "./ToDoList.css"
import Form from '../../components/(form)/Form';
import interactive from './main';

// inputs array
const inputs = [{
 name: "duty",
 type: "text",
 title: "Duty",
},
{
 name: "date",
 type: "date",
 title: "Date",
}]

const ToDoList = () => {
 useEffect(() => {
  const clean = interactive()

  return () => {
   clean()
  }
 },[])
  return (
    <section className="section_container">
      <h1>To Do List</h1>
      <div className="text_container">
        <h3>List all your duties that need to be done.</h3>
      </div>
      <Form inputs={inputs} buttonTitle="Add" />
      <div className="duty_list">

      </div>
    </section>
  );
}

export default ToDoList