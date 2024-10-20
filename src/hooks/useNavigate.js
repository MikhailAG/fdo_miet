import {useContext} from 'react';
import {NavigationContext} from '../components/navigationContext.jsx';

export function useNavigate() {
    return useContext(NavigationContext);
}
