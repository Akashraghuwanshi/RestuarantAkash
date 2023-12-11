import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './components/HeaderComponent';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MenuComponent from './components/MenuComponent';
import Home from './components/HomeComponent'
import About from './components/AboutComponent'
import Contact from './components/ContactComponent'
import SignUp from './components/SignUpComponent'
import Login from './components/LoginComponent'


 class App extends Component {
   render() {
   return (
   <div className="App">
    <Router>
   <Header/>
   <Routes>
     <Route path="/home" exact element={<Home/>}></Route>
     <Route path="/about" exact element={<About/>}></Route>
     <Route path="/contact" exact element={<Contact/>}></Route>
     <Route path="/menu" exact element={<MenuComponent/>}></Route>
     <Route path="/" exact element={<Login/>}></Route>
     <Route path="/signup" exact element={<SignUp/>}></Route>

   </Routes>
  
    </Router>
   </div>
   );
   }
   }

/* function App() {
  return (
    <div className="App">
      
    </div>
  );
} */

export default App;
