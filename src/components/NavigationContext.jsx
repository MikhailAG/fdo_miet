import {createContext, useState, useCallback, useEffect} from 'react';
import * as propTypes from "prop-types";

export const NavigationContext = createContext(undefined);

export function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const navigate = useCallback((path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

NavigationProvider.propTypes = {
    children: propTypes.node.isRequired,
};
