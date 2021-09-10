import React, { useContext } from 'react';
import { LocationContext } from '../contexts/LocationContext';

const SearchItem = (props) => {
    const { addLocation } = useContext(LocationContext);

    //TODO: Remove modal after adding item. 
    const addItem = () => {
        console.log(props);
        addLocation(props.data);
    }

    return (
        <li key={props.id} className="py-3">
            <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{props.name}</p>
                    {/* <p className="text-sm text-gray-500 truncate">{location.region + ', ' + location.country}</p> */}
                </div>
                <div>
                    <a
                        href="#" onClick={() => {addItem()}}
                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-green-300 hover:text-green-800 hover:border-white"
                    >
                        Add
                    </a>
                </div>
            </div>
        </li>

    )
}

export default SearchItem;