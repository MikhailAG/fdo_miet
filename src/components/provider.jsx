import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from './login.jsx'

export function Provider() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    )
}
