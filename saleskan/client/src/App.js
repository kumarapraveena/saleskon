import logo from './logo.svg';
import './App.css';
import Student from './Student';
import GetData from './getData';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student/>}></Route>
        <Route path="/get" element={<GetData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
