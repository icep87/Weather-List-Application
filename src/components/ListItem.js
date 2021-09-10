import React, { useState, useEffect } from 'react'
import { CheckCircleIcon, ChevronRightIcon, MailIcon } from '@heroicons/react/solid'
import WeatherAPI from '../utils/WeatherAPI'
import ListItemLoading from './ListItemLoading'


const ListItem = (props) => {

    const [currentWeather, setCurrentWeather] = useState();
    const [loadingCurrentWeather, setLoadingCurrentWeather] = useState(false);
    const [useFahrenheit, setUseFahrenheit] = useState(false);

    function getCurrentWeather(q) {
        setLoadingCurrentWeather(true);
        WeatherAPI.getCurrentWeather(q.name).then(data => {
            console.log(data)
            setCurrentWeather(data);
            setLoadingCurrentWeather(false);
        }
        );
    }
    useEffect(() => {
        getCurrentWeather(props.location);
    }, [])

    if (currentWeather === undefined) return <ListItemLoading location={props.location} />;
    return (
        <li key={props.location.id}>
            <a className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-12 w-12 rounded-full" alt="" src={currentWeather.current.condition.icon} />
                        </div>
                        <div className="ml-3 mr-3">
                            <p className="text-2xl text-gray-500" title={`Feels like: ${useFahrenheit ? currentWeather.current.feelslike_f : currentWeather.current.feelslike_c}°`}>{useFahrenheit ? currentWeather.current.temp_f : currentWeather.current.temp_c}&#176;</p>
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-2 divide-x divide-blueGray-500">
                            <div>
                                <p className="text-sm font-medium text-indigo-600 truncate">{props.location.name}</p>
                                <p className="mt-1 flex items-center text-sm text-gray-500">
                                    <span className="truncate">{currentWeather.current.condition.text}</span>
                                    <span className="truncate pl-2">Feels like: {useFahrenheit ? currentWeather.current.feelslike_f : currentWeather.current.feelslike_c}&#176;</span>
                                    <span title="Humidity" className="truncate pl-2"><i className="wi wi-humidity pr-1"></i> {currentWeather.current.humidity}%</span>
                                    <span title="Cloud coverage" className="truncate pl-2"><i className="wi wi-cloud pr-1"></i> {currentWeather.current.cloud}%</span>
                                    <span title="UV index" className="truncate pl-2"><i className="wi wi-day-sunny pr-1"></i> {currentWeather.current.uv}</span>

                                </p>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex flex-row space-x-4 ml-4 h-full ">
                                    <div className="flex flex-row space-x-2 items-center h-full">
                                        <div>
                                            <i className={`wi wi-strong-wind text-4xl text-gray-400`} />
                                        </div>
                                        <div>
                                            <span className="text-base">{currentWeather.current.wind_kph} kph</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-center h-full">
                                        <div>
                                            <i className={`wi wi-wind towards-${currentWeather.current.wind_degree}-deg text-4xl text-gray-400`} />
                                        </div>
                                        <div>
                                            <span className="text-base">{currentWeather.current.wind_degree}&#176;</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-center h-full">
                                        <div>
                                            <i className={`wi wi-barometer text-4xl text-gray-400`} />
                                        </div>
                                        <div>
                                            <span className="text-base">{currentWeather.current.pressure_mb} mb</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-default align-middle" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/detail/' + props.location.name;
                        }}><ChevronRightIcon className="h-5 w-5 text-gray-400  hover:text-indigo-600" aria-hidden="true" /></button>
                    </div>
                </div>
            </a>
        </li>
    )

}
export default ListItem;