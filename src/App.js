import React from 'react';
import Header from './components/header';
import Feature from './components/feature';
import About from './components/about';
import aboutimages from '../src/images/about1.png';
import Blog from './components/blogs';
import Contacts from './components/contacts';


function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimages}/>
      <Blog/>
      <Contacts/>
    </div>
  );
}

export default App;
