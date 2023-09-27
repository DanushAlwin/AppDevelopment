import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './store';
// import PlantList from './components/PlantLists';
import AddPlantForm from './components/AddPlantForm';
import Plant from './plant';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Signup from './Signup.js';
// import PlantLists from './components/PlantLists';

function App() {
  return (

    <div className="App">
    <Plant />
  </div>
    // <Provider store={store}>
    //    <h1>Plant Care Assistant Admin Dashboard</h1>
    //     {/* <AddPlantForm />
    //     <PlantList /> */}
    //  <Routes>
    //   <Route path="/" element={<Login/>}></Route>
    //   <Route path="/signup" element={<Signup/>}></Route>
    //   <Route path = "/list" element = {<plants/>}></Route>
    //   <Route path = "/add" element = {<AddPlantForm/>}></Route>
    //  </Routes>
    // </Provider>
  
  );
}

export default App;
