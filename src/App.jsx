import Login from "./components/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import Forgotpass from "./components/Forgotpass";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgetpassword" element={<Forgotpass/>}/>
      </Routes>
    </Router>
  )
}

export default App
