import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux'; // Import connect
import { addPlant } from '../actions/plants';

const AddPlantForm = ({ addNewPlant }) => {
  const [plantData, setPlantData] = useState({ name: '', species: '' });
  let dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData({ ...plantData, [name]: value });
  };

  const handleSubmit = () => {
    const newPlant = { ...plantData, id: Date.now() };
    addNewPlant(newPlant);
    setPlantData({ name: '', species: '' });
  };

  return (
    <div>
      <h2>Add a Plant</h2>
      <input
        type="text"
        name="name"
        placeholder="Plant Name"
        value={plantData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="species"
        placeholder="Plant Species"
        value={plantData.species}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Plant</button>
    </div>
  );
};

// Connect the component to Redux
const mapDispatchToProps = (dispatch) => ({
  addNewPlant: (plant) => dispatch(addPlant(plant)),
});

export default connect(null, mapDispatchToProps)(AddPlantForm);
