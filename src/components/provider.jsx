import {Login} from './login.jsx';
import {Home} from './home.jsx';
import {useNavigate} from '../hooks/useNavigate.js';

export function PageProvider() {
    const {currentPath} = useNavigate();

    const renderComponent = () => {
        console.log(currentPath);
        switch (currentPath) {
            case '/login':
                return <Login/>;
            default:
                return <Home/>;
        }
    };

    return (
        <div>
            {renderComponent()}
        </div>
    );
}
