import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import LoginPage from "./components/pages/1- LoginPage/LoginPage";
import AdminPage from "./components/pages/2- AdminPage/AdminPage";
import UserPage from "./components/pages/3- UserPage/UserPage";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/admin" component={AdminPage} />
                <Route exact path="/user" component={UserPage} />
            </Switch>
        </Router>
    );
}

export default App;

