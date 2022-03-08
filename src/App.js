import logo from './logo.svg';
import './App.css';
import HelloW from "./components/HelloW";
import HelloH from "./components/HelloH";
//import Login from "./components/Login";
import {Component, useState} from "react";
import Login from "./homework/Login";
import Main from "./homework/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//function App(){
class App extends Component{

    /*const [count, setCount] = useState(0);

    const callIncreaseCount = (countValue) => {
        setCount(countValue)
    }

    return (
        <div className="App">
            <header className="App-header">
                <HelloW stateCount={count}/>
                <HelloH funcIncreaseCount={callIncreaseCount} stateCount={count}/>
                <Login/>
            </header>
        </div>
    );*/

    render(){

        return (

            <Router>
                <Routes>
                    <Route path="/*" element={<Login/>}/>
                    <Route path="/Main" element={<Main/>}/>
                </Routes>
            </Router>

        )

    }

}

export default App;
