import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import List from './components/List';
import Header from './components/Header';
import Layout from './components/Layout';
import DetailedView from './components/DetailedView';

function App() {

  //Use local storage for persitance in data
  //const [location, setLocation] = useLocalStorageState('locations', JSON.stringify([]))
  // const ListLoading = withListLoading(List);
  // const [appState, setAppState] = useState({
  //   loading: false,
  //   repos: null,
  // });


  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = 'https://api.github.com/users/icep87/repos';
  //   axios.get(apiUrl).then((repos) => {
  //     const allRepos = repos.data;
  //     setAppState({ loading: false, repos: allRepos });
  //   });
  // }, [setAppState]);
  //addLocation("Stockholm2");
  return (
    <Layout>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow mt-5">
          <Header></Header>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={List}/>
            <Route exact path="/detail/:name" component={DetailedView}/>
          </Switch>
          </BrowserRouter>
          </div>
        <footer>
          <div>
          Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
export default App;
