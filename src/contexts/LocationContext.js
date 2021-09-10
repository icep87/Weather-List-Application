import React, { createContext } from 'react';
import useLocalStorageState from 'use-local-storage-state'

export const LocationContext = createContext();

function LocationProvider({ children }) {

    const [location, setLocation] = useLocalStorageState('locations', JSON.stringify([]))

    const addLocation = (newLocationObject) => {
        //get the currenct locations in storage 
        const locations = JSON.parse(location);
        locations.push(newLocationObject);
        setLocation(JSON.stringify(locations));
    }

    return (
        <LocationContext.Provider value={{ setLocation, location, addLocation }}>
            {children}
        </LocationContext.Provider>
    );
}

export { LocationProvider };