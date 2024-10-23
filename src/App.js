import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'swiper/css';

import React, {useState, useEffect} from 'react';
import Header from './Pages/Header';
import Banner from './Pages/Banner';
import Main from './Pages/Main';
import Footer from './Pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  // the Scroll position of window
  const [scroll, setScroll] = useState(0);

  //constantly listen to scroll position
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    }
  }, [scroll]);

  return (
    <>
    <Header scroll={scroll} />
    <Banner />
    <Main />
    <Footer />
    <BackToTopBtn scroll={scroll} />
    </>
  );
}

export default App;
