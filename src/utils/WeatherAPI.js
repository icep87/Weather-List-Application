const Configuration = require ('../Configuration');

class WeatherAPI {

    static getSearchLocation(q) {

        console.log("started Search for:" + q);
        const pathUrl = '/search.json';

        //build URL
        let queryBuilder = Configuration.baseUri + pathUrl;

        //Maybe we should add a function to check and clean up the url.
        const queryUrl = this.appendUrlWithQueryParams(queryBuilder, {
            q,
            key: Configuration.apiKey
        });

        const headers = {
            Accept: 'application/json'
        }

        const options = {
            method: 'GET',
            headers: headers
        }

        return fetch(queryUrl, options)
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }

    static getCurrentWeather(q) {

        console.log("Getting current weather for:" + q);
        const pathUrl = '/current.json';

        //build URL
        let queryBuilder = Configuration.baseUri + pathUrl;

        //Maybe we should add a function to check and clean up the url.
        const queryUrl = this.appendUrlWithQueryParams(queryBuilder, {
            q,
            key: Configuration.apiKey
        });

        const headers = {
            Accept: 'application/json'
        }

        const options = {
            method: 'GET',
            headers: headers
        }

        return fetch(queryUrl, options)
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }

    static getForecastWeather(q) {

        console.log("Getting current weather for:" + q);
        const pathUrl = '/forecast.json';

        //build URL
        let queryBuilder = Configuration.baseUri + pathUrl;

        //Maybe we should add a function to check and clean up the url.
        const queryUrl = this.appendUrlWithQueryParams(queryBuilder, {
            q,
            days: 3, 
            aqi: "no", 
            alerts: "no",
            key: Configuration.apiKey
        });

        const headers = {
            Accept: 'application/json'
        }

        const options = {
            method: 'GET',
            headers: headers
        }

        return fetch(queryUrl, options)
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }

    static appendUrlWithQueryParams(url, queryParams) {

        if (url === null) {
            return null;
        }

        if (queryParams === url) {
            return url;
        }

        const hasParams = url.indexOf('?') > -1;
        const seperator = (hasParams) ? '&' : '?';
        const queryString = url + seperator + new URLSearchParams(queryParams).toString();

        return queryString;
    }
}
export default WeatherAPI;