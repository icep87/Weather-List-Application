import React from 'react';
import SearchButton
    from './SearchButton';
const Header = (props) => {
    return (
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Weatherstation</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Getting weather data from WeatherAPI for the locations that are added to the list
                    </p>
                </div>
                <SearchButton></SearchButton>
            </div>
        </div>

    )
}

export default Header;