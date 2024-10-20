import {Login} from './login.jsx';
import {Home} from './home.jsx';
import {useNavigate} from '../hooks/useNavigate.js';
import {Me} from "./me.jsx";
import {Learning} from './learning.jsx'
import {Classes} from "./classes.jsx";

export function PageProvider() {
    const {currentPath} = useNavigate();

    const renderComponent = () => {
        switch (currentPath) {
            case '/login':
                return <Login/>;
            case '/me':
                return <Me/>
            case '/learning':
                return <Learning/>
            case '/classes':
                return <Classes/>
            default:
                return <Home/>;
        }
    };

    return (
        <div className='min-h-[70vh]'>
            {renderComponent()}
        </div>
    );
}
