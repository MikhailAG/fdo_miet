import {Routes, Route} from 'react-router-dom';
import {Login} from './login.jsx'

export function Provider() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
