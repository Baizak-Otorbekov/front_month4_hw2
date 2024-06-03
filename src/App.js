import React from 'react';
import './App.css';
import Header from './components/header'; 
import Footer from './components/footer'; 
import Main from './components/main'; 
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;


