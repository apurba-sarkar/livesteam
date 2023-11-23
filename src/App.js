// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Roompage from "./room/Roompage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/room/:roomId" element={<Roompage/>}/>
      </Routes>
    </div>
  );
}

export default App;
