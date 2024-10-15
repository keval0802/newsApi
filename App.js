import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store'; // Import your Redux store
import './App.css';
import Form from "./components/Form"
import TableData from './components/TableData';
import RefExample from './components/RefExample';
import MemoExample from './components/MemoExample';
import CallBackExample from './components/CallBackExample';
import ChaildA from './context/ChaildA';
import NewData from './components/NewData';
import { createContext } from 'react';
import ApiExample from './components/ApiExample';

export const data = createContext()
function App() {
  const abc = "Keval Vasoya"
  return (
    <data.Provider value={abc}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/edit/:id' element={<Form />} />
          <Route path='/table' element={<TableData />} />
          <Route path='/RefExample' element={<RefExample />} />
          <Route path='/Memo' element={<MemoExample />} />
          <Route path='/call-back' element={<CallBackExample />} />
          <Route path='/New-Data' element={<NewData />} />
          <Route path='/API-Example' element={<ApiExample />} />
          <Route path='/context' element={<ChaildA name={''} />} />
        </Routes>
      </BrowserRouter>
    </ data.Provider>

  );
}

export default App;