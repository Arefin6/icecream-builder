import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Body></Body>
       <Footer></Footer>
    </div>
  );
}

export default App;
