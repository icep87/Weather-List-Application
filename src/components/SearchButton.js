import React from "react";
import SearchModal from './SearchModal';

const SearchButton = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="ml-4 mt-4 flex-shrink-0">
        <SearchModal isOpen={isOpen} setIsOpen={setIsOpen}></SearchModal>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            Search locations
          </button>

        </div>
    )
}

export default SearchButton;