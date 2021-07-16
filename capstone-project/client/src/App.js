import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import HomePage from "./components/HomePage/HomePage"
import VideoList from "./components/VideoList/VideoList"
import Header from "./components/Header/Header"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import VideoDetails from './components/VideoDetails/VideoDetails';

function App() {
  
  return ( 
    <BrowserRouter>
    <Header/>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/videos" component={VideoList}/>
          <Route path="/nextvideo" component={VideoPlayer}/>
          <Route path="/videos/:videoId" component={VideoDetails}/>
        {/* <h1>WiiWatch</h1> */}
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
