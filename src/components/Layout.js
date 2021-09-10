import React from 'react';
import { LocationProvider } from '../contexts/LocationContext';

function Layout({children}) {
    return (
        <LocationProvider>
            <LayoutNoProvider>{children}</LayoutNoProvider>
        </LocationProvider>
    );
}

function LayoutNoProvider({children}) {

    return (
        <div>
            {children}
        </div>
    );
}

export default Layout;