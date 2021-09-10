import React, {useContext} from 'react';
import MissingData from './MissingData';
import { LocationContext } from '../contexts/LocationContext';
import ListItem from './ListItem';

const List = (props) => {
    const {location} = useContext(LocationContext);
    const locations = JSON.parse(location);

    if (location === null || JSON.parse(location).length === 0) return <div className='max-w-lg mx-auto py-10 '> <MissingData /> </div>;
    return (   
        <ul className="divide-y divide-gray-200">
            {console.log(JSON.parse(location))}
            {locations.map((location) => (
                <ListItem location={location} />
            ))}
        </ul>
    );
};
export default List;


