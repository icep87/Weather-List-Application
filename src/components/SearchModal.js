import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SearchItem from './SearchItem'
import WeatherAPI from '../utils/WeatherAPI'
import InputProgress from './InputProgress'

const startingData = [
    {
        "id": 2274392,
        "name": "Old City, Skane Lan, Sweden",
        "region": "Skane Lan",
        "country": "Sweden",
        "lat": 55.6,
        "lon": 13.0,
        "url": "old-city-skane-lan-sweden"
    },
    {
        "id": 2279321,
        "name": "Sodra Forstaden, Skane Lan, Sweden",
        "region": "Skane Lan",
        "country": "Sweden",
        "lat": 55.6,
        "lon": 13.0,
        "url": "sodra-forstaden-skane-lan-sweden"
    }
]

const SearchModal = ({ isOpen, setIsOpen }: ModalProps) => {

    const [foundLocations, setFoundLocations] = useState(startingData);
    const [performingSearch, setPerformingSearch] = useState(false);

    //TODO: Add error handling :P 
    function searchLocation(q) {
        setPerformingSearch(true);
        WeatherAPI.getSearchLocation(q).then(data => {
            setFoundLocations(data);
            setPerformingSearch(false);
        }
        );
    }

    //As the modal closes on form submit we don't won't to use <form> so that's why we are using OnKeyPress instead
    const handleKeypress = e => {
        console.log(e.charCode);
        if (e.charCode === 13) {
            searchLocation(e.target.value);
        }
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" auto-reopen="true" className="fixed z-10 inset-0 overflow-y-auto" onClose={setIsOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                {/* <div className="pb-2 border-b border-gray-200">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Location search</h3>
                                </div> */}
                                <div>
                                    <div className="mt-1 relative flex items-center">
                                        <input
                                            type="text"
                                            name="search"
                                            id="search"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md disabled:opacity-50"
                                            placeholder="Search by name" disabled={(performingSearch)? "disabled" : ""}
                                            onKeyPress={handleKeypress}
                                        />
                                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                            <InputProgress searching={performingSearch} />
                                        </div>
                                    </div>
                                    <p className="mt-2 pb-2 text-xs text-gray-400" id="email-description">
                                        Press "Enter" to start search
                                    </p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <div className="flow-root mt-6" >
                                        <ul className="-my-5 divide-y divide-gray-200">
                                            {foundLocations.map((location) => (
                                                <SearchItem id={location.id} name={location.name} data={location} />
                                            ))}
                                        </ul>
                                    </div >
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root >
    );
};
export default SearchModal;