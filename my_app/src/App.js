// import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <Footer/>
    
    </div>
  );
}

export default App;
