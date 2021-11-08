import './App.css';
import Users from './pages/Users';
import Posts from './pages/Posts';
import NavBar from './components/NavBar';
import {Route, Switch} from 'react-router-dom';


function App() {

    return (
        <div className="App">
            <NavBar/>

            <div className="content">
                <Switch>
                    <Route exact path="/" component={Users}/>
                    <Route exact path="/posts/:id" component={Posts}/>
                </Switch>
            </div>

        </div>
    );
}

export default App;
