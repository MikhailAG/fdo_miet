import {useContext} from 'react';
import {NavigationContext} from '../components/NavigationContext';

export function useNavigate() {
    return useContext(NavigationContext);
}
