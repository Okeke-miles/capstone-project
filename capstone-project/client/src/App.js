import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import HomePage from "./components/HomePage/HomePage"
import VideoList from "./components/VideoList/VideoList"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import VideoDetails from './components/VideoDetails/VideoDetails';
import EditShowing from "./components/EditShowing/EditShowing"
import AddVideo from "./components/AddVideo/AddVideo"

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
          {/* <Route path="/videos/:videoId/edit" component={EditShowing}/> */}
          <Route path="/add" component={AddVideo}/>
        </Switch>
      </header>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
