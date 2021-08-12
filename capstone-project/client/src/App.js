import './App.css';
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";
import HomePage from "./pages/HomePage/HomePage"
import VideoList from "./pages/VideoList/VideoList"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import VideoDetails from './components/VideoDetails/VideoDetails';
import AddVideo from "./components/AddVideo/AddVideo"
import Auth from "./components/Auth/Auth"

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
          <Route path="/add" component={AddVideo}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
      </header>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
