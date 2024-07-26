import './App.css';
import React from 'react';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div >
      <Router> 
      <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add" element={<AddEmployeeComponent />} />
            <Route path='/update/:id' element={<UpdateEmployeeComponent/>}/>
           
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
