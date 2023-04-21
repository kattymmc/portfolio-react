import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { PropagateLoader } from 'react-spinners';
import { IntlProvider } from 'react-intl';
import { langContext } from './context/langContext';
import EnglishMessages from './lang/en-US.json';


function App() {
  const [loading, setLoading] = useState(false);

  useContext(langContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  },[])

  return (
      <BrowserRouter>
      {
        loading ? 
          <div className='App'>
            <PropagateLoader color="#933469" size={30}  loading={loading}/>
          </div>
        :
          <>
          <Navbar />
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          </>
      }
      </BrowserRouter>
  );
}

export default App;
