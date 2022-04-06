
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Login from './Components/Login';
import MyInformation from './Components/MyInformation';
import NoPage from './Components/NoPage';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
     Demo Gas Booking
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="login" element={< Login/>} />
          <Route path="MyInformation" element={<MyInformation />} />
          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
