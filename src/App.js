import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";
import {Blog} from "./components/Blog";
import {About} from "./components/About";
import {ContactUs} from "./components/ContactUs";
import {Post} from "./components/Post";
import {Footer} from "./components/Footer";

function App() {
    return(
        <div>
            <Header/>
            <Menu/>
            <BrowserRouter>
                <Route exact path="/" component={()=><Blog/>}></Route>
                <Route path="/about" component={()=><About/>}></Route>
                <Route path="/contact-us" component={()=><ContactUs/>}></Route>
                <Route path="/post" component={()=><Post/>}></Route>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App;