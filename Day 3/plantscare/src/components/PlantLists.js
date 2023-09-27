import React from 'react';
import { connect } from 'react-redux'; // Import connect
import { removePlant } from '../actions/plants';

const PlantList = ({ plants, removePlantById }) => {
  const handleRemovePlant = (plantId) => {
    // Dispatch the removePlant action with the plantId
    removePlantById(plantId);
  };

  return (
    <div>
      <h2>Plant List</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            {plant.name} - {plant.species}{' '}
            <button onClick={() => handleRemovePlant(plant.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Connect the component to Redux
const mapStateToProps = (state) => ({
  plants: state.plants.plants,
});

const mapDispatchToProps = (dispatch) => ({
  removePlantById: (plantId) => dispatch(removePlant(plantId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantList);
