import React, { useState, useEffect } from "react";
import "./overlay.css";
import { useDispatch, useSelector } from "react-redux";
// import { addPlant, deleteTodo, removeAllTodo, fetchDummyData } from "../actions/actions";
import { addPlant, removePlant } from "./actions/plants";
// import User from './user'; 

function Plant() {
//   const [todo, settodo] = useState("");

//   const todoList = useSelector((store) => store.todoReducer.Todolist) || []; // Ensure todoList is defined, initialize as an empty array if undefined

  let dispatch = useDispatch();
  const [plant, setPlant] = useState('');

// Add a new selector for plant data
const plantList = useSelector((store) => store.plantReducer.plantList) || [];
console.log(plantList);

return (
<div className="container">
  <div className="overlayyy">
    <input
      placeholder="Enter plant"
      name="plant"
      value={plant}
      onChange={(e) => {
        setPlant(e.target.value);
      }}
    />
    <button
      onClick={() => {
        dispatch(addPlant(plant)); // Dispatch the addPlant action
        setPlant('');
      }}
    >
      🌱ADD
    </button>

    <h2>Plant list from store</h2>
    {plantList.map((plant, idx) => (
      <div key={idx}>
        <li>{plant}</li>
      </div>
    ))}

    {/* ... (remaining code) */}
  </div>
  </div>
);
}

export default Plant;